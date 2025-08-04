// Language Management
let currentLanguage = 'he';
const translations = {
    en: {},
    he: {}
};

// Initialize language system
function initializeLanguage() {
    const elements = document.querySelectorAll('[data-en][data-he]');
    elements.forEach(element => {
        translations.en[element.textContent.trim()] = element.getAttribute('data-en');
        translations.he[element.textContent.trim()] = element.getAttribute('data-he');
    });
}

// Switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    const body = document.body;
    
    if (lang === 'he') {
        body.classList.add('rtl');
        body.style.fontFamily = "'Assistant', 'Open Sans', sans-serif";
    } else {
        body.classList.remove('rtl');
        body.style.fontFamily = "'Open Sans', sans-serif";
    }
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en][data-he]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.innerHTML = text;
            }
        }
    });
    
    // Update language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Language toggle event listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
    // Initialize with Hebrew as default
    switchLanguage('he');
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});

// Professional Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        // Create intersection observer for animations
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        // Observe elements for animations
        this.observeElements();
        
        // Initialize parallax effect
        this.initParallax();
        
        // Add stagger animations
        this.initStaggerAnimations();
    }
    
    observeElements() {
        const animatedElements = document.querySelectorAll(
            '.slide-in-up, .slide-in-left, .slide-in-right, .project-card, .about-stats .stat-item'
        );
        
        animatedElements.forEach(element => {
            this.observer.observe(element);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add visible class for CSS transitions
                element.classList.add('visible');
                
                // Add specific animations based on element type
                if (element.classList.contains('project-card')) {
                    setTimeout(() => {
                        element.style.transform = 'translateY(0) scale(1)';
                        element.style.opacity = '1';
                    }, Math.random() * 200);
                }
                
                if (element.classList.contains('stat-item')) {
                    this.animateCounter(element);
                }
                
                // Unobserve after animation
                this.observer.unobserve(element);
            }
        });
    }
    
    animateCounter(element) {
        const numberElement = element.querySelector('.stat-number');
        if (!numberElement) return;
        
        const target = parseInt(numberElement.textContent.replace(/[^\d]/g, ''));
        const suffix = numberElement.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            numberElement.textContent = Math.floor(current) + suffix;
        }, stepTime);
    }
    
    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-element');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    initStaggerAnimations() {
        const staggerGroups = document.querySelectorAll('.projects-grid, .about-stats, .contact-info');
        
        staggerGroups.forEach(group => {
            const children = group.children;
            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * 0.1}s`;
            });
        });
    }
}

// Enhanced smooth scrolling with easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced header effects
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
        header.style.backdropFilter = 'blur(10px)';
    }
    
    // Add floating effect to header
    header.style.transform = `translateY(${Math.sin(scrolled * 0.01) * 2}px)`;
});

// Enhanced active navigation highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced project details modal
function openProjectDetails(project) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    let content = '';
    
    if (project === 'gym') {
        const translations = {
            en: {
                title: "Student Fitness & Wellness Center",
                subtitle: "Promoting physical wellness alongside spiritual growth",
                overview: "Project Overview",
                overviewText: "Our new Student Fitness & Wellness Center will provide our students with a modern, comprehensive facility for physical fitness and wellness activities. This state-of-the-art gymnasium will serve as a cornerstone for promoting healthy lifestyles while complementing our commitment to holistic education.",
                features: "Facility Features",
                impact: "Impact on Our Community",
                impactText1: "The Student Fitness & Wellness Center will serve as more than just a gymnasium. It represents our commitment to nurturing the complete development of our students - mind, body, and spirit. By providing access to modern fitness facilities, we're investing in our students' long-term health and well-being.",
                impactText2: "This facility will also serve as a gathering place for our community, hosting sporting events, fitness classes, and wellness workshops that bring together students, families, and faculty.",
                partnership: "Partnership Opportunities",
                partnershipText: "We invite you to partner with us in bringing this vision to reality. Your support will make a lasting impact on generations of students.",
                getInvolved: "Get Involved"
            },
            he: {
                title: "מרכז כושר ובריאות לתלמידים",
                subtitle: "קידום בריאות גופנית לצד צמיחה רוחנית",
                overview: "סקירת הפרויקט",
                overviewText: "מרכז הכושר והבריאות החדש שלנו יספק לתלמידים שלנו מתקן מודרני ומקיף לפעילות גופנית ופעילויות בריאות. אולם התעמלות מתקדם זה ישמש כאבן יסוד לקידום אורח חיים בריא תוך השלמת המחויבות שלנו לחינוך הוליסטי.",
                features: "תכונות המתקן",
                impact: "השפעה על הקהילה שלנו",
                impactText1: "מרכז הכושר והבריאות לתלמידים ישמש יותר מאשר רק אולם התעמלות. הוא מייצג את המחויבות שלנו לטיפוח הפיתוח המלא של התלמידים שלנו - נפש, גוף ורוח. על ידי מתן גישה למתקני כושר מודרניים, אנו משקיעים בבריאות ובבריאות לטווח הארוך של התלמידים שלנו.",
                impactText2: "מתקן זה ישמש גם כמקום מפגש לקהילה שלנו, ויארח אירועי ספורט, שיעורי כושר וסדנאות בריאות המפגישות תלמידים, משפחות וסגל.",
                partnership: "הזדמנויות שותפות",
                partnershipText: "אנו מזמינים אתכם להיות שותפים שלנו בהגשמת החזון הזה. התמיכה שלכם תשפיע לטווח הארוך על דורות של תלמידים.",
                getInvolved: "הצטרפו אלינו"
            }
        };
        
        const t = translations[currentLanguage];
        
        content = `
            <div class="project-detail">
                <div class="project-detail-header">
                    <img src="gym1.png" alt="Gym Interior Design" class="project-detail-image">
                    <div class="project-detail-overlay">
                        <h1>${t.title}</h1>
                        <p class="project-detail-subtitle">${t.subtitle}</p>
                    </div>
                </div>
                
                <div class="project-detail-content">
                    <div class="project-detail-section">
                        <h2>${t.overview}</h2>
                        <p>${t.overviewText}</p>
                    </div>
                    
                    <div class="project-detail-stats-grid">
                        <div class="detail-stat">
                            <div class="detail-stat-number">5,000</div>
                            <div class="detail-stat-label">${currentLanguage === 'en' ? 'Square Feet' : 'מטר רבוע'}</div>
                        </div>
                        <div class="detail-stat">
                            <div class="detail-stat-number">150+</div>
                            <div class="detail-stat-label">${currentLanguage === 'en' ? 'Students Served' : 'תלמידים נהנים'}</div>
                        </div>
                        <div class="detail-stat">
                            <div class="detail-stat-number">$450K</div>
                            <div class="detail-stat-label">${currentLanguage === 'en' ? 'Project Goal' : 'יעד הפרויקט'}</div>
                        </div>
                        <div class="detail-stat">
                            <div class="detail-stat-number">2025</div>
                            <div class="detail-stat-label">${currentLanguage === 'en' ? 'Completion Year' : 'שנת השלמה'}</div>
                        </div>
                    </div>
                    
                    <div class="project-detail-section">
                        <h2>${t.features}</h2>
                        <div class="features-grid">
                            <div class="feature-item">
                                <h4>${currentLanguage === 'en' ? 'Modern Equipment' : 'ציוד מודרני'}</h4>
                                <p>${currentLanguage === 'en' ? 'State-of-the-art fitness equipment including cardio machines, weight training stations, and functional fitness areas.' : 'ציוד כושר מתקדם הכולל מכונות קרדיו, תחנות אימון משקולות ואזורי כושר פונקציונלי.'}</p>
                            </div>
                            <div class="feature-item">
                                <h4>${currentLanguage === 'en' ? 'Multi-Purpose Court' : 'מגרש רב-תכליתי'}</h4>
                                <p>${currentLanguage === 'en' ? 'Full-size basketball court that can be configured for various sports and activities.' : 'מגרש כדורסל בגודל מלא הניתן להתאמה לענפי ספורט ופעילויות שונים.'}</p>
                            </div>
                            <div class="feature-item">
                                <h4>${currentLanguage === 'en' ? 'Wellness Programs' : 'תוכניות בריאות'}</h4>
                                <p>${currentLanguage === 'en' ? 'Dedicated spaces for yoga, meditation, and wellness education programs.' : 'חללים ייעודיים ליוגה, מדיטציה ותוכניות חינוך לבריאות.'}</p>
                            </div>
                            <div class="feature-item">
                                <h4>${currentLanguage === 'en' ? 'Safety First' : 'בטיחות קודם כל'}</h4>
                                <p>${currentLanguage === 'en' ? 'Professional-grade safety equipment and supervised training programs.' : 'ציוד בטיחות ברמה מקצועית ותוכניות אימון בפיקוח.'}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-detail-section">
                        <h2>${t.impact}</h2>
                        <p>${t.impactText1}</p>
                        <p>${t.impactText2}</p>
                    </div>
                    
                    <div class="project-detail-section partnership-section">
                        <h2>${t.partnership}</h2>
                        <p>${t.partnershipText}</p>
                        <div class="partnership-options">
                            <div class="partnership-option">
                                <h4>${currentLanguage === 'en' ? 'Equipment Sponsor' : 'נותן חסות לציוד'}</h4>
                                <p>$5,000 - $25,000</p>
                            </div>
                            <div class="partnership-option">
                                <h4>${currentLanguage === 'en' ? 'Court Naming Rights' : 'זכויות קביעת שם למגרש'}</h4>
                                <p>$100,000</p>
                            </div>
                            <div class="partnership-option">
                                <h4>${currentLanguage === 'en' ? 'Facility Naming Rights' : 'זכויות קביעת שם למתקן'}</h4>
                                <p>$250,000</p>
                            </div>
                        </div>
                        <div class="contact-cta">
                            <a href="#contact" class="detail-cta-button" onclick="closeProjectDetails()">${t.getInvolved}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectDetails() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectDetails();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectDetails();
    }
});

