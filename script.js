// ===== PROJECTS DATA =====
// Add, edit, or remove projects here
// Each project needs: title, description, image, link, tags array
let projectsData = [];

// ===== CERTIFICATES DATA =====
// Add, edit, or remove certificates here
// Each certificate needs: title, issuer, date, category, link, icon, image
// Categories: 'software', 'data', 'security', 'ai'
let certificatesData = [];

// ===== RENDER PROJECTS =====
// This function creates the HTML for each project card
function renderProjects(limit = null) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const displayProjects = limit ? projectsData.slice(0, limit) : projectsData;

    projectsGrid.innerHTML = displayProjects.map(project => {
        // Generate dynamic screenshot URL based on project link
        const screenshotUrl = project.link
            ? `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.link)}?w=600&h=400`
            : project.image;

        return `
        <div class="project-card" data-link="${project.link}">
            <div class="project-preview loading" data-link="${project.link}" title="Open interactive preview">
                <img src="${screenshotUrl}" 
                     class="project-thumbnail" 
                     alt="${project.title}" 
                     loading="lazy" 
                     style="width: 100%; height: 100%; object-fit: cover;" 
                     onload="this.parentElement.classList.remove('loading')"
                     onerror="this.parentElement.classList.remove('loading'); this.onerror=null; this.src='${project.image}'">
                <div class="preview-badge">Preview</div>
            </div>
            <div class="project-content" data-link="${project.link}" style="cursor: pointer;">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <span class="project-link">View Project →</span>
            </div>
        </div>
    `}).join('');
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

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projectsData = data;
            renderProjects(isMainPage ? 3 : null);
        })
        .catch(error => console.error('Error loading projects:', error));

    fetch('certificates.json')
        .then(response => response.json())
        .then(data => {
            certificatesData = data;
            if (isMainPage) {
                renderCertificates('all', 3);
            } else {
                renderCertificates();
            }
        })
        .catch(error => console.error('Error loading certificates:', error));

    // Setup Event Delegation for Projects Grid
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.addEventListener('click', (e) => {
            const preview = e.target.closest('.project-preview');
            const content = e.target.closest('.project-content');

            if (preview) {
                const link = preview.dataset.link;
                if (link) openPreview(e, link);
            } else if (content) {
                const link = content.dataset.link;
                if (link) window.open(link, '_blank');
            }
        });
    }

    setupCertificateFilters();
    initLiveBackground();
    initTheme();
});

// ===== THEME MANAGEMENT =====
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcons(newTheme);

            // Re-init canvas particles to update color
            initLiveBackground();
        });
    }

    function updateIcons(theme) {
        if (theme === 'light') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
}

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

// ===== LIVE BACKGROUND =====
function initLiveBackground() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    // Mouse position
    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    // Particle class
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        // Method to draw individual particle
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Check particle position, check mouse position, move the particle, draw the particle
        update() {
            // Check if particle is still within canvas
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // Check collision detection - mouse position / particle position
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 1;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 1;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 1;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 1;
                }
            }

            // Move particle
            this.x += this.directionX;
            this.y += this.directionY;

            // Draw particle
            this.draw();
        }
    }

    // Helper to get accent color
    function getAccentColor(alpha = 1) {
        const rootStyles = getComputedStyle(document.documentElement);
        const accentRgb = rootStyles.getPropertyValue('--accent-rgb').trim();
        return `rgba(${accentRgb}, ${alpha})`;
    }

    // Create particle array
    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        const color = getAccentColor(0.4);

        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 0.4) - 0.2;
            let directionY = (Math.random() * 0.4) - 0.2;

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    // Connect particles
    function connect() {
        // Get base color components for dynamic opacity
        const rootStyles = getComputedStyle(document.documentElement);
        // Fallback to teal if variable not found
        const accentRgb = rootStyles.getPropertyValue('--accent-rgb').trim() || '45, 212, 191';

        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                    + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(${accentRgb}, ${opacityValue * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }

    initParticles();
    animate();
}