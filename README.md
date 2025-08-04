# Makor Chaim Yeshiva - Fundraising Website

A professional bilingual (Hebrew/English) fundraising website for Makor Chaim Yeshiva built with modern web technologies.

## 🌐 Internationalization System

This website uses a clean internationalization system similar to Android's approach, with all text stored in separate JSON files for easy translation and management.

### Language Files

- **`languages/en.json`** - All English translations
- **`languages/he.json`** - All Hebrew translations

### How to Edit Text

Instead of editing HTML directly, simply modify the JSON files:

#### Example: Changing the hero title
```json
// In languages/en.json
{
  "hero": {
    "title": "Makor Chaim - Source of Life",   // ← Edit this
    "subtitle": "Building our new campus...",  // ← Or this
    "cta_button": "Support Our Vision"         // ← Or this
  }
}
```

```json
// In languages/he.json  
{
  "hero": {
    "title": "מקור חיים - \"מקור החיים\"",      // ← Edit this
    "subtitle": "בונים את הקמפוס החדש...",      // ← Or this
    "cta_button": "תמכו בחזון שלנו"           // ← Or this
  }
}
```

### Adding New Text

1. Add the text to both `en.json` and `he.json` files
2. Update `script.js` to include the new element selector
3. The text will automatically update when switching languages

### Benefits of This System

✅ **Easy Translation** - All text in one place per language  
✅ **Clean HTML** - No cluttered data attributes  
✅ **Maintainable** - Easy to add new languages  
✅ **Professional** - Industry-standard approach  
✅ **Fallback Safe** - Falls back gracefully if JSON fails to load  

## 📝 Content Still Needed

**Rabbi Dov Zinger's Message** - Update in both language files:
- `rav_message.content_paragraph_1` (English & Hebrew)
- `rav_message.content_paragraph_2` (English & Hebrew)

## 🖼️ Images to Replace

The following placeholder images should be replaced with real photos:

- `dorms1.png` - Dormitory design/architectural concept
- `students-learning.jpg` - Students studying in Beit Midrash
- `campus-view.jpg` - Beautiful campus landscape
- `students-discussion.jpg` - Students in chavruta learning
- `community-meal.jpg` - Students sharing Shabbat meal
- `outdoor-learning.jpg` - Torah study in nature
- `graduation.jpg` - Graduation ceremony

## 💡 Quick Tips

1. **To translate**: Edit the JSON files in the `languages/` folder
2. **To add content**: Update the appropriate section in both language files
3. **To change styling**: Edit `styles.css`
4. **To add features**: Modify `script.js` and add corresponding translations

---

© 2025 Makor Chaim Institutions. All rights reserved.

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Project Showcase**: Click on project cards to view detailed information
- **Smooth Animations**: Professional animations and transitions throughout
- **Modern Design**: Clean, professional aesthetic appropriate for fundraising
- **Project Modal**: Detailed project information in an overlay modal

## Current Projects

### Student Fitness & Wellness Center (Gym)
- Interactive project card with prospect image
- Detailed project information including features, impact, and partnership opportunities
- Stats and fundraising goals clearly displayed

## Getting Started

1. **Add Your Gym Prospect Image**: 
   - Replace the placeholder by adding your gym interior design image as `gym-prospect.jpg` in the root directory
   - The image should be high-quality (recommended: 1200x800px or similar aspect ratio)

2. **Customize Content**:
   - Update contact information in the Contact section
   - Modify project details, costs, and timeline as needed
   - Add your yeshiva's specific address and contact details

3. **Add More Projects**:
   - Duplicate the project card structure in `index.html`
   - Add corresponding detail content in `script.js`
   - Update the grid layout as needed

## File Structure

```
mekor-chaim-general-brochure-1/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and responsive design
├── script.js           # JavaScript functionality and modal content
├── gym-prospect.jpg    # Your gym interior design image (add this)
└── README.md           # This file
```

## Customization Guide

### Adding New Projects

1. **In HTML** (`index.html`):
   ```html
   <div class="project-card" onclick="openProjectDetails('project-name')">
       <!-- Project card content -->
   </div>
   ```

2. **In JavaScript** (`script.js`):
   Add a new case in the `openProjectDetails` function with your project's details.

### Updating Contact Information

Edit the contact section in `index.html`:
- Development office email and phone
- Physical address
- Any other contact methods

### Styling Customizations

The website uses:
- **Colors**: Blue gradient theme (#667eea to #764ba2)
- **Fonts**: Playfair Display (headings) and Open Sans (body text)
- **Layout**: CSS Grid and Flexbox for responsive design

## Browser Compatibility

- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Deployment

This is a static website that can be hosted on:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

Simply upload all files to your web server or hosting platform.

## Need Help?

The website is designed to be easily customizable. Key areas to focus on:
1. Replace `gym-prospect.jpg` with your actual image
2. Update all text content to match your specific needs
3. Modify contact information
4. Add additional projects as needed

The design is professional and optimized for fundraising purposes, with clear calls-to-action and partnership opportunities prominently displayed.
