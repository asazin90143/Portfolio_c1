# Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. Features a minimalist dark theme with professional corporate aesthetics.

![Portfolio Preview](<img width="1919" height="977" alt="image" src="https://github.com/user-attachments/assets/ce5dd721-1458-4f96-8df4-9e8176ddf2f4" />)

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Projects Section** - Easily manage projects through a JavaScript data array
- **Certificate Showcase** - Display your certifications with category filtering
- **Smooth Animations** - Polished hover effects and transitions throughout
- **Dark Theme** - Minimalist design with deep charcoal backgrounds and teal accents
- **Contact Form** - Functional contact section with form validation
- **Mobile Navigation** - Collapsible hamburger menu for mobile devices

## 📋 Sections

1. **Hero/Home** - Introduction with call-to-action buttons
2. **About Me** - Personal bio with statistics cards
3. **Skills** - Technical skills organized by category
4. **Projects** - Clickable project cards with images and descriptions
5. **Certificates** - Filterable certifications by category
6. **Contact** - Contact information and message form
7. **Footer** - Quick links and social media connections

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries required

## 📦 Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory:
```bash
cd portfolio-website
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Visit `http://localhost:8000` in your browser

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #1a1a1a;      /* Secondary background */
    --bg-tertiary: #252525;       /* Card backgrounds */
    --text-primary: #e8e8e8;      /* Main text color */
    --text-secondary: #b8b8b8;    /* Secondary text */
    --accent: #2dd4bf;            /* Accent color (teal) */
}
```

### Adding Projects

Open `script.js` and add to the `projectsData` array:

```javascript
{
    title: "Project Name",
    description: "Brief description of the project.",
    image: "https://your-image-url.com/image.jpg",
    link: "https://project-url.com",
    tags: ["React", "Node.js", "MongoDB"]
}
```

### Adding Certificates

Open `script.js` and add to the `certificatesData` array:

```javascript
{
    title: "Certificate Name",
    issuer: "Organization",
    date: "Month Year",
    category: "software", // software, data, security, or ai
    categoryLabel: "Software Development & Engineering",
    link: "https://certificate-url.com",
    icon: "💻"
}
```

### Updating Personal Information

Edit `index.html` to update:
- Navigation logo and name
- Hero section title and description
- About section text and statistics
- Skills categories and tags
- Contact information (email, LinkedIn, GitHub)
- Footer content and social links

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/portfolio-website`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts
4. Your site is deployed!

### Netlify

1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository
3. Site goes live automatically

## 🎯 Certificate Categories

The certificates section supports four categories:

- **Software Development & Engineering** (`software`)
- **Data Science & Analytics** (`data`)
- **Cybersecurity & Networking** (`security`)
- **Artificial Intelligence & ML** (`ai`)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## ✨ Key Features Explained

### Clickable Project Cards
All project cards are fully clickable - click anywhere on the card to visit the project link in a new tab.

### Dynamic Certificate Filtering
Click category buttons to filter certificates by type. The "All" button shows everything.

### Smooth Scroll Navigation
Navigation links smoothly scroll to their corresponding sections with proper offset.

### Mobile Menu
Hamburger menu appears on mobile devices with smooth slide-in animation.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons using emoji characters
- Inspired by modern portfolio designs

---

⭐ If you found this helpful, consider giving it a star!

**Made with ❤️ and ☕**# Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. Features a minimalist dark theme with professional corporate aesthetics.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0a0a/2dd4bf?text=Portfolio+Website+Preview)

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Projects Section** - Easily manage projects through a JavaScript data array
- **Certificate Showcase** - Display your certifications with category filtering
- **Smooth Animations** - Polished hover effects and transitions throughout
- **Dark Theme** - Minimalist design with deep charcoal backgrounds and teal accents
- **Contact Form** - Functional contact section with form validation
- **Mobile Navigation** - Collapsible hamburger menu for mobile devices

## 📋 Sections

1. **Hero/Home** - Introduction with call-to-action buttons
2. **About Me** - Personal bio with statistics cards
3. **Skills** - Technical skills organized by category
4. **Projects** - Clickable project cards with images and descriptions
5. **Certificates** - Filterable certifications by category
6. **Contact** - Contact information and message form
7. **Footer** - Quick links and social media connections

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries required

