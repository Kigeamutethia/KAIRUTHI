import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src/app'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Button Hover States
  content = content.replace(/hover:bg-\[\#1e3c12\]/g, 'hover:bg-[#3B4A3E]');
  
  // Text Headings: #1e3c12 -> #2B2B2B
  content = content.replace(/text-\[\#1e3c12\]/g, 'text-[#2B2B2B]');
  
  // Hero and Primary text: #95695e -> #6B4F3A (Primary Brown)
  content = content.replace(/text-\[\#95695e\]/g, 'text-[#6B4F3A]');
  content = content.replace(/bg-\[\#95695e\]/g, 'bg-[#6B4F3A]');
  content = content.replace(/from-\[\#95695e\]/g, 'from-[#6B4F3A]');
  content = content.replace(/border-\[\#95695e\]/g, 'border-[#6B4F3A]');
  
  // Primary dark background sections: #1e3c12 -> #6B4F3A (Hero Brown)
  content = content.replace(/bg-\[\#1e3c12\]/g, 'bg-[#6B4F3A]');
  content = content.replace(/from-\[\#1e3c12\]/g, 'from-[#6B4F3A]');
  content = content.replace(/to-\[\#1e3c12\]/g, 'to-[#6B4F3A]');
  
  // Beige Sections: #e9ede8 -> #F5EFE6
  content = content.replace(/bg-\[\#e9ede8\]/g, 'bg-[#F5EFE6]');
  content = content.replace(/from-\[\#e9ede8\]/g, 'from-[#F5EFE6]');
  content = content.replace(/to-\[\#e9ede8\]/g, 'to-[#F5EFE6]');
  content = content.replace(/border-\[\#e9ede8\]/g, 'border-[#D8CFC4]'); // Light Taupe for borders
  
  // Secondary Beige: #f4f6f3 -> #F5EFE6
  content = content.replace(/to-\[\#f4f6f3\]/g, 'to-[#F5EFE6]');
  
  // Icons/Buttons Green: #1d4a14 -> #4A5D4E
  content = content.replace(/text-\[\#1d4a14\]/g, 'text-[#4A5D4E]');
  content = content.replace(/bg-\[\#1d4a14\]/g, 'bg-[#4A5D4E]');
  content = content.replace(/from-\[\#1d4a14\]/g, 'from-[#4A5D4E]');
  content = content.replace(/to-\[\#1d4a14\]/g, 'to-[#4A5D4E]');
  
  // Hover Green: to-[#2a5018] -> to-[#3B4A3E]
  content = content.replace(/to-\[\#2a5018\]/g, 'to-[#3B4A3E]');
  
  fs.writeFileSync(file, content);
});
console.log("Colors updated!");
