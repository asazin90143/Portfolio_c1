// ===== PROJECTS DATA =====
// Add, edit, or remove projects here
// Each project needs: title, description, image, link, tags array
const projectsData = [
    {
        title: "Visuals1",
        description: "Interactive data visualizations and dashboards hosted on Render.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        link: "https://visuals1.onrender.com/",
        tags: ["D3.js", "JavaScript", "Data Visualization"]
    },
    {
        title: "Hero's Tasks",
        description: "Hero's Tasks is a gamified productivity app that turns your to-do list into an adventure.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        link: "https://asazin90143.github.io/Heros-Tasks/",
        tags: ["Javacript", "CSS", "HTML"]
    },
    {
        title: "Space Math ",
        description: "Interactive math exercises while having fun.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        link: "https://asazin90143.github.io/Space-Math/",
        tags: ["Javacript", "CSS", "HTML"]
    },
    {
        title: "Blog Platform",
        description: "Modern blogging platform with markdown support, SEO optimization, and analytics.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop",
        link: "https://asazin90143.github.io/blogofdeath/",
        tags: ["HTML", "CSS", "PHP"]
    },
    {
        title: "Portfolio ",
        description: "Content management system for managing portfolio projects with drag-and-drop interface.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        link: "https://asazin90143.github.io/Portfolio_c1/index.html#home",
        tags: ["Javacript", "CSS", "HTML"]
    },
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
        title: "Fitness Tracker",
        description: "Mobile-first app for tracking workouts, nutrition, and progress with data visualization.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
        link: "https://github.com/yourusername/project5",
        tags: ["React Native", "Express", "Chart.js"]
    },


];

// ===== CERTIFICATES DATA =====
// Add, edit, or remove certificates here
// Each certificate needs: title, issuer, date, category, link, icon, image
// Categories: 'software', 'data', 'security', 'ai'
const certificatesData = [
    {
        title: "SQL and Relational Databases 101",
        issuer: "IBM Developer Skills Network",
        date: "November 2023",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://courses.cognitiveclass.ai/certificates/22721d0de4754dc5886de40f4bb5f99f",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
    },
    {
        title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
        issuer: "Oracle",
        date: "December 2023",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C8DF078141A0A68FB8C11EE850E33CABEB5F77F17B7809B100541DA7A119DEFA",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
    },
    {
        title: "Oracle Cloud Data Management 2023 Certified Foundations Associate",
        issuer: "Oracle",
        date: "December 2023",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9871AF79E8C76FF7A0129D9709621DA7C507445372989DE1F38389AAE7256E8F",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
    },
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "December 2024",
        category: "software",
        categoryLabel: "Software Development & Engineering",
        link: "https://aws.amazon.com/certification/",
        icon: "🏗️",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
    },
    {
        title: "Professional Scrum Master (PSM I)",
        issuer: "Scrum.org",
        date: "November 2024",
        category: "software",
        categoryLabel: "Software Development & Engineering",
        link: "https://www.scrum.org/",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
    },
    {
        title: "Machine Learning Specialization",
        issuer: "Stanford University / Coursera",
        date: "October 2024",
        category: "ai",
        categoryLabel: "Artificial Intelligence & ML",
        link: "https://www.coursera.org/",
        icon: "🤖",
        image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=600&h=400&fit=crop"
    },
    {
        title: "Data Science Professional Certificate",
        issuer: "IBM",
        date: "September 2024",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://www.ibm.com/training/",
        icon: "📈",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "August 2024",
        category: "security",
        categoryLabel: "Cybersecurity & Networking",
        link: "https://www.comptia.org/",
        icon: "🔒",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600&h=400&fit=crop"
    },
    {
        title: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        date: "July 2024",
        category: "security",
        categoryLabel: "Cybersecurity & Networking",
        link: "https://www.eccouncil.org/",
        icon: "🛡️",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&h=400&fit=crop"
    },
    {
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "June 2024",
        category: "ai",
        categoryLabel: "Artificial Intelligence & ML",
        link: "https://www.deeplearning.ai/",
        icon: "🧠",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=400&fit=crop"
    },
    {
        title: "Google Data Analytics Certificate",
        issuer: "Google",
        date: "May 2024",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://grow.google/certificates/",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=600&h=400&fit=crop"
    },
    {
        title: "Full Stack Web Development",
        issuer: "freeCodeCamp",
        date: "April 2024",
        category: "software",
        categoryLabel: "Software Development & Engineering",
        link: "https://www.freecodecamp.org/",
        icon: "💻",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
    },
    {
        title: "Cisco CCNA",
        issuer: "Cisco",
        date: "March 2024",
        category: "security",
        categoryLabel: "Cybersecurity & Networking",
        link: "https://www.cisco.com/",
        icon: "🌐",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
        title: "TensorFlow Developer Certificate",
        issuer: "Google",
        date: "February 2024",
        category: "ai",
        categoryLabel: "Artificial Intelligence & ML",
        link: "https://www.tensorflow.org/certificate",
        icon: "🔧",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
        title: "Python for Data Science",
        issuer: "DataCamp",
        date: "January 2024",
        category: "data",
        categoryLabel: "Data Science & Analytics",
        link: "https://www.datacamp.com/",
        icon: "🐍",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
    }
];