## 📦 Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory:
```bash
cd portfolio-website
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Visit `http://localhost:8000` in your browser

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #1a1a1a;      /* Secondary background */
    --bg-tertiary: #252525;       /* Card backgrounds */
    --text-primary: #e8e8e8;      /* Main text color */
    --text-secondary: #b8b8b8;    /* Secondary text */
    --accent: #2dd4bf;            /* Accent color (teal) */
}
```

### Adding Projects

Open `script.js` and add to the `projectsData` array:

```javascript
{
    title: "Project Name",
    description: "Brief description of the project.",
    image: "https://your-image-url.com/image.jpg",
    link: "https://project-url.com",
    tags: ["React", "Node.js", "MongoDB"]
}
```

### Adding Certificates

Open `script.js` and add to the `certificatesData` array:

```javascript
{
    title: "Certificate Name",
    issuer: "Organization",
    date: "Month Year",
    category: "software", // software, data, security, or ai
    categoryLabel: "Software Development & Engineering",
    link: "https://certificate-url.com",
    icon: "💻"
}
```

### Updating Personal Information

Edit `index.html` to update:
- Navigation logo and name
- Hero section title and description
- About section text and statistics
- Skills categories and tags
- Contact information (email, LinkedIn, GitHub)
- Footer content and social links

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/portfolio-website`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts
4. Your site is deployed!

### Netlify

1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository
3. Site goes live automatically

## 🎯 Certificate Categories

The certificates section supports four categories:

- **Software Development & Engineering** (`software`)
- **Data Science & Analytics** (`data`)
- **Cybersecurity & Networking** (`security`)
- **Artificial Intelligence & ML** (`ai`)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## ✨ Key Features Explained

### Clickable Project Cards
All project cards are fully clickable - click anywhere on the card to visit the project link in a new tab.

### Dynamic Certificate Filtering
Click category buttons to filter certificates by type. The "All" button shows everything.

### Smooth Scroll Navigation
Navigation links smoothly scroll to their corresponding sections with proper offset.

### Mobile Menu
Hamburger menu appears on mobile devices with smooth slide-in animation.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons using emoji characters
- Inspired by modern portfolio designs

---

⭐ If you found this helpful, consider giving it a star!

**Made with ❤️ and ☕**# Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. Features a minimalist dark theme with professional corporate aesthetics.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0a0a/2dd4bf?text=Portfolio+Website+Preview)

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Projects Section** - Easily manage projects through a JavaScript data array
- **Certificate Showcase** - Display your certifications with category filtering
- **Smooth Animations** - Polished hover effects and transitions throughout
- **Dark Theme** - Minimalist design with deep charcoal backgrounds and teal accents
- **Contact Form** - Functional contact section with form validation
- **Mobile Navigation** - Collapsible hamburger menu for mobile devices

## 📋 Sections

1. **Hero/Home** - Introduction with call-to-action buttons
2. **About Me** - Personal bio with statistics cards
3. **Skills** - Technical skills organized by category
4. **Projects** - Clickable project cards with images and descriptions
5. **Certificates** - Filterable certifications by category
6. **Contact** - Contact information and message form
7. **Footer** - Quick links and social media connections

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries required

## 📦 Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory:
```bash
cd portfolio-website
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Visit `http://localhost:8000` in your browser

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #1a1a1a;      /* Secondary background */
    --bg-tertiary: #252525;       /* Card backgrounds */
    --text-primary: #e8e8e8;      /* Main text color */
    --text-secondary: #b8b8b8;    /* Secondary text */
    --accent: #2dd4bf;            /* Accent color (teal) */
}
```

### Adding Projects

Open `script.js` and add to the `projectsData` array:

```javascript
{
    title: "Project Name",
    description: "Brief description of the project.",
    image: "https://your-image-url.com/image.jpg",
    link: "https://project-url.com",
    tags: ["React", "Node.js", "MongoDB"]
}
```

### Adding Certificates

Open `script.js` and add to the `certificatesData` array:

```javascript
{
    title: "Certificate Name",
    issuer: "Organization",
    date: "Month Year",
    category: "software", // software, data, security, or ai
    categoryLabel: "Software Development & Engineering",
    link: "https://certificate-url.com",
    icon: "💻"
}
```

### Updating Personal Information

Edit `index.html` to update:
- Navigation logo and name
- Hero section title and description
- About section text and statistics
- Skills categories and tags
- Contact information (email, LinkedIn, GitHub)
- Footer content and social links

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── style.css           # All styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/portfolio-website`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts
4. Your site is deployed!

### Netlify

1. Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository
3. Site goes live automatically

## 🎯 Certificate Categories

The certificates section supports four categories:

- **Software Development & Engineering** (`software`)
- **Data Science & Analytics** (`data`)
- **Cybersecurity & Networking** (`security`)
- **Artificial Intelligence & ML** (`ai`)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below

## ✨ Key Features Explained

### Clickable Project Cards
All project cards are fully clickable - click anywhere on the card to visit the project link in a new tab.

### Dynamic Certificate Filtering
Click category buttons to filter certificates by type. The "All" button shows everything.

### Smooth Scroll Navigation
Navigation links smoothly scroll to their corresponding sections with proper offset.

### Mobile Menu
Hamburger menu appears on mobile devices with smooth slide-in animation.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons using emoji characters
- Inspired by modern portfolio designs

---

⭐ If you found this helpful, consider giving it a star!

**Made with ❤️ and ☕**
