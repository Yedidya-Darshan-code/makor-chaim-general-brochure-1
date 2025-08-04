// Main JavaScript for Makor Chaim website

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - script running');
    
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
            fitness_description: "A state-of-the-art gymnasium and fitness facility to promote physical wellness alongside spiritual growth.",
            fitness_sqft: "sq ft",
            fitness_students: "students served",
            housing_complex: "Modern Student Housing Complex",
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
            video_subtitle: "חוו את הרוח והנשמה של ישיבת מקור חיים דרך הקליפ המוזיקלי החדש שלנו",
            video_description: "הקליפ המוזיקלי המרגש הזה תופס את המהות של הישיבה שלנו - המסירות ללימוד, החמימות של הקהילה שלנו והצמיחה של התלמידים שלנו.",
            
            // Projects
            projects_title: "פרויקטים נוכחיים",
            projects_subtitle: "בניית מנהיגי המחר דורשת מתקנים יוצאי דופן היום",
            // Additional project translations would go here
            
            // About
            about_title: "אודות ישיבת מקור חיים",
            // Additional about translations would go here
            
            // Gallery
            gallery_title: "החיים במקור חיים",
            gallery_subtitle: "חוו את הקהילה התוססת של למידה, צמיחה וידידות",
            // Additional gallery translations would go here
            
            // Contact
            contact_title: "היו שותפים שלנו",
            contact_subtitle: "הצטרפו אלינו בבניית מתקנים יוצאי דופן לחינוך תורני ופיתוח אופי.",
            // Additional contact translations would go here
            
            // Footer
            copyright: "© 2025 מוסדות מקור חיים. כל הזכויות שמורות."
        }
    };
    
    // Function to update content based on language
    function updateContent() {
        const t = translations[currentLanguage];
        
        // If switching to English, update all text elements
        if (currentLanguage === 'en') {
            // Header
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
            const projectsTitle = document.querySelector('#projects .section-title');
            const projectsSubtitle = document.querySelector('#projects .section-subtitle');
            
            if (projectsTitle) projectsTitle.textContent = t.projects_title;
            if (projectsSubtitle) projectsSubtitle.textContent = t.projects_subtitle;
            
            // About section
            const aboutTitle = document.querySelector('#about h2');
            const aboutTexts = document.querySelectorAll('#about p');
            
            if (aboutTitle) aboutTitle.textContent = t.about_title;
            if (aboutTexts.length >= 2) {
                aboutTexts[0].textContent = t.about_text_1;
                aboutTexts[1].textContent = t.about_text_2;
            }
            
            // Gallery section
            const galleryTitle = document.querySelector('#gallery .section-title');
            const gallerySubtitle = document.querySelector('#gallery .section-subtitle');
            
            if (galleryTitle) galleryTitle.textContent = t.gallery_title;
            if (gallerySubtitle) gallerySubtitle.textContent = t.gallery_subtitle;
            
            // Contact section
            const contactTitle = document.querySelector('#contact h2');
            const contactSubtitle = document.querySelector('#contact > .container > .contact-content > p');
            
            if (contactTitle) contactTitle.textContent = t.contact_title;
            if (contactSubtitle) contactSubtitle.textContent = t.contact_subtitle;
            
            // Footer
            const copyright = document.querySelector('.footer p');
            if (copyright) copyright.textContent = t.copyright;
        } else {
            // When switching back to Hebrew, reload the page
            // This ensures all Hebrew text is displayed correctly
            window.location.reload();
            return;
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
            
            // Update content
            updateContent();
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
    
    console.log('Script initialization complete');
});
