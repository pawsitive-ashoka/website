# Dog Markdown File Template

To add a new dog or cat, create a new `.md` file in the `/public/dogs/` directory.

## File Structure

Each file should have:
1. **Frontmatter** (YAML metadata between `---` markers)
2. **Content** (the personality/story text)

## Example File: `dogname.md`

```markdown
---
name: Dog Name
gender: Male/Female
breed: Indie/Mixed/Specific Breed
age: X years/months
appearance: Brief physical description
location: Where they are usually found
image: /dogs/dogname.jpg
isCat: false (set to true if it's a cat)
order: 1 (for display ordering, lower numbers appear first)
---

Write the personality description and story here. This can be multiple paragraphs.

Include details about their behavior, quirks, favorite spots, and how they interact with people and other animals.
```

## Required Fields
- `name`: The animal's name
- `gender`: Male or Female
- `breed`: Usually "Indie" for Indian street dogs
- `age`: Current age
- `appearance`: Physical description
- `location`: Location of the dog
- `image`: Path to image file (must start with `/dogs/`)
- `order`: Number for display order

## Optional Fields
- `isCat`: Set to `true` if it's a cat (default is `false`)

## Content
The content section (after the second `---`) should contain the personality description and story. This will be displayed in the "Personality & Story" section of the dialog.

## Tips
- Keep frontmatter values on a single line
- Use proper YAML format (key: value)
- Order numbers don't need to be consecutive
- Images should be placed in `/public/dogs/` directory
