# Personal Portfolio Website

A modern, responsive portfolio website designed to showcase projects and certifications. This project uses vanilla JavaScript to dynamically load content from JSON files, making it easy to maintain and update.

## Features

- **Dynamic Content**: Projects and certificates are loaded externally from `projects.json` and `certificates.json`.
- **Auto-Generated Thumbnails**: Project previews are automatically generated from live links with a skeleton loading state.
- **Interactive Previews**: Projects can be previewed in a modal iframe without leaving the page.
- **Filtering System**: Certificates can be filtered by category (Software, Data, Security, AI).
- **Contact Form**: Functional contact form integrated with FormSubmit.
- **Responsive Design**: Fully adaptable layout for mobile and desktop screens.
- **Modern UI**: Features animated background orbs, glassmorphism effects, and smooth transitions.
- **Automated Deployment**: Configured with GitHub Actions for seamless deployment to GitHub Pages.

## How to Update Content

You can update your portfolio content by editing the JSON files. No HTML changes are required for adding new items.

### 1. Projects (`projects.json`)

Add a new object to the array in `projects.json`.
**Note:** The project thumbnail is automatically generated from the `link` URL. The `image` field is used as a fallback if the screenshot fails to load.

```json
{
    "title": "Project Name",
    "description": "Brief description of the project.",
    "image": "https://example.com/image.jpg",
    "link": "https://example.com/live-demo",
    "tags": ["Tech Stack 1", "Tech Stack 2"]
}
```

### 2. Certificates (`certificates.json`)

Add a new object to the array in `certificates.json`. Ensure the `category` matches one of the filter keys (`software`, `data`, `security`, `ai`).

```json
{
    "title": "Certificate Name",
    "issuer": "Organization",
    "date": "Month Year",
    "category": "software",
    "categoryLabel": "Software Development",
    "link": "https://credential-url.com",
    "icon": "🎓",
    "image": "Cert/filename.png" // Can be a URL or local path like 'Cert/filename.png'
}
```

## Deployment

This repository uses **GitHub Actions** to deploy to GitHub Pages automatically.

1. Push your changes to the `master` branch.
2. The workflow defined in `.github/workflows/static.yml` will trigger.
3. Once completed, your site will be live at your GitHub Pages URL.

## Project Structure

- `index.html`: Main structure of the website.
- `script.js`: Handles data fetching, rendering logic, contact form, and interactivity.
- `style.css`: Styling for the website, including animations.
- `projects.json`: Data source for portfolio projects.
- `certificates.json`: Data source for certifications.

## Technologies

- HTML5, CSS3
- JavaScript (ES6+)
- GitHub Actions
