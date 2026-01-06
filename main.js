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
            community: "Community Involvement",
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
            rav_text_opening: "Our dear graduates and friends,",
            rav_text_quote: "For with You is the fountain of life",
            rav_text_1: "Forty-one years have passed, and our hearts still beat with the same aspiration - to educate a generation of Torah scholars, people of character, men of kindness. A generation that knows how to learn deeply, to live truthfully, to give of themselves to others.",
            rav_text_2: "Today, as we stand on the threshold of building our new campus in Gush Etzion, we feel this is a moment of revival and renewal. A place where the path of our fathers meets the path of our sons, where ancient Torah meets renewed life.",
            rav_text_3: "I invite you to be partners in this sacred endeavor, to build together this home, this generation, this future. For every stone we build, every student we educate - is another candle illuminating the darkness, another wellspring of Torah and kindness in our world.",
            rav_closing: "Thank you from the bottom of my heart for your support,",
            rav_signature: "Sincerely,",
            rav_name: "Rabbi Dov Zinger",
            rav_position: "Rosh Yeshiva and Co-founder",
            
            // Rabbi achievements
            rav_achievement_founder: "Co-founder",
            rav_achievement_educator: "Experienced Educator",
            
            // About highlights
            about_highlight_torah: "Advanced Torah Studies",
            about_highlight_community: "Community Involvement", 
            about_highlight_innovation: "Innovative Education",
            
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
            elevator_complex: "Accessibility Elevator Construction",
            elevator_complex_short: "Accessibility Elevator",
            elevator_description: "A modern accessibility elevator to make the yeshiva accessible to students and visitors with mobility limitations, ensuring equal opportunities for every student.",
            library_complex: "Advanced Study Center & Library",
            library_complex_short: "Advanced Library",
            library_description: "Modern and comfortable library with a rich collection of Torah and wisdom books, designed for deep study and Torah research.",
            library_books: "books",
            library_seats: "seats",
            project_cta: "Click to learn more",
            
            // Library
            library_title: "Advanced Library",
            library_subtitle: "Modern and comfortable learning space designed for deep study and Torah research",
            library_video_title: "Virtual Library Tour",
            library_video_desc: "Experience the unique atmosphere of our learning center",
            library_books_title: "Rich Book Collection",
            library_books_desc: "Thousands of Torah and wisdom books in one place",
            library_comfort_title: "Comfortable Seating Areas",
            library_comfort_desc: "Designed and pleasant environment for extended study",
            
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
            gallery_chavruta: "Weekly Mishmar Until Late Hours",
            gallery_chavruta_desc: "Special late-night Torah study group continuing deep into the night",
            gallery_community: "Farbrengen & Niggunim",
            gallery_community_desc: "Special evening of Torah, Chassidic melodies, and unity for the Alter Rebbe's Yartzeit",
            gallery_nature: "Gemara Competition & Joy of Learning",
            gallery_nature_desc: "Annual Chanukah Gemara competition combining the light of the holiday with the light of Torah",
            gallery_growth: "Dedicated Staff",
            gallery_growth_desc: "Devoted rabbis and educators guiding each student on their personal journey",
            
            // Community Involvement Section
            community_section_title: "Community Involvement",
            community_section_subtitle: "Our students lead projects of Tikkun Olam and kindness",
            
            community_sukkah_badge: "Kindness Project",
            community_sukkah_title: "Sukkah Building",
            community_sukkah_desc: "Our students help elderly families and single-parent families build sukkot for the holiday, bringing joy and light to the community.",
            community_sukkah_stat1_num: "15+",
            community_sukkah_stat1_label: "Families",
            community_sukkah_stat2_num: "25",
            community_sukkah_stat2_label: "Students",
            
            community_memorial_badge: "Education & Commemoration",
            community_memorial_title: "Memorial Visits",
            community_memorial_desc: "Regular visits to memorial sites and commemoration ceremonies for fallen IDF soldiers and terror victims, maintaining the connection between generations.",
            community_memorial_stat1_num: "12",
            community_memorial_stat1_label: "Events per year",
            community_memorial_stat2_num: "50+",
            community_memorial_stat2_label: "Participants",
            
            community_agriculture_badge: "Working the Land",
            community_agriculture_title: "Agricultural Volunteering",
            community_agriculture_desc: "Working in the fields and orchards of local farmers, strengthening the connection to the land and work values.",
            community_agriculture_stat1_num: "8",
            community_agriculture_stat1_label: "Farms",
            community_agriculture_stat2_num: "200+",
            community_agriculture_stat2_label: "Hours",
            
            // Contact
            contact_title: "Partner With Us",
            contact_subtitle: "Join us in building exceptional facilities for Torah education and character development.",
            development_office: "Development Office",
            director: "Director",
            director_name: "Yedidya Darshan",
            email: "Email",
            phone: "Phone",
            visit_campus: "Visit Our New Campus",
            address: "Makor Chaim Institutions\nNeve Daniel Educational Center\nP.O. Box 27\nNeve Daniel 9090900, Israel",
            
            // Donation
            donate_title: "Support Our Vision",
            donate_subtitle: "Every contribution helps us build the future of our yeshiva and provide the highest quality education to our students",
            donate_button: "Donate Now",
            
            // Project Modals
            gym_modal_title: "Fitness and Wellness Center for Students",
            gym_modal_why: "Why is a gym essential for our yeshiva?",
            gym_modal_army: "Preparation for Military Service:",
            gym_modal_army_text: "Our students enlist in elite IDF units and serve in combat roles. Superior physical fitness is essential for their success and safety.",
            gym_modal_rambam: "Maimonides' Teachings:",
            gym_modal_rambam_text: "The Rambam taught us that maintaining physical health is part of serving God. A healthy body supports a healthy soul and enables more focused and quality Torah study.",
            gym_modal_balance: "Balance of Body and Soul:",
            gym_modal_balance_text: "Our yeshiva believes in a comprehensive approach to education - Torah, work, and acts of kindness. Regular physical activity contributes to mental balance and spiritual growth.",
            
            elevator_modal_title: "Building an Accessible Elevator",
            elevator_modal_why: "Why is accessibility important to us?",
            elevator_modal_equal: "Equal Opportunities:",
            elevator_modal_equal_text: "Every student deserves an equal opportunity to learn and grow, regardless of physical limitations.",
            elevator_modal_access: "Making the Yeshiva Accessible:",
            elevator_modal_access_text: "The elevator will enable students and visitors with mobility limitations full access to all parts of our campus.",
            elevator_modal_values: "Jewish Values:",
            elevator_modal_values_text: "The Torah teaches us to care for every person and provide them with dignity and opportunities for growth. The elevator embodies these values in action.",
            
            // Footer
            copyright: "© 2026 Makor Chaim Institutions. All rights reserved."
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
            community: "מעורבות קהילתית",
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
            rav_text_opening: "בוגרינו וידידינו היקרים,",
            rav_text_quote: "כי עמך מקור חיים",
            rav_text_1: "ארבעים ואחת שנים עוברות, והלב עדיין דופק באותה שאיפה - לחנך דור של תלמידי חכמים, בעלי מידות, אנשי חסד. דור שיודע ללמוד עמוק, לחיות באמת, לתת מעצמו לזולת.",
            rav_text_2: "היום, בעמדנו על סף בניין הקמפוס החדש בגוש עציון, אנו חשים שזהו רגע של תקומה ושל התחדשות. מקום שבו דרך האבות פוגשת את דרך הבנים, שבו התורה העתיקה פוגשת את החיים המתחדשים.",
            rav_text_3: "אני מזמין אתכם להיות שותפים במפעל הקדוש הזה, לבנות יחד את הבית הזה, את הדור הזה, את העתיד הזה. כי כל אבן שנבנה, כל תלמיד שנחנך - הוא נר נוסף שמאיר את החושך, הוא מעיין נוסף של תורה וחסד בעולמנו.",
            rav_closing: "תודה מקרב לב על תמיכתכם,",
            rav_signature: "בברכה,",
            rav_name: "הרב דוב זינגר",
            rav_position: "ראש ישיבה ומייסד שותף",
            
            // Rabbi achievements  
            rav_achievement_founder: "מייסד שותף",
            rav_achievement_educator: "מחנך מנוסה",
            
            // About highlights
            about_highlight_torah: "לימודי תורה מתקדמים",
            about_highlight_community: "מעורבות חברתית",
            about_highlight_innovation: "חינוך חדשני",
            
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
            elevator_complex: "בניית מעלית לנכים",
            elevator_complex_short: "מעלית נגישות",
            elevator_description: "מעלית נגישות מתקדמת להנגשת הישיבה לתלמידים ומבקרים עם מוגבלות ניידות, מבטיחים שוויון הזדמנויות לכל תלמיד.",
            library_complex: "מרכז לימוד וספרייה מתקדם",
            library_complex_short: "ספרייה מתקדמת",
            library_description: "ספרייה מודרנית ונוחה עם אוסף עשיר של ספרי תורה וחכמה, מעוצבת ללימוד עמוק ומחקר תורני.",
            library_books: "ספרים",
            library_seats: "מקומות ישיבה",
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
            gallery_chavruta: "משמר כל שבוע עד השעות הקטנות",
            gallery_chavruta_desc: "חבורה ייחודית ללימוד תורה עמוק ומתמיד בשעות הלילה המאוחרות",
            gallery_community: "התוועדות וניגונים",
            gallery_community_desc: "ערב מיוחד של תורה, ניגון ואחדות לכבוד יום הילולת אדמו״ר הזקן",
            gallery_nature: "חידון והנאה מלימוד הגמרא",
            gallery_nature_desc: "תחרות גמרא שנתית לחנוכה, משלבת את אור החג עם אור התורה",
            gallery_growth: "צוות מסור",
            gallery_growth_desc: "רבנים ומחנכים מסורים המלווים כל תלמיד בדרכו האישית",
            
            // Community Involvement Section
            community_section_title: "מעורבות קהילתית",
            community_section_subtitle: "תלמידינו מובילים בפרויקטים של תיקון עולם וחסד",
            
            community_sukkah_badge: "פרויקט חסד",
            community_sukkah_title: "בניית סוכות",
            community_sukkah_desc: "תלמידינו עוזרים למשפחות קשישים ומשפחות בודדות לבנות סוכות לחג הסוכות, מביאים שמחה ואור לקהילה.",
            community_sukkah_stat1_num: "15+",
            community_sukkah_stat1_label: "משפחות",
            community_sukkah_stat2_num: "25",
            community_sukkah_stat2_label: "תלמידים",
            
            community_memorial_badge: "חינוך והנצחה",
            community_memorial_title: "ביקורי זיכרון",
            community_memorial_desc: "ביקורים קבועים באתרי זיכרון וטקסי הנצחה לחללי צה\"ל ונפגעי טרור, שומרים על הקשר בין הדורות.",
            community_memorial_stat1_num: "12",
            community_memorial_stat1_label: "אירועים בשנה",
            community_memorial_stat2_num: "50+",
            community_memorial_stat2_label: "משתתפים",
            
            community_agriculture_badge: "עבודת האדמה",
            community_agriculture_title: "התנדבות חקלאית",
            community_agriculture_desc: "עבודה בשדות ומטעים של חקלאים מקומיים, מחזקים את הקשר לאדמה ולערכי העבודה.",
            community_agriculture_stat1_num: "8",
            community_agriculture_stat1_label: "חווות",
            community_agriculture_stat2_num: "200+",
            community_agriculture_stat2_label: "שעות",
            
            // Contact
            contact_title: "היו שותפים שלנו",
            contact_subtitle: "הצטרפו אלינו בבניית מתקנים יוצאי דופן לחינוך תורני ופיתוח אופי.",
            development_office: "משרד פיתוח",
            director: "מנהל",
            director_name: "ידידיה דרשן",
            email: "מייל",
            phone: "טלפון",
            visit_campus: "בקרו בקמפוס החדש שלנו",
            address: "מוסדות מקור חיים\nמרכז חינוכי נווה דניאל\nת.ד. 27\nנווה דניאל 9090900, ישראל",
            
            // Donation
            donate_title: "תמכו בחזון שלנו",
            donate_subtitle: "כל תרומה עוזרת לנו לבנות את העתיד של הישיבה ולהעניק לתלמידינו חינוך ברמה הגבוהה ביותר",
            donate_button: "תרמו עכשיו",
            
            // Project Modals
            gym_modal_title: "מרכז כושר ובריאות לתלמידים",
            gym_modal_why: "למה חדר כושר חיוני לישיבה?",
            gym_modal_army: "הכנה לשירות צבאי:",
            gym_modal_army_text: "תלמידינו מתגייסים ליחידות מובחרות בצה\"ל ומשרתים בתפקידים מבצעיים. כושר גופני תקין הוא חיוני להצלחתם ובטיחותם.",
            gym_modal_rambam: "דברי חז\"ל:",
            gym_modal_rambam_text: "חז\"ל לימדו אותנו ששמירה על הבריאות הגופנית היא חלק מעבודת השם. גוף בריא מסייע לנפש בריאה, ומאפשר למוד תורה בצורה איכותית ומרוכזת יותר.",
            gym_modal_balance: "איזון של גוף ונפש:",
            gym_modal_balance_text: "הישיבה שלנו מאמינה בגישה מקיפה לחינוך - תורה, עבודה וגמילות חסדים. פעילות גופנית סדירה תורמת לאיזון נפשי ולצמיחה רוחנית.",
            
            elevator_modal_title: "בניית מעלית לנכים",
            elevator_modal_why: "למה נגישות חשובה לנו?",
            elevator_modal_equal: "שוויון הזדמנויות:",
            elevator_modal_equal_text: "כל תלמיד ראוי להזדמנות שווה ללמוד ולצמוח, בלי תלות במוגבלות פיזית.",
            elevator_modal_access: "הנגשת הישיבה:",
            elevator_modal_access_text: "המעלית תאפשר לתלמידים ולמבקרים עם מוגבלות ניידות גישה מלאה לכל חלקי הקמפוס.",
            elevator_modal_values: "ערכים יהודיים:",
            elevator_modal_values_text: "התורה מלמדת אותנו לדאוג לכל אדם ולהעניק לו כבויות והזדמנות לצמיחה. המעלית מבטאת ערכים אלו בפועל.",
            
            // Footer
            copyright: "© 2026 מוסדות מקור חיים. כל הזכויות שמורות."
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
            updateRabbiMessageSection(t);

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
            
            // Community section
            updateCommunitySection(t);
            
            // Gallery section
            updateGallerySection(t);
            
            // Contact section
            updateContactSection(t);
            
            // Donation section
            updateDonationSection(t);
            
            // Project Modals
            updateModalContent(t);

            // Footer
            const copyright = document.querySelector('.footer p');
            if (copyright) copyright.textContent = t.copyright;
            
        } catch (error) {
            console.error('Error updating content:', error);
        }
    }

    // Update Rabbi Message Section
    function updateRabbiMessageSection(t) {
        // Rabbi credentials
        const ravName = document.querySelector('.rav-credentials .rav-name');
        const ravPosition = document.querySelector('.rav-credentials .rav-position');
        
        if (ravName) ravName.textContent = t.rav_name;
        if (ravPosition) ravPosition.textContent = t.rav_position;
        
        // Achievement labels with specific classes
        const achievementFounder = document.querySelector('.achievement-founder');
        const achievementEducator = document.querySelector('.achievement-educator');
        
        if (achievementFounder) achievementFounder.textContent = t.rav_achievement_founder;
        if (achievementEducator) achievementEducator.textContent = t.rav_achievement_educator;
        
        // Message header
        const ravTitle = document.querySelector('.rav-title');
        if (ravTitle) ravTitle.textContent = t.rav_title;
        
        // Message paragraphs - update with new classes
        const ravOpening = document.querySelector('.rav-opening');
        const ravQuote = document.querySelector('.rav-quote');
        const ravP1 = document.querySelector('.rav-p1');
        const ravP2 = document.querySelector('.rav-p2');
        const ravP3 = document.querySelector('.rav-p3');
        
        if (ravOpening) ravOpening.textContent = t.rav_text_opening;
        if (ravQuote) ravQuote.textContent = t.rav_text_quote;
        if (ravP1) ravP1.textContent = t.rav_text_1;
        if (ravP2) ravP2.textContent = t.rav_text_2;
        if (ravP3) ravP3.textContent = t.rav_text_3;
        
        // Signature
        const signatureText = document.querySelector('.rav-signature .signature-text');
        const signatureSpan = document.querySelector('.signature-name span');
        const signatureStrong = document.querySelector('.signature-name strong');
        
        if (signatureText) signatureText.textContent = t.rav_closing;
        if (signatureSpan) signatureSpan.textContent = t.rav_signature;
        if (signatureStrong) signatureStrong.textContent = t.rav_name;
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
            overlayCta: document.querySelector('#projects .project-card:first-child .project-overlay-content p')
        };
        
        if (gymElements.title) gymElements.title.textContent = t.fitness_center;
        if (gymElements.desc) gymElements.desc.textContent = t.fitness_description;
        if (gymElements.overlayTitle) gymElements.overlayTitle.textContent = t.fitness_center_short;
        if (gymElements.overlayCta) gymElements.overlayCta.textContent = t.project_cta;
        
        // Project cards - Elevator
        const elevatorElements = {
            title: document.querySelector('#projects .project-card:nth-child(2) .project-title'),
            desc: document.querySelector('#projects .project-card:nth-child(2) .project-description'),
            overlayTitle: document.querySelector('#projects .project-card:nth-child(2) .project-overlay-content h3'),
            overlayCta: document.querySelector('#projects .project-card:nth-child(2) .project-overlay-content p')
        };
        
        if (elevatorElements.title) elevatorElements.title.textContent = t.elevator_complex;
        if (elevatorElements.desc) elevatorElements.desc.textContent = t.elevator_description;
        if (elevatorElements.overlayTitle) elevatorElements.overlayTitle.textContent = t.elevator_complex_short;
        if (elevatorElements.overlayCta) elevatorElements.overlayCta.textContent = t.project_cta;

        // Project cards - Library
        const libraryElements = {
            title: document.querySelector('#projects .project-card:nth-child(3) .project-title'),
            desc: document.querySelector('#projects .project-card:nth-child(3) .project-description'),
            overlayTitle: document.querySelector('#projects .project-card:nth-child(3) .project-overlay-content h3'),
            overlayCta: document.querySelector('#projects .project-card:nth-child(3) .project-overlay-content p')
        };
        
        if (libraryElements.title) libraryElements.title.textContent = t.library_complex;
        if (libraryElements.desc) libraryElements.desc.textContent = t.library_description;
        if (libraryElements.overlayTitle) libraryElements.overlayTitle.textContent = t.library_complex_short;
        if (libraryElements.overlayCta) libraryElements.overlayCta.textContent = t.project_cta;
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
        
        // Update highlight items with specific classes
        const highlightTorah = document.querySelector('.highlight-torah');
        const highlightCommunity = document.querySelector('.highlight-community');
        const highlightInnovation = document.querySelector('.highlight-innovation');
        
        if (highlightTorah) highlightTorah.textContent = t.about_highlight_torah;
        if (highlightCommunity) highlightCommunity.textContent = t.about_highlight_community;
        if (highlightInnovation) highlightInnovation.textContent = t.about_highlight_innovation;
    }

    function updateCommunitySection(t) {
        const communityTitle = document.querySelector('#community .section-title');
        const communitySubtitle = document.querySelector('#community .section-subtitle');
        
        if (communityTitle) communityTitle.textContent = t.community_section_title;
        if (communitySubtitle) communitySubtitle.textContent = t.community_section_subtitle;
        
        const communityCards = document.querySelectorAll('#community .community-card');
        
        if (communityCards.length >= 3) {
            // Sukkah card (first card)
            const sukkahBadge = communityCards[0].querySelector('.community-badge');
            const sukkahTitle = communityCards[0].querySelector('.community-title');
            const sukkahDesc = communityCards[0].querySelector('.community-description');
            const sukkahStats = communityCards[0].querySelectorAll('.stat-label');
            
            if (sukkahBadge) sukkahBadge.textContent = t.community_sukkah_badge;
            if (sukkahTitle) sukkahTitle.textContent = t.community_sukkah_title;
            if (sukkahDesc) sukkahDesc.textContent = t.community_sukkah_desc;
            if (sukkahStats[0]) sukkahStats[0].textContent = t.community_sukkah_stat1_label;
            if (sukkahStats[1]) sukkahStats[1].textContent = t.community_sukkah_stat2_label;
            
            // Memorial card (second card)
            const memorialBadge = communityCards[1].querySelector('.community-badge');
            const memorialTitle = communityCards[1].querySelector('.community-title');
            const memorialDesc = communityCards[1].querySelector('.community-description');
            const memorialStats = communityCards[1].querySelectorAll('.stat-label');
            
            if (memorialBadge) memorialBadge.textContent = t.community_memorial_badge;
            if (memorialTitle) memorialTitle.textContent = t.community_memorial_title;
            if (memorialDesc) memorialDesc.textContent = t.community_memorial_desc;
            if (memorialStats[0]) memorialStats[0].textContent = t.community_memorial_stat1_label;
            if (memorialStats[1]) memorialStats[1].textContent = t.community_memorial_stat2_label;
            
            // Agriculture card (third card)
            const agricultureBadge = communityCards[2].querySelector('.community-badge');
            const agricultureTitle = communityCards[2].querySelector('.community-title');
            const agricultureDesc = communityCards[2].querySelector('.community-description');
            const agricultureStats = communityCards[2].querySelectorAll('.stat-label');
            
            if (agricultureBadge) agricultureBadge.textContent = t.community_agriculture_badge;
            if (agricultureTitle) agricultureTitle.textContent = t.community_agriculture_title;
            if (agricultureDesc) agricultureDesc.textContent = t.community_agriculture_desc;
            if (agricultureStats[0]) agricultureStats[0].textContent = t.community_agriculture_stat1_label;
            if (agricultureStats[1]) agricultureStats[1].textContent = t.community_agriculture_stat2_label;
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
        const directorName = document.querySelector('.director-name');
        const contactPhoto = document.querySelector('.contact-photo');
        
        if (contactTitle) contactTitle.textContent = t.contact_title;
        if (contactSubtitle) contactSubtitle.textContent = t.contact_subtitle;
        if (contactOfficeTitle) contactOfficeTitle.textContent = t.development_office;
        if (contactVisitTitle) contactVisitTitle.textContent = t.visit_campus;
        if (directorName) directorName.textContent = t.director_name;
        if (contactPhoto) contactPhoto.alt = t.director_name;
        
        if (contactLabels.length >= 3) {
            contactLabels[0].textContent = t.director + ':';
            contactLabels[1].textContent = t.email + ':';
            contactLabels[2].textContent = t.phone + ':';
        }
    }
    
    function updateDonationSection(t) {
        const donateTitle = document.querySelector('.donation-title');
        const donateSubtitle = document.querySelector('.donation-subtitle');
        const donateBtn = document.getElementById('donateBtn');
        const donateText = document.querySelector('.donate-text');
        
        if (donateTitle) donateTitle.textContent = t.donate_title;
        if (donateSubtitle) donateSubtitle.textContent = t.donate_subtitle;
        if (donateText) donateText.textContent = t.donate_button;
        
        // Update the donation link based on language
        if (donateBtn) {
            if (currentLanguage === 'he') {
                donateBtn.href = 'https://www.peach-in.com/cmp/wfX9fw53z?lang=he';
            } else {
                donateBtn.href = 'https://www.peach-in.com/cmp/wfX9fw53z?lang=en';
            }
        }
    }
    
    function updateModalContent(t) {
        // Gym Modal
        const gymModalTitle = document.getElementById('gymModalTitle');
        const gymModalText = document.querySelector('#gymModal .modal-text');
        
        if (gymModalTitle) gymModalTitle.textContent = t.gym_modal_title;
        if (gymModalText) {
            gymModalText.innerHTML = `
                <h3>${t.gym_modal_why}</h3>
                <p><strong>${t.gym_modal_army}</strong> ${t.gym_modal_army_text}</p>
                <p><strong>${t.gym_modal_rambam}</strong> ${t.gym_modal_rambam_text}</p>
                <p><strong>${t.gym_modal_balance}</strong> ${t.gym_modal_balance_text}</p>
            `;
        }
        
        // Elevator Modal
        const elevatorModalTitle = document.getElementById('elevatorModalTitle');
        const elevatorModalText = document.querySelector('#elevatorModal .modal-text');
        
        if (elevatorModalTitle) elevatorModalTitle.textContent = t.elevator_modal_title;
        if (elevatorModalText) {
            elevatorModalText.innerHTML = `
                <h3>${t.elevator_modal_why}</h3>
                <p><strong>${t.elevator_modal_equal}</strong> ${t.elevator_modal_equal_text}</p>
                <p><strong>${t.elevator_modal_access}</strong> ${t.elevator_modal_access_text}</p>
                <p><strong>${t.elevator_modal_values}</strong> ${t.elevator_modal_values_text}</p>
            `;
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
            
            // Navigation links - HTML is in reverse order (Contact to Home)
            const navLinks = document.querySelectorAll('.nav-link');
            if (navLinks.length >= 8) {
                navLinks[7].textContent = t.home;
                navLinks[6].textContent = t.message;
                navLinks[5].textContent = t.story;
                navLinks[4].textContent = t.projects;
                navLinks[3].textContent = t.about;
                navLinks[2].textContent = t.community;
                navLinks[1].textContent = t.gallery;
                navLinks[0].textContent = t.contact;
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
    
    // Enhanced animated counter function with professional effects
    function animateCounter(element, start, end, duration, suffix = '') {
        const startTime = performance.now();
        const isYear = end >= 1900; // Special handling for years
        
        // Add counting class for visual effects
        element.classList.add('counting');
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Use easeOutCubic for smooth animation
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeProgress);
            
            if (isYear) {
                element.textContent = current.toString();
            } else {
                element.textContent = current + suffix;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                // Ensure we end with the exact target number
                element.textContent = end + suffix;
                element.classList.remove('counting');
                
                // Add completion glow effect
                element.style.textShadow = '0 0 20px rgba(39, 211, 245, 0.8)';
                setTimeout(() => {
                    element.style.textShadow = '';
                }, 1000);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Enhanced setup for animated counters with better targeting
    function setupAnimatedCounters() {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    if (counter.dataset.animated) return; // Already animated
                   
                    const text = counter.textContent.trim();
                    let targetNumber = 0;
                    let suffix = '';
                    
                    // Parse different number formats with better logic
                    if (text === '1985') {
                        targetNumber = 1985;
                    } else if (text === '2026') {
                        targetNumber = 2026;
                    } else if (text.includes('+')) {
                        targetNumber = parseInt(text.replace('+', ''));
                        suffix = '+';
                    } else if (text.includes('/')) {
                        // Handle "24/7" format - animate differently
                        let numbers = text.split('/');
                        if (numbers.length === 2) {
                            let first = parseInt(numbers[0]);
                            let second = parseInt(numbers[1]);
                            // Animate the first part, then add the second
                            animateCounter(counter, 0, first, 1500, `/${second}`);
                            counter.dataset.animated = 'true';
                            counterObserver.unobserve(counter);
                            return;
                        }
                    } else if (text === 'חדש') {
                        // Hebrew "new" - just add a sparkle effect
                        counter.style.animation = 'pulse 2s ease-in-out infinite';
                        counter.dataset.animated = 'true';
                        counterObserver.unobserve(counter);
                        return;
                    } else {
                        targetNumber = parseInt(text) || 0;
                    }
                    
                    // Start animation with random delay for more natural feel
                    const delay = Math.random() * 500;
                    setTimeout(() => {
                        animateCounter(counter, 0, targetNumber, 2500 + (Math.random() * 1000), suffix);
                    }, delay);
                    
                    counter.dataset.animated = 'true';
                    counterObserver.unobserve(counter);
                }
            });
        }, {
            threshold: 0.7, // Trigger when 70% visible for better timing
            rootMargin: '-20px'
        });
        
        // Observe all stat numbers with better targeting
        document.querySelectorAll('.stat-number, .counter').forEach(counter => {
            counterObserver.observe(counter);
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
    setupAnimatedCounters(); // Add counter animations
    
    // Set initial language state properly
    updateAllContent();
    
    // Update header content on load
    const t = translations[currentLanguage];
    const logoText = document.querySelector('.logo-text h1');
    const tagline = document.querySelector('.tagline');
    if (logoText) logoText.textContent = t.yeshiva_name;
    if (tagline) tagline.textContent = t.tagline;
    
    // Navigation links on load - Hebrew order
    const initialNavLinks = document.querySelectorAll('.nav-link');
    if (initialNavLinks.length >= 8) {
        initialNavLinks[7].textContent = t.home;
        initialNavLinks[6].textContent = t.message;
        initialNavLinks[5].textContent = t.story;
        initialNavLinks[4].textContent = t.projects;
        initialNavLinks[3].textContent = t.about;
        initialNavLinks[2].textContent = t.community;
        initialNavLinks[1].textContent = t.gallery;
        initialNavLinks[0].textContent = t.contact;
    }
    
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

// Project Modal Functions (outside DOMContentLoaded for global access)
function openProjectDetails(projectType) {
    const modal = document.getElementById(projectType + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeProjectModal(projectType) {
    const modal = document.getElementById(projectType + 'Modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('project-modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = '';
    }
}
