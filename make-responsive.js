import fs from 'fs';
import path from 'path';

// Helper function to process file content
const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Home.tsx specific
  if (filePath.includes('Home.tsx')) {
    content = content.replace(/text-6xl/g, 'text-4xl md:text-5xl lg:text-6xl');
    content = content.replace(/h-\[600px\]/g, 'h-[400px] md:h-[600px]');
    content = content.replace(/text-5xl/g, 'text-4xl md:text-5xl');
  }

  // About.tsx specific
  if (filePath.includes('About.tsx')) {
    content = content.replace(/text-5xl/g, 'text-4xl md:text-5xl');
  }

  // Contact.tsx specific
  if (filePath.includes('Contact.tsx')) {
    content = content.replace(/text-5xl/g, 'text-4xl md:text-5xl');
    content = content.replace(/h-\[500px\]/g, 'h-[300px] md:h-[500px]');
  }

  // PracticeAreas.tsx specific
  if (filePath.includes('PracticeAreas.tsx')) {
    content = content.replace(/text-5xl/g, 'text-4xl md:text-5xl');
  }

  fs.writeFileSync(filePath, content);
};

['Home.tsx', 'About.tsx', 'Contact.tsx', 'PracticeAreas.tsx'].forEach(file => {
  processFile(path.join('src/app/pages', file));
});

console.log('Responsiveness applied!');
