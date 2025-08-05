// Main JavaScript for Makor Chaim website

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - script running');
    
    // Current language state
    let currentLanguage = 'he'; // Default to Hebrew
    
    // Mark document as loaded to remove loading screen
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 800); // Short delay for loading animation
    
    // Translations object - ALL text in one place (like Android strings)
    const translations = {
        en: {
            // Header
            yeshiva_name: "Makor Chaim Yeshiva",
            tagline: "Building Our Future Together",
            
            // Navigation
            home: "Home",
            message: "Rosh Yeshiva's Message",
            story: "Our Story",
            projects: "Current Projects",
            about: "About",
            gallery: "Gallery",
            contact: "Contact",
            
            // Hero
            hero_title: "Makor Chaim - Source of Life",
            hero_subtitle: "Building our new campus in Gush Etzion where the Path of the Sons meets the Way of our Fathers",
            cta_button: "Support Our Vision",
            scroll_text: "Discover More",
            
            // Rabbi Message
            rav_title: "A Message from Rabbi Dov Zinger",
            rav_subtitle: "Rosh Yeshiva of Makor Chaim",
            rav_text_1: "At Makor Chaim Yeshiva, we educate our students to live lives of Torah with Derech Eretz. The Yeshiva is known for its unique approach to education, combining deep Torah study with involvement in Israeli society.",
            rav_text_2: "Today, we are in the process of expansion and building, in order to increase our influence and reach more students. I invite you to join us on this journey, to support our vision and be part of building the future of Jewish education in Israel.",
            rav_closing: "Thank you from the bottom of my heart for your support,",
            rav_signature: "Sincerely,",
            rav_name: "Rabbi Dov Zinger",
            rav_position: "Rosh Yeshiva and Co-founder",
            
            // Video
            video_title: "Our Story in Song",
            video_subtitle: "Experience the spirit and soul of Makor Chaim Yeshiva through our latest music video",
            video_description: "This heartfelt music video captures the essence of our yeshiva - the dedication to learning, the warmth of our community, and the growth of our students.",
            
            // Projects
            projects_title: "Current Projects",
            projects_subtitle: "Building tomorrow's leaders requires exceptional facilities today",
            fitness_center: "Student Fitness & Wellness Center",
            fitness_center_short: "Modern Fitness Center",
            fitness_description: "A state-of-the-art gymnasium and fitness facility to promote physical wellness alongside spiritual growth.",
            fitness_sqft: "sq ft",
            fitness_students: "students served",
            housing_complex: "Modern Student Housing Complex",
            housing_complex_short: "Student Dormitories",
            housing_description: "Comfortable and inspiring dormitories designed to foster community and create the perfect environment for Torah study.",
            housing_beds: "beds",
            housing_access: "study access",
            project_cta: "Click to learn more",
            
            // About
            about_title: "About Makor Chaim Yeshiva",
            about_text_1: "Established in 1985 by the late Rabbi Adin Steinsaltz together with Rabbi Dov Singer, Makor Chaim has been a pioneer in unique educational methods that empower spiritually honest, deep relationships between students and teachers, between man and G-d, and between man and his fellow man.",
            about_text_2: "Our new campus in Gush Etzion, near Neve Daniel, sits where the ancient road of our Patrirachs meets modern Route 60 - truly where the Path of the Sons meets the Way of our Fathers. We seek to restore the balance of Torah, Worship & Acts of Kindness in our students through innovative education.",
            founded: "Founded",
            years_innovation: "Years of Innovation",
            new_campus: "Campus in Gush Etzion",
            
            // Gallery
            gallery_title: "Life at Makor Chaim",
            gallery_subtitle: "Experience the vibrant community of learning, growth, and friendship",
            gallery_torah: "Deep Torah Learning",
            gallery_torah_desc: "Students engaged in intensive study in our Beit Midrash",
            gallery_campus: "Inspiring Campus",
            gallery_campus_desc: "Our stunning location in the heart of Gush Etzion",
            gallery_chavruta: "Chavruta Learning",
            gallery_chavruta_desc: "The traditional study partnership that builds deep understanding",
            gallery_community: "Community & Brotherhood",
            gallery_community_desc: "Sharing meaningful moments and building lifelong friendships",
            gallery_nature: "Learning in Nature",
            gallery_nature_desc: "Torah study surrounded by the beauty of Eretz Yisrael",
            gallery_growth: "Growth & Achievement",
            gallery_growth_desc: "Celebrating milestones and personal development",
            
            // Contact
            contact_title: "Partner With Us",
            contact_subtitle: "Join us in building exceptional facilities for Torah education and character development.",
            development_office: "Development Office",
            director: "Director",
            email: "Email",
            phone: "Phone",
            visit_campus: "Visit Our New Campus",
            address: "Makor Chaim Institutions\nNeve Daniel Educational Center\nP.O. Box 27\nNeve Daniel 9090900, Israel",
            
            // Footer
            copyright: "© 2025 Makor Chaim Institutions. All rights reserved."
        },
        he: {
            // Header
            yeshiva_name: "ישיבת מקור חיים",
            tagline: "בונים יחד את עתידנו",
            
            // Navigation
            home: "בית",
            message: "מסר ראש הישיבה",
            story: "הסיפור שלנו",
            projects: "פרויקטים נוכחיים",
            about: "אודות",
            gallery: "גלריה",
            contact: "צור קשר",
            
            // Hero
            hero_title: 'מקור חיים - "מקור החיים"',
            hero_subtitle: "בונים את הקמפוס החדש שלנו בגוש עציון, שם דרך הבנים פוגשת דרך האבות",
            cta_button: "תמכו בחזון שלנו",
            scroll_text: "גלה עוד",
            
            // Rabbi Message
            rav_title: "מסר מהרב דוב זינגר",
            rav_subtitle: "ראש ישיבת מקור חיים",
            rav_text_1: "[כאן יופיע מסר הרב דוב זינגר על הקמפוס החדש והפרויקטים הנוכחיים - אנא ספק את הטקסט בעברית]",
            rav_text_2: "[פסקה שנייה על החזון לתורה, עבודה וגמילות חסדים - אנא ספק את הטקסט בעברית]",
            rav_closing: "תודה מקרב לב על תמיכתכם,",
            rav_signature: "בברכה,",
            rav_name: "הרב דוב זינגר",
            rav_position: "ראש ישיבה ומייסד שותף",
            
            // Video
            video_title: "הסיפור שלנו בשיר",
            video_subtitle: "חוו את הרוח והנשמה של ישיבת מקור חיים דרך הקליפ החדש שלנו",
            video_description: "הקליפ הנוגע ללב הזה מתאר את מהות הישיבה שלנו - המסירות ללימוד, חמימות הקהילה שלנו וצמיחת התלמידים.",
            
            // Projects
            projects_title: "פרויקטים נוכחיים",
            projects_subtitle: "בניית מנהיגי המחר דורשת מתקנים יוצאי דופן היום",
            fitness_center: "מרכז כושר ובריאות לתלמידים",
            fitness_center_short: "מרכז כושר מודרני",
            fitness_description: "חדר כושר ומתקן ספורט מתקדם לעידוד בריאות גופנית לצד צמיחה רוחנית.",
            fitness_sqft: "רגל מרובע",
            fitness_students: "תלמידים",
            housing_complex: "מתקן דיור מודרני לתלמידים",
            housing_complex_short: "מעונות תלמידים",
            housing_description: "מעונות נוחים ומעוררי השראה המיועדים לטפח קהילה וליצור סביבה מושלמת ללימוד תורה.",
            housing_beds: "מיטות",
            housing_access: "גישה ללימוד",
            project_cta: "לחץ למידע נוסף",
            
            // About
            about_title: "אודות ישיבת מקור חיים",
            about_text_1: "נוסדה בשנת 1985 על ידי המנוח הרב עדין שטיינזלץ יחד עם הרב דב זינגר, מקור חיים הייתה חלוצה בשיטות חינוכיות ייחודיות המעצימות יחסים עמוקים וכנים רוחנית בין תלמידים למורים, בין האדם לקב\"ה ובין אדם לחברו.",
            about_text_2: "הקמפוס החדש שלנו בגוש עציון, ליד נווה דניאל, יושב במקום שבו הדרך העתיקה של האבות פוגשת את כביש 60 המודרני - באמת המקום שבו דרך הבנים פוגשת דרך האבות. אנחנו שואפים להחזיר את האיזון של תורה, עבודה וגמילות חסדים בתלמידים שלנו באמצעות חינוך חדשני.",
            founded: "נוסדה",
            years_innovation: "שנות חדשנות",
            new_campus: "קמפוס בגוש עציון",
            
            // Gallery
            gallery_title: "החיים במקור חיים",
            gallery_subtitle: "חוו את הקהילה התוססת של למידה, צמיחה וידידות",
            gallery_torah: "לימוד תורה עמוק",
            gallery_torah_desc: "תלמידים עוסקים בלימוד אינטנסיבי בבית המדרש שלנו",
            gallery_campus: "קמפוס מעורר השראה",
            gallery_campus_desc: "המיקום המדהים שלנו בלב גוש עציון",
            gallery_chavruta: "לימוד בחברותא",
            gallery_chavruta_desc: "השותפות המסורתית בלימוד הבונה הבנה עמוקה",
            gallery_community: "קהילה ואחווה",
            gallery_community_desc: "חלוקת רגעים משמעותיים ובניית ידידויות לכל החיים",
            gallery_nature: "לימוד בטבע",
            gallery_nature_desc: "לימוד תורה מוקף ביופיה של ארץ ישראל",
            gallery_growth: "צמיחה והישגים",
            gallery_growth_desc: "חגיגת ציוני דרך והתפתחות אישית",
            
            // Contact
            contact_title: "היו שותפים שלנו",
            contact_subtitle: "הצטרפו אלינו בבניית מתקנים יוצאי דופן לחינוך תורני ופיתוח אופי.",
            development_office: "משרד פיתוח",
            director: "מנהל",
            email: "מייל",
            phone: "טלפון",
            visit_campus: "בקרו בקמפוס החדש שלנו",
            address: "מוסדות מקור חיים\nמרכז חינוכי נווה דניאל\nת.ד. 27\nנווה דניאל 9090900, ישראל",
            
            // Footer
            copyright: "© 2025 מוסדות מקור חיים. כל הזכויות שמורות."
        }
    };
    
    // Comprehensive content update function
    function updateAllContent() {
        const t = translations[currentLanguage];
        
        try {
            // Hero section
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const ctaButton = document.querySelector('.cta-button');
            const scrollText = document.querySelector('.scroll-text');
            
            if (heroTitle) heroTitle.textContent = t.hero_title;
            if (heroSubtitle) heroSubtitle.textContent = t.hero_subtitle;
            if (ctaButton) ctaButton.textContent = t.cta_button;
            if (scrollText) scrollText.textContent = t.scroll_text;

            // Rabbi message section
            const ravTitle = document.querySelector('.rav-title');
            if (ravTitle) ravTitle.textContent = t.rav_title;

            // Video section
            const videoTitle = document.querySelector('#video .section-title');
            const videoSubtitle = document.querySelector('#video .section-subtitle');
            const videoDesc = document.querySelector('.video-description p');
            
            if (videoTitle) videoTitle.textContent = t.video_title;
            if (videoSubtitle) videoSubtitle.textContent = t.video_subtitle;
            if (videoDesc) videoDesc.textContent = t.video_description;

            // Projects section
            updateProjectsSection(t);
            
            // About section
            updateAboutSection(t);
            
            // Gallery section
            updateGallerySection(t);
            
            // Contact section
            updateContactSection(t);

            // Footer
            const copyright = document.querySelector('.footer p');
            if (copyright) copyright.textContent = t.copyright;
            
        } catch (error) {
            console.error('Error updating content:', error);
        }
    }

    // Specialized update functions for complex sections
    function updateProjectsSection(t) {
        const projectsTitle = document.querySelector('#projects .section-title');
        const projectsSubtitle = document.querySelector('#projects .section-subtitle');
        
        if (projectsTitle) projectsTitle.textContent = t.projects_title;
        if (projectsSubtitle) projectsSubtitle.textContent = t.projects_subtitle;
        
        // Project cards - Gym
        const gymElements = {
            title: document.querySelector('#projects .project-card:first-child .project-title'),
            desc: document.querySelector('#projects .project-card:first-child .project-description'),
            overlayTitle: document.querySelector('#projects .project-card:first-child .project-overlay-content h3'),
            overlayCta: document.querySelector('#projects .project-card:first-child .project-overlay-content p'),
            sqftLabel: document.querySelector('#projects .project-card:first-child .stat:first-child .stat-label'),
            studentsLabel: document.querySelector('#projects .project-card:first-child .stat:last-child .stat-label')
        };
        
        if (gymElements.title) gymElements.title.textContent = t.fitness_center;
        if (gymElements.desc) gymElements.desc.textContent = t.fitness_description;
        if (gymElements.overlayTitle) gymElements.overlayTitle.textContent = t.fitness_center_short;
        if (gymElements.overlayCta) gymElements.overlayCta.textContent = t.project_cta;
        if (gymElements.sqftLabel) gymElements.sqftLabel.textContent = t.fitness_sqft;
        if (gymElements.studentsLabel) gymElements.studentsLabel.textContent = t.fitness_students;
        
        // Project cards - Dorms
        const dormsElements = {
            title: document.querySelector('#projects .project-card:last-child .project-title'),
            desc: document.querySelector('#projects .project-card:last-child .project-description'),
            overlayTitle: document.querySelector('#projects .project-card:last-child .project-overlay-content h3'),
            overlayCta: document.querySelector('#projects .project-card:last-child .project-overlay-content p'),
            bedsLabel: document.querySelector('#projects .project-card:last-child .stat:first-child .stat-label'),
            accessLabel: document.querySelector('#projects .project-card:last-child .stat:last-child .stat-label')
        };
        
        if (dormsElements.title) dormsElements.title.textContent = t.housing_complex;
        if (dormsElements.desc) dormsElements.desc.textContent = t.housing_description;
        if (dormsElements.overlayTitle) dormsElements.overlayTitle.textContent = t.housing_complex_short;
        if (dormsElements.overlayCta) dormsElements.overlayCta.textContent = t.project_cta;
        if (dormsElements.bedsLabel) dormsElements.bedsLabel.textContent = t.housing_beds;
        if (dormsElements.accessLabel) dormsElements.accessLabel.textContent = t.housing_access;
    }

    function updateAboutSection(t) {
        const aboutTitle = document.querySelector('#about h2');
        const aboutTexts = document.querySelectorAll('#about .about-text p');
        const aboutStats = document.querySelectorAll('#about .stat-label');
        
        if (aboutTitle) aboutTitle.textContent = t.about_title;
        if (aboutTexts.length >= 2) {
            aboutTexts[0].textContent = t.about_text_1;
            aboutTexts[1].textContent = t.about_text_2;
        }
        if (aboutStats.length >= 3) {
            aboutStats[0].textContent = t.founded;
            aboutStats[1].textContent = t.years_innovation;
            aboutStats[2].textContent = t.new_campus;
        }
    }

    function updateGallerySection(t) {
        const galleryTitle = document.querySelector('#gallery .section-title');
        const gallerySubtitle = document.querySelector('#gallery .section-subtitle');
        const galleryItems = document.querySelectorAll('#gallery .gallery-item');
        
        if (galleryTitle) galleryTitle.textContent = t.gallery_title;
        if (gallerySubtitle) gallerySubtitle.textContent = t.gallery_subtitle;
        
        if (galleryItems.length >= 6) {
            const galleryTexts = [
                { h3: t.gallery_torah, p: t.gallery_torah_desc },
                { h3: t.gallery_campus, p: t.gallery_campus_desc },
                { h3: t.gallery_chavruta, p: t.gallery_chavruta_desc },
                { h3: t.gallery_community, p: t.gallery_community_desc },
                { h3: t.gallery_nature, p: t.gallery_nature_desc },
                { h3: t.gallery_growth, p: t.gallery_growth_desc }
            ];
            
            galleryItems.forEach((item, index) => {
                if (galleryTexts[index]) {
                    const h3 = item.querySelector('.gallery-overlay h3');
                    const p = item.querySelector('.gallery-overlay p');
                    if (h3) h3.textContent = galleryTexts[index].h3;
                    if (p) p.textContent = galleryTexts[index].p;
                }
            });
        }
    }

    function updateContactSection(t) {
        const contactTitle = document.querySelector('#contact h2');
        const contactSubtitle = document.querySelector('#contact .contact-content > p');
        const contactOfficeTitle = document.querySelector('#contact .contact-details h4');
        const contactLabels = document.querySelectorAll('#contact .contact-details p span:first-child');
        const contactVisitTitle = document.querySelector('#contact .contact-item:last-child h4');
        
        if (contactTitle) contactTitle.textContent = t.contact_title;
        if (contactSubtitle) contactSubtitle.textContent = t.contact_subtitle;
        if (contactOfficeTitle) contactOfficeTitle.textContent = t.development_office;
        if (contactVisitTitle) contactVisitTitle.textContent = t.visit_campus;
        
        if (contactLabels.length >= 3) {
            contactLabels[0].textContent = t.director + ':';
            contactLabels[1].textContent = t.email + ':';
            contactLabels[2].textContent = t.phone + ':';
        }
    }
    
    // Set up language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Language button clicked:', this.dataset.lang);
            
            if (currentLanguage === this.dataset.lang) {
                return; // Already using this language
            }
            
            // Update active button
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update language
            currentLanguage = this.dataset.lang;
            
            // Update direction attributes
            if (currentLanguage === 'he') {
                document.documentElement.setAttribute('lang', 'he');
                document.documentElement.setAttribute('dir', 'rtl');
                document.body.classList.add('rtl');
            } else {
                document.documentElement.setAttribute('lang', 'en');
                document.documentElement.setAttribute('dir', 'ltr');
                document.body.classList.remove('rtl');
            }
            
            // Update header content
            const t = translations[currentLanguage];
            document.querySelector('.logo-text h1').textContent = t.yeshiva_name;
            document.querySelector('.tagline').textContent = t.tagline;
            
            // Navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            if (navLinks.length >= 7) {
                navLinks[0].textContent = t.contact;
                navLinks[1].textContent = t.gallery;
                navLinks[2].textContent = t.about;
                navLinks[3].textContent = t.projects;
                navLinks[4].textContent = t.story;
                navLinks[5].textContent = t.message;
                navLinks[6].textContent = t.home;
            }
            
            // Update all content
            updateAllContent();
        });
    });
    
    // Set up smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Handle image errors
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const parent = this.parentElement;
            if (parent) {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.textContent = 'Image not available';
                placeholder.style.cssText = `
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f0f0f0;
                    color: #666;
                    height: 200px;
                    font-size: 14px;
                    text-align: center;
                    border-radius: 8px;
                `;
                parent.appendChild(placeholder);
            }
        });
    });
    
    // Navigation highlighting and header behavior
    function setupNavHighlighting() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        // Header transformation on scroll - always visible, compact when scrolling
        const header = document.querySelector('.header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add compact class when scrolling down
            if (scrollTop > 50) {
                header.classList.add('compact');
            } else {
                header.classList.remove('compact');
            }
            
            // Header always stays visible - removed hiding functionality
            lastScrollTop = scrollTop;
        });
        
        // Create the Intersection Observer for section highlighting
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // When section is in view
                if (entry.isIntersecting) {
                    // Get the id of the section in view
                    const id = entry.target.getAttribute('id');
                    
                    // Remove active class from all nav links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to the corresponding nav link
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, { 
            threshold: [0.3, 0.7], // Better thresholds for section detection
            rootMargin: '-100px 0px -50px 0px' // Adjust for fixed header and better triggering
        });

        // Observe all sections
        sections.forEach(section => {
            navObserver.observe(section);
        });
    }
    
    // Scroll animations for sections
    const setupScrollAnimations = () => {
        // Get all sections to animate
        const sections = document.querySelectorAll('section');
        
        // Create the Intersection Observer
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // When section is in view
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Add animation order to children for staggered animations
                    const animatedChildren = entry.target.querySelectorAll('.project-card, .about-point, .gallery-item, .contact-item');
                    animatedChildren.forEach((child, index) => {
                        child.style.setProperty('--animation-order', index);
                    });
                    
                    // Optional: Unobserve if you want the animation to occur only once
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the section is visible
            rootMargin: '0px 0px -100px 0px' // Start animation slightly before the section comes into view
        });

        // Observe all sections
        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    };
    
    // Initialize everything
    setupScrollAnimations();
    setupNavHighlighting();
    
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            nav.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                nav.classList.remove('open');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    console.log('Script initialization complete');
});
