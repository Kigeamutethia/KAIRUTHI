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
  
  // Base button gradients changed to solid #4A5D4E
  content = content.replace(/bg-gradient-to-r from-\[\#4A5D4E\] to-\[\#6B4F3A\]/g, 'bg-[#4A5D4E]');
  
  // Hover gradient inner divs changed to solid #6B4F3A
  content = content.replace(/bg-gradient-to-r from-\[\#6B4F3A\] to-\[\#4A5D4E\]/g, 'bg-[#6B4F3A]');
  content = content.replace(/bg-gradient-to-r from-\[\#6B4F3A\] to-\[\#3B4A3E\]/g, 'bg-[#6B4F3A]');
  
  // Standard hover bg classes
  content = content.replace(/hover:bg-\[\#3B4A3E\]/g, 'hover:bg-[#6B4F3A]');
  
  // Ensure buttons stay text-white on hover by removing any accidental hover text changes,
  // but 'text-white' is usually enough in tailwind.
  // Actually, wait, some might have hover:text-[#something], but the primary buttons just use 'text-white'.
  
  fs.writeFileSync(file, content);
});
console.log("Button hover colors updated!");
