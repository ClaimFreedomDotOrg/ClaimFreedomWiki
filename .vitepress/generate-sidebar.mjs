// Script to generate VitePress sidebar configuration from Jekyll collections
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Function to extract title from markdown frontmatter
function extractTitle(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const match = content.match(/^---\s*\ntitle:\s*["']?([^"\n]+)["']?\s*\n/m);
  if (match) {
    return match[1].trim().replace(/^["']|["']$/g, '');
  }
  // Fallback to filename
  const filename = filePath.split('/').pop().replace('.md', '');
  return filename.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Function to process a collection directory
function processCollection(collectionName, displayName) {
  const dirPath = collectionName;
  const files = readdirSync(dirPath)
    .filter(f => f.endsWith('.md') && f !== 'index.md')
    .sort();
  
  const items = files.map(file => {
    const filePath = join(dirPath, file);
    const title = extractTitle(filePath);
    const link = `/${collectionName}/${file.replace('.md', '')}`;
    return { text: title, link };
  });
  
  return {
    text: displayName,
    items: [
      { text: 'Overview', link: `/${collectionName}/` },
      ...items
    ],
    collapsed: false
  };
}

// Generate sidebar for all collections
const collections = [
  { name: 'practices', display: 'Practices' },
  { name: 'philosophy', display: 'Philosophy' },
  { name: 'neuroscience', display: 'Neuroscience' },
  { name: 'biblical', display: 'Biblical Decodings' },
  { name: 'examples', display: 'Cultural Examples' },
  { name: 'body-of-christ', display: 'The Body of Christ' },
  { name: 'user-manual', display: 'The User Manual' }
];

const sidebar = {};

collections.forEach(({ name, display }) => {
  sidebar[`/${name}/`] = [processCollection(name, display)];
});

// Also add docs sidebar
sidebar['/docs/'] = [{
  text: 'Core Framework',
  items: [
    { text: 'About', link: '/docs/about' },
    { text: 'Invocation: Anti-Corruption Axiom', link: '/docs/invocation' },
    { text: 'Manifesto from the Universe', link: '/docs/manifesto' },
    { text: 'The Marvels of Being', link: '/docs/marvels-of-being' },
    { text: 'The Hijacking', link: '/docs/the-hijacking' },
    { text: 'Ancient Warnings', link: '/docs/ancient-warnings' },
    { text: 'The Loop', link: '/docs/the-loop' },
    { text: 'Resources', link: '/docs/resources' },
    { text: 'Contributing', link: '/docs/contributing' },
    { text: 'License', link: '/docs/license' }
  ]
}];

// Output the configuration
console.log('Generated sidebar configuration:');
console.log(JSON.stringify(sidebar, null, 2));

// Write to a file that can be imported
writeFileSync('.vitepress/sidebar.json', JSON.stringify(sidebar, null, 2));
console.log('\n✅ Sidebar configuration written to .vitepress/sidebar.json');
