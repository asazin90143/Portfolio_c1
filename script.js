// ===== PROJECTS DATA =====
// Add, edit, or remove projects here
// Each project needs: title, description, image, link, tags array
const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack online store with payment integration, inventory management, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
        link: "https://github.com/yourusername/project1",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application with forecast data, interactive maps, and location tracking.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
        link: "https://github.com/yourusername/project2",
        tags: ["JavaScript", "API", "CSS3"]
    },
    {
        title: "Task Management App",
        description: "Collaborative project management tool with real-time updates and team features.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
        link: "https://github.com/yourusername/project3",
        tags: ["React", "Firebase", "Tailwind"]
    },
    {
        title: "Portfolio CMS",
        description: "Content management system for managing portfolio projects with drag-and-drop interface.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        link: "https://github.com/yourusername/project4",
        tags: ["Next.js", "PostgreSQL", "TypeScript"]
    },
    {
        title: "Fitness Tracker",
        description: "Mobile-first app for tracking workouts, nutrition, and progress with data visualization.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
        link: "https://github.com/yourusername/project5",
        tags: ["React Native", "Express", "Chart.js"]
    },
    {
        title: "Blog Platform",
        description: "Modern blogging platform with markdown support, SEO optimization, and analytics.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop",
        link: "https://github.com/yourusername/project6",
        tags: ["Next.js", "MDX", "Vercel"]
    }
];

// ===== CERTIFICATES DATA =====
// Add, edit, or remove certificates here
// Each certificate needs: title, issuer, date, category, link, icon
// Categories: 'software', 'data', 'security', 'ai'
const certificatesData = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "December 2024",
        category: "software",
        categoryLabel: "Software Development & Engineering",
        link: "https://aws.amazon.com/certification/",
        icon: "🏗️"
    },
    {
        title: "Professional Scrum Master (PSM I)",
        issuer: "Scrum.org",
        date: "November 2024",
        category: "software",
        categoryLabel: "Software Development & Engineering",
        link: "https://www.scrum.org/",
        icon: "📊"
    },
    {
        title: "Machine Learning Specialization",
        issuer: "Stanford University / Coursera",
        date: "October 2024",
        category: "ai",
        categoryLabel: "Artificial Intelligence & ML",
        link: "https://www.coursera.org/",
        icon: "🤖"
    },
    {
        title: "Data Science Professional Certificate",
        issuer: "IBM",
        date: "September 2024",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://www.ibm.com/training/",
        icon: "📈"
    },
    {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "August 2024",
        category: "security",
        categoryLabel: "Cybersecurity & Networking",
        link: "https://www.comptia.org/",
        icon: "🔒"
    },
    {
        title: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        date: "July 2024",
        category: "security",
        categoryLabel: "Cybersecurity & Networking",
        link: "https://www.eccouncil.org/",
        icon: "🛡️"
    },
    {
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "June 2024",
        category: "ai",
        categoryLabel: "Artificial Intelligence & ML",
        link: "https://www.deeplearning.ai/",
        icon: "🧠"
    },
    {
        title: "Google Data Analytics Certificate",
        issuer: "Google",
        date: "May 2024",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://grow.google/certificates/",
        icon: "📊"
    },
    {
        title: "Full Stack Web Development",
        issuer: "freeCodeCamp",
        date: "April 2024",
        category: "software",
        categoryLabel: "Software Development & Engineering",
        link: "https://www.freecodecamp.org/",
        icon: "💻"
    },
    {
        title: "Cisco CCNA",
        issuer: "Cisco",
        date: "March 2024",
        category: "security",
        categoryLabel: "Cybersecurity & Networking",
        link: "https://www.cisco.com/",
        icon: "🌐"
    },
    {
        title: "TensorFlow Developer Certificate",
        issuer: "Google",
        date: "February 2024",
        category: "ai",
        categoryLabel: "Artificial Intelligence & ML",
        link: "https://www.tensorflow.org/certificate",
        icon: "🔧"
    },
    {
        title: "Python for Data Science",
        issuer: "DataCamp",
        date: "January 2024",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://www.datacamp.com/",
        icon: "🐍"
    }
];

// ===== RENDER PROJECTS =====
// This function creates the HTML for each project card
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card" onclick="window.open('${project.link}', '_blank')" style="cursor: pointer;">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <span class="project-link">
                    View Project →
                </span>
            </div>
        </div>
    `).join('');
}

// ===== RENDER CERTIFICATES =====
// This function creates the HTML for each certificate card
function renderCertificates(filterCategory = 'all') {
    const certificatesGrid = document.getElementById('certificatesGrid');

    const filteredCertificates = filterCategory === 'all'
        ? certificatesData
        : certificatesData.filter(cert => cert.category === filterCategory);

    certificatesGrid.innerHTML = filteredCertificates.map(cert => `
        <div class="certificate-card" data-category="${cert.category}">
            <div class="certificate-header">
                <div class="certificate-icon">${cert.icon}</div>
                <div class="certificate-info">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                    <p class="certificate-date">${cert.date}</p>
                </div>
            </div>
            <span class="certificate-category">${cert.categoryLabel}</span>
            <a href="${cert.link}" target="_blank" class="certificate-link">
                View Certificate →
            </a>
        </div>
    `).join('');
}

// ===== CERTIFICATE FILTERING =====
// Handle filter button clicks
function setupCertificateFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Get category and filter certificates
            const category = button.getAttribute('data-category');
            renderCertificates(category);
        });
    });
}

// ===== NAVIGATION =====
// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Close mobile menu if open
        navMenu.classList.remove('active');

        // Scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would normally send this to a backend/email service
    // For now, just log and show alert
    console.log('Form submitted:', { name, email, message });
    alert('Thanks for reaching out! I\'ll get back to you soon.');

    // Reset form
    contactForm.reset();
});

// ===== INITIALIZE =====
// Load everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCertificates();
    setupCertificateFilters();
});