// Handle image upload/display for gym prospect image
document.addEventListener('DOMContentLoaded', function() {
    const gymImage = document.getElementById('gym-image');
    const ravPhoto = document.getElementById('rav-photo');
    
    // Check if gym image exists, otherwise show placeholder
    gymImage.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjhmOWZhIi8+CjxyZWN0IHg9IjEwMCIgeT0iNTAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZTllY2VmIiBzdHJva2U9IiNkMWQ1ZGIiIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSIyNTAiIHk9IjEyMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNmI3Mjg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HeW0gSW50ZXJpb3IgRGVzaWduPC90ZXh0Pgo8dGV4dCB4PSIyNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9zcGVjdCBJbWFnZTwvdGV4dD4KPHN2ZyB4PSIyMjAiIHk9IjE2MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZiNzI4OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgo8cGF0aCBkPSJtMjEgMTYtNC00LTQgNC00LTQtNCAxNiIvPgo8Y2lyY2xlIGN4PSI5IiBjeT0iOSIgcj0iMiIvPgo8cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIyIi8+Cjwvc3ZnPgo8L3N2Zz4K';
        this.alt = 'Gym Interior Design Concept - Please upload gym1.png';
    };
    
    // Check if Rav Dov photo exists, otherwise show placeholder
    if (ravPhoto) {
        ravPhoto.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTUwIiByPSIxNTAiIGZpbGw9IiNmOGY5ZmEiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMjAiIHI9IjQwIiBmaWxsPSIjZTllY2VmIi8+PHBhdGggZD0ibTEwMCAyMDBjMC0yNy42IDIyLjQtNTAgNTAtNTBzNTAgMjIuNCA1MCA1MCIgZmlsbD0iI2U5ZWNlZiIvPjx0ZXh0IHg9IjE1MCIgeT0iMjYwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM2Yjc4ODgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJhYmJpIERvdiBTaW5nZXI8L3RleHQ+PC9zdmc+';
            this.alt = 'Rabbi Dov Singer Photo - Please upload rabbi-dov-singer.jpg';
        };
    }
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    new ScrollAnimations();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Initialize smooth page transitions
    initPageTransitions();
});

// Page transitions
function initPageTransitions() {
    // Add entrance animations to all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
}
