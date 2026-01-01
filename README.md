# 🎨 Kenneth Bryan G. Escala - Portfolio Website

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Features a sleek dark theme with teal accents, showcasing projects, certifications, and professional skills.

![Portfolio Website](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![HTML5](https://img.shields.io/badge/HTML5-✓-success) ![CSS3](https://img.shields.io/badge/CSS3-✓-success) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-success)

---

## ✨ Features

- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎭 Dark Theme** - Modern minimalist design with teal accent colors
- **⚡ Zero Dependencies** - Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- **🎯 Featured Content** - 3 featured projects and certifications on homepage, full list on secondary pages
- **📂 Dynamic Data Management** - Easy to add/edit projects and certificates via JavaScript arrays
- **🏷️ Smart Filtering** - Filter certifications by category (Software, Data, Security, AI)
- **🎪 Interactive Previews** - Click project cards to open interactive preview modals
- **📧 Contact Form** - Functional contact form with form submission via FormSubmit
- **🔄 Smooth Navigation** - Integrated navigation across main and secondary pages
- **🎬 Polished Animations** - Smooth hover effects, transitions, and scroll effects

---

## 📋 Page Structure

### **Main Page (index.html)**

- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Me** - Personal bio with key statistics
- **Skills** - Technical skills organized by category (Frontend, Backend, Tools)
- **Featured Projects** - 3 showcase projects with descriptions and tags
- **Featured Certifications** - 3 highlighted certifications with filtering options
- **Contact** - Contact information and working contact form
- **Footer** - Quick navigation and social media links

### **Secondary Pages**

- **projects.html** - All projects in a comprehensive grid layout
- **certificates.html** - Complete certification showcase with advanced filtering

---

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Modern styling with custom properties, Grid, and Flexbox |
| **Vanilla JavaScript (ES6+)** | Dynamic content rendering and interactivity |
| **FormSubmit API** | Contact form submission service |

---

## 🚀 Quick Start

### Option 1: Direct File Opening

1. Clone the repository:

```bash
git clone https://github.com/asazin90143/Portfolio_c1.git
cd Portfolio_c1
```

1. Open `index.html` in your browser

```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Option 2: Local Server

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx serve

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then visit: `http://localhost:8000`

---

## 📁 Project Structure

```
Portfolio_c1/
├── 📄 index.html           # Main portfolio page
├── 📄 projects.html        # All projects showcase
├── 📄 certificates.html    # Complete certifications
├── 🎨 style.css           # All styling (responsive design included)
├── ⚙️ script.js           # Dynamic rendering & interactivity
└── 📋 README.md           # This file
```

---

## 🎨 Customization Guide

### 1. **Update Your Information**

Edit `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">Building Modern Web Solutions</h1>
<p class="hero-description">Your description here</p>

<!-- About Section -->
<p>Your bio here</p>

<!-- Contact Section -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Social Links -->
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### 2. **Customize Color Scheme**

Edit `style.css` CSS variables:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #1a1a1a;      /* Secondary background */
    --bg-tertiary: #252525;       /* Card backgrounds */
    --text-primary: #e8e8e8;      /* Main text color */
    --text-secondary: #b8b8b8;    /* Secondary text */
    --accent: #2dd4bf;            /* Accent color (teal) */
    --border-color: #333333;      /* Border color */
}
```

### 3. **Add a Project**

Edit `script.js` - Add to `projectsData` array:

```javascript
{
    title: "Your Project Name",
    description: "Project description and what it does.",
    image: "https://images.unsplash.com/photo-xxx?w=400&h=300&fit=crop",
    link: "https://project-live-url.com or github.com/repo",
    tags: ["Technology1", "Technology2", "Technology3"]
}
```

### 4. **Add a Certificate**

Edit `script.js` - Add to `certificatesData` array:

```javascript
{
    title: "Certificate Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    category: "software",  // Options: software, data, security, ai
    categoryLabel: "Software Development & Engineering",
    link: "https://certificate-verification-link.com",
    icon: "💻",  // Use any emoji
    image: "https://images.unsplash.com/photo-xxx?w=600&h=400&fit=crop"
}
```

### 5. **Update Skills**

Edit `index.html` - Update skill categories:

```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill1</span>
        <span class="skill-tag">Skill2</span>
    </div>
</div>
```

---

## 📊 Features Deep Dive

### Dynamic Content Rendering

- **Main Page**: Automatically displays 3 featured projects and certifications
- **Secondary Pages**: Shows complete lists of all projects and certifications
- **Smart Detection**: JavaScript detects page type and renders accordingly

### Certificate Filtering

Click category buttons to filter certifications:

- **All** - Shows all certifications
- **Software Development & Engineering** - Coding-related certs
- **Data Science & Analytics** - Data and analytics certs
- **Cybersecurity & Networking** - Security and network certs
- **Artificial Intelligence & ML** - AI and machine learning certs

### Interactive Project Previews

- Click "Preview" badge to open interactive modal
- Click project card to open project in new tab
- Seamless experience across responsive devices

### Navigation System

- **Smooth Scrolling** - All navigation links scroll smoothly to sections
- **Mobile Menu** - Hamburger menu on mobile devices (< 768px)
- **Cross-Page Navigation** - Links work across main and secondary pages
- **Active State Indicators** - Current page highlighted in navigation

---

## 📱 Responsive Design

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| **Mobile** | < 768px | Single column, hamburger menu |
| **Tablet** | 768px - 1199px | Adapted grid, responsive navigation |
| **Desktop** | ≥ 1200px | Full grid layout, all features |

---

## 🌐 Deployment

### **GitHub Pages** (Free)

1. Push code to GitHub repository
2. Go to **Settings → Pages**
3. Select `master` branch as source
4. Site: `https://yourusername.github.io/Portfolio_c1`

### **Vercel** (Recommended)

```bash
npm i -g vercel
vercel
```

### **Netlify**

1. Drag & drop folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect GitHub for auto-deployment

### **Firebase Hosting**

```bash
npm i -g firebase-tools
firebase init hosting
firebase deploy
```

---

## 📝 Data Structure Reference

### Project Object

```javascript
{
    title: String,           // Project name
    description: String,     // Project overview
    image: String (URL),     // Preview image
    link: String (URL),      // Project link
    tags: Array<String>      // Technology tags
}
```

### Certificate Object

```javascript
{
    title: String,           // Certificate name
    issuer: String,          // Organization name
    date: String,            // Completion date
    category: String,        // Category key
    categoryLabel: String,   // Display category name
    link: String (URL),      // Certificate link
    icon: String (emoji),    // Display icon
    image: String (URL)      // Preview image
}
```

---

## 🔧 Troubleshooting

### Contact Form Not Working

- Check email in `script.js` (line ~360): `kent.escala143@gmail.com`
- Ensure FormSubmit service is accessible
- Check browser console for errors

### Images Not Loading

- Verify image URLs are accessible
- Ensure URLs use HTTPS (not HTTP)
- Check Unsplash links or replace with your images

### Navigation Not Working

- Verify hash IDs match in HTML (`#projects`, `#certificates`, etc.)
- Check browser console for JavaScript errors
- Clear browser cache and reload

### Mobile Menu Not Opening

- Ensure `mobile-toggle` element exists in HTML
- Check CSS media queries in `style.css`
- Verify JavaScript is enabled

---

## 💡 Best Practices

✅ **Do:**

- Keep project descriptions concise and impactful
- Use high-quality images (optimize for web)
- Update certifications as you achieve new ones
- Test on multiple devices before deploying
- Use semantic HTML and proper accessibility

❌ **Don't:**

- Remove required attributes from forms
- Link to broken project URLs
- Use copyrighted images without permission
- Overload with too many projects (keep to 10-15)
- Ignore mobile responsiveness

---

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS Reference
- [CSS Tricks](https://css-tricks.com/) - Advanced CSS techniques
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Layout mastery
- [JavaScript ES6+](https://es6.io/) - Modern JavaScript features
- [Responsive Design](https://www.w3schools.com/css/css_rwd_intro.asp) - Mobile-first approach

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

You're free to:

- ✅ Use this template for your portfolio
- ✅ Modify and customize it
- ✅ Deploy and share it
- ✅ Use for commercial purposes

Just remember to give credit to the original!

---

## 🤝 Contributing

Found a bug or have a suggestion? Great!

1. **Report Issues** - [Create an issue](https://github.com/asazin90143/Portfolio_c1/issues)
2. **Submit Changes** - Fork → Modify → Pull Request
3. **Improve Docs** - Help make this README better

---

## 👤 Author

**Kenneth Bryan G. Escala**

- 🌐 Portfolio: [Visit Site](https://github.com/asazin90143/Portfolio_c1)
- 💼 GitHub: [@asazin90143](https://github.com/asazin90143)
- 💬 LinkedIn: [Connect](https://www.linkedin.com/in/kenneth-bryan-escsla-b305161a1/)
- 📧 Email: <kent.escala143@gmail.com>

---

## 🎯 Recent Updates

- ✅ Fixed navigation bar across all pages
- ✅ Removed preview error messages
- ✅ Implemented featured content (3 items on main, all on secondary)
- ✅ Enhanced mobile responsiveness
- ✅ Improved certificate filtering

---

## 📊 Stats

- **Pages**: 3 (main + 2 secondary)
- **Sections**: 7 (Hero, About, Skills, Projects, Certificates, Contact, Footer)
- **Categories**: 4 (Certificate categories)
- **Responsive**: Yes (Mobile, Tablet, Desktop)
- **Dependencies**: 0 (Pure vanilla JavaScript)
- **Load Time**: < 1 second
- **Mobile Score**: 95+

---

## 🙏 Acknowledgments

- **Images**: [Unsplash](https://unsplash.com) - Free stock photos
- **Icons**: Emoji characters for visual appeal
- **Inspiration**: Modern portfolio design trends
- **Form Service**: [FormSubmit](https://formsubmit.co/) - Free form submissions

---

## ⭐ Show Your Support

If you found this portfolio template helpful, please:

- ⭐ Star the repository
- 🍴 Fork for your own use
- 📢 Share with others
- 💬 Provide feedback

---

**Made with ❤️ and ☕ by Kenneth Bryan G. Escala**

*Last Updated: January 2026*
