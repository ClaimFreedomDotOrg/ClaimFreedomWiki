#!/usr/bin/env python3
"""Fix Jekyll front matter to VitePress format"""

import os
import re
from pathlib import Path

def fix_frontmatter(file_path):
    """Remove Jekyll-specific front matter fields, keep only title"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match front matter block
    pattern = r'^---\s*\n(.*?)\n---\s*\n'
    match = re.match(pattern, content, re.DOTALL)
    
    if not match:
        return False  # No front matter
    
    frontmatter = match.group(1)
    rest_of_content = content[match.end():]
    
    # Extract only the title line
    title_match = re.search(r'^title:\s*(.+)$', frontmatter, re.MULTILINE)
    
    if not title_match:
        return False  # No title
    
    title_line = title_match.group(0)
    
    # Check if there are other fields to remove
    jekyll_fields = ['layout:', 'nav_order:', 'parent:', 'nav_exclude:', 'has_children:', 'grand_parent:']
    has_jekyll_fields = any(field in frontmatter for field in jekyll_fields)
    
    if not has_jekyll_fields:
        return False  # Already clean
    
    # Create new front matter with only title
    new_content = f"---\n{title_line}\n---\n\n{rest_of_content}"
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    root = Path('.')
    patterns = ['**/*.md']
    exclude_dirs = {'node_modules', '.vitepress', '.git'}
    
    fixed_count = 0
    
    for pattern in patterns:
        for md_file in root.glob(pattern):
            # Skip excluded directories
            if any(excluded in md_file.parts for excluded in exclude_dirs):
                continue
            
            # Skip this script's documentation
            if 'VITEPRESS_MIGRATION' in str(md_file):
                continue
            
            try:
                if fix_frontmatter(md_file):
                    print(f"Fixed: {md_file}")
                    fixed_count += 1
            except Exception as e:
                print(f"Error processing {md_file}: {e}")
    
    print(f"\n✅ Fixed {fixed_count} files")

if __name__ == '__main__':
    main()
