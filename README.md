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

## Projects

| Project | Description | Tech Stack | Link |
|---------|-------------|------------|------|
| **Visuals1** | Interactive data visualizations and dashboards hosted on Render. | D3.js, JavaScript, Data Visualization | [Live Demo](https://visuals1.onrender.com/) |
| **Boardroom** | Digital bulletin board for user posts. | JavaScript, CSS, HTML, Firebase, PostgreSQL | [Live Demo](https://boardroom-mu.vercel.app/) |
| **Energy Watcher** | Energy consumption monitoring application. | JavaScript, CSS, HTML | [Live Demo](https://asazin90143.github.io/Energy-Watcher/) |
| **Hero's Tasks** | Gamified productivity app. | JavaScript, CSS, HTML | [Live Demo](https://asazin90143.github.io/Heros-Tasks/) |
| **Space Math** | Space-themed math game. | JavaScript, SQL, Node.js, CSS, HTML | [Live Demo](https://space-math.onrender.com/) |
| **Blog Platform** | Modern blogging platform. | HTML, CSS, PHP | [Live Demo](https://asazin90143.github.io/blogofdeath/) |
| **Portfolio** | Content management system for portfolio projects. | JavaScript, CSS, HTML | [Live Demo](https://asazin90143.github.io/Portfolio_c1/index.html#home) |
| **Task Management App** | Collaborative project management tool. | TypeScript, CSS, JavaScript, SQL, Node.js | [Live Demo](https://tma-gugc.onrender.com) |
| **Awesome Chocolates** | Dashboard for analyzing chocolate sales data. | Tableau | [View](https://public.tableau.com/app/profile/kenneth.bryan.escala/viz/AwesomeChocolates_17433902921190/AwesomeChocolates) |
| **Return Tracking** | Dashboard for analyzing return data. | Tableau | [View](https://public.tableau.com/views/ReturnTrackingCount_17458119773520/Dashboard1) |
| **Worldwide Importers** | Dashboard for analyzing importers data. | Tableau | [View](https://public.tableau.com/app/profile/kenneth.bryan.escala/viz/WorldwideImporters-EscalaKennethBryanG_/Dashboard1) |
| **Superstore Profits** | Dashboard for analyzing superstore profits. | Tableau | [View](https://public.tableau.com/app/profile/kenneth.bryan.escala/viz/SuperstoreProfits_17439956785620/ProfitbyState) |
| **E-Commerce Platform** | Full-stack online store. | React, Express, Node.js, MongoDB | [Live Demo](https://step-up-smoky.vercel.app/) |
| **Weather Dashboard** | Real-time weather application. | JavaScript, API, CSS3 | [Repo](https://github.com/yourusername/project2) |
| **Fitness Tracker** | Mobile-first app for tracking workouts. | React Native, Express, Chart.js | [Repo](https://github.com/yourusername/project5) |