// ===== RENDER PROJECTS =====
// This function creates the HTML for each project card
function renderProjects(limit = null) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const displayProjects = limit ? projectsData.slice(0, limit) : projectsData;

    projectsGrid.innerHTML = displayProjects.map(project => `
        <div class="project-card" data-link="${project.link}">
            <div class="project-preview" onclick="openPreview(event, '${project.link}')" title="Open interactive preview">
                <iframe src="${project.link}" class="project-iframe" loading="lazy" sandbox="allow-scripts allow-forms allow-same-origin" onerror="handlePreviewError(this)"></iframe>
                <div class="preview-badge">Preview</div>
            </div>
            <div class="project-content" onclick="window.open('${project.link}', '_blank')" style="cursor: pointer;">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <span class="project-link">View Project →</span>
            </div>
        </div>
    `).join('');
}

// Open preview modal with interactive iframe. Stops card click from firing.
function openPreview(event, url) {
    event.stopPropagation();

    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'preview-modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'preview-close';
    closeBtn.innerText = 'Close';
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.loading = 'lazy';
    iframe.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin');

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(iframe);
    modal.appendChild(modalContent);

    // Clicking outside modal content closes it
    modal.addEventListener('click', (e) => {
        if (e.target === modal) document.body.removeChild(modal);
    });

    document.body.appendChild(modal);
}

// ===== RENDER CERTIFICATES =====
// This function creates the HTML for each certificate card
function renderCertificates(filterCategory = 'all', limit = null) {
    const certificatesGrid = document.getElementById('certificatesGrid');
    if (!certificatesGrid) return;

    let filteredCertificates = filterCategory === 'all'
        ? certificatesData
        : certificatesData.filter(cert => cert.category === filterCategory);

    // Apply limit if specified (for featured on homepage)
    if (limit) {
        filteredCertificates = filteredCertificates.slice(0, limit);
    }

    certificatesGrid.innerHTML = filteredCertificates.map(cert => `
        <div class="certificate-card" data-category="${cert.category}">
            <div class="certificate-preview">
                <img src="${cert.image}" alt="${cert.title} preview" loading="lazy" onerror="handleCertError(this)">
            </div>
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
    if (!filterButtons.length) return;

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
// Smooth scrolling for nav links and mobile menu handling
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

// Only setup mobile toggle if it exists
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Close mobile menu
        if (navMenu) {
            navMenu.classList.remove('active');
        }

        // Handle hash links on the same page
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // External links and page navigation will work normally
    });
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

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const statusEl = document.getElementById('contactStatus');
        const endpoint = 'https://formsubmit.co/ajax/kent.escala143@gmail.com';

        statusEl.textContent = 'Sending...';
        statusEl.style.color = 'var(--text-secondary)';

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => {
                if (!response.ok) throw new Error('Failed to send');
                statusEl.textContent = 'Message sent! I will reply soon.';
                statusEl.style.color = 'var(--accent)';
                contactForm.reset();
            })
            .catch(() => {
                statusEl.textContent = 'Could not send right now. Please try again later.';
                statusEl.style.color = '#ff6b6b';
            });
    });
}

// ===== INITIALIZE =====
// Load everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the main page or secondary page
    const isMainPage = !document.body.classList.contains('secondary-page');

    if (isMainPage) {
        // Show only 3 featured projects and certifications on main page
        renderProjects(3);
        renderCertificates('all', 3);
    } else {
        // Show all projects and certifications on secondary pages
        renderProjects();
        renderCertificates();
    }

    setupCertificateFilters();
});

// ===== PREVIEW FALLBACKS =====
function handlePreviewError(iframe) {
    const wrapper = iframe.closest('.project-preview');
    if (wrapper) {
        wrapper.classList.add('error');
    }
}

function handleCertError(img) {
    const wrapper = img.closest('.certificate-preview');
    if (wrapper) {
        wrapper.classList.add('error');
    }
}