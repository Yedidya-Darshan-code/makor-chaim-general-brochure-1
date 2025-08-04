// Main JavaScript for Makor Chaim website

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - script running');
    
    // Translations object
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
            
            // Rabbi Message
            rav_title: "A Message from Rabbi Dov Zinger",
            
            // Other sections...
        },
        he: {
            // These are just placeholders as Hebrew is already in the HTML
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
            hero_title: "ישיבת מקור חיים",
            hero_subtitle: "מקימים את הקמפוס החדש בגוש עציון, שם דרך הבנים פוגשת את מסורת האבות",
            cta_button: "תמכו בחזון שלנו",
            
            // Rabbi Message
            rav_title: "מסר מהרב דוב זינגר",
            
            // Other sections...
        }
    };
    
    // Function to update content based on language
    function updateContent() {
        const t = translations[currentLanguage];
        
        // If switching to English, update all text elements
        if (currentLanguage === 'en') {
            document.querySelector('.logo-text h1').textContent = t.yeshiva_name;
            document.querySelector('.tagline').textContent = t.tagline;
            
            // Update navigation links
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
            
            // Update hero section
            const heroTitle = document.querySelector('.hero-title');
            const heroSubtitle = document.querySelector('.hero-subtitle');
            const ctaButton = document.querySelector('.cta-button');
            
            if (heroTitle) heroTitle.textContent = t.hero_title;
            if (heroSubtitle) heroSubtitle.textContent = t.hero_subtitle;
            if (ctaButton) ctaButton.textContent = t.cta_button;
            
            // Update rabbi message section
            const ravTitle = document.querySelector('.rav-title');
            if (ravTitle) ravTitle.textContent = t.rav_title;
            
            // Update footer
            const footerH3 = document.querySelector('.footer-logo-text h3');
            const footerP = document.querySelector('.footer-logo-text p');
            
            if (footerH3) footerH3.textContent = t.yeshiva_name;
            if (footerP) footerP.textContent = t.tagline;
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
