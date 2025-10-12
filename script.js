// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Smooth scroll to section with offset for sticky nav
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('header').offsetHeight;
        const sectionTop = section.offsetTop - navHeight - 20; // 20px extra padding

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Initialize Typed.js
var typed = new Typed('#typed-text', {
    strings: [
        'Specializing in Generative AI, LLMs, and end-to-end AI product development.',
        '5+ years of hands-on AI/ML development experience.',
        'Skilled at turning AI innovations into business value.',
        'Leading cross-functional teams in innovative AI projects.',
        'Looking for remote roles in innovative AI environments.'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// PDF Generation
const { jsPDF } = window.jspdf;

document.getElementById('download-pdf').addEventListener('click', () => {
    const doc = new jsPDF();

    // Set font
    doc.setFont('helvetica');

    // Title
    doc.setFontSize(20);
    doc.text('Levente Csibi', 20, 30);
    doc.setFontSize(14);
    doc.text('AI/ML Innovator & Strategic Product Owner', 20, 40);

    // Contact
    doc.setFontSize(12);
    doc.text('Budapest, Hungary | csibi.levente14@gmail.com', 20, 55);
    doc.text('linkedin.com/in/leventecsibi | github.com/leweex95 | medium.com/@leventecsibi', 20, 65);

    // Profile
    doc.setFontSize(14);
    doc.text('Profile', 20, 85);
    doc.setFontSize(10);
    const profileText = 'AI/ML Innovator & Strategic Product Owner specializing in Generative AI, LLMs, and end-to-end AI product development. 5+ years of hands-on AI/ML development experience. Skilled at turning AI innovations into business value and passionate about leading cross-functional international teams. Looking for remote roles in innovative AI environments.';
    const splitProfile = doc.splitTextToSize(profileText, 170);
    doc.text(splitProfile, 20, 95);

    let yPosition = 95 + splitProfile.length * 5 + 10;

    // Experience
    doc.setFontSize(14);
    doc.text('Work Experience', 20, yPosition);
    yPosition += 10;

    const experiences = [
        {
            title: 'AI Product Owner',
            company: 'Continental | Sep 2024 - Present | Hybrid',
            points: [
                'Leading product development for 2 teams totaling 21 engineers, delivering AI models for autonomous parking in rapid iterative cycles and integrating them into hardware for system-level testing.',
                'Defining product vision and product roadmap, prioritizing backlogs, and aligning daily activities based on inputs from customer representatives and internal stakeholders.',
                'Driving AI product strategy, introducing efficiency-focused innovations such as automated release pipelines, automated dataset creation, data quality validation and correction, continuous training, and GPU-optimized, highly parallelized pipelines.',
                'Implementing automated end-to-end testing of hardware functionality and system-level AI performance to ensure reliability and accelerate release cycles.',
                'Overseeing and ensuring software quality, AI safety, and compliance with standards and regulatory frameworks (SOTIF, project life cycle quality gates, ASPICE 4.0, EU AI Act).',
                'Monitoring key product KPIs and metrics to influence strategic decisions, optimize workflows, and deliver measurable business impact.',
                'Supervising quarterly data collection campaigns and labeling activities of a highly geographically dispersed team, including both external contractors and internal vehicle teams across 3 continents.'
            ]
        },
        {
            title: 'Senior MLOps Engineer',
            company: 'Continental | Aug 2023 - Sep 2024 | Hybrid',
            points: [
                'Conducted in-depth analyses of MLOps maturity levels within machine learning projects and devised tailored MLOps strategies and roadmaps aligned with stakeholder objectives.',
                'Delivered proof of concepts to showcase tooling for enhanced automation, identified optimal tools aligned with business requirements, and integrated them into the development workflow of ML projects.',
                'Initiated, launched, and managed a corporation-wide MLOps knowledge center to shape the enterprise\'s MLOps strategy and streamline ML workflows of product lines, thereby enabling them to reach higher MLOps maturity level.',
                'Conducted project management of the annual maintenance period of the corporation\'s on-premises AI cluster, in close collaboration with internal and external stakeholders, DevOps and infrastructure engineering teams, and 300+ end users.',
                'Conducted project management and stakeholder management of tools and services migration from legacy to centralized architectures, affecting 100+ AI developers in various customer facing product departments.',
                'Performed product roadmap planning and regular revisions by leading the quarterly PI planning sessions with the presence of management and developer team.',
                'Initiated internal sessions on regulatory compliance requirements (European Union AI Act) and participated in the corporate-specific establishment of industry standards (e.g., ASPICE 4.0), aligning them with ML/MLOps activities.',
                'Fostered a culture of continuous growth by providing mentorship for MLOps colleagues and trainings for AI developments teams on MLOps practices, tools, and technologies.'
            ]
        },
        {
            title: 'Machine Learning Engineer',
            company: 'EPAM Systems | Sep 2021 - Aug 2023 | Hybrid',
            points: [
                'Worked on the internal, machine learning tool for marketing planning of a leading fashion retailer to optimize their marketing strategy. Focus areas included developing and scheduling ETL pipelines in PySpark and Airflow, developing deep learning models for computer vision, writing data and model monitoring pipelines, and deploying and monitoring model performance.',
                'Participated in MLOps activities connected to the existing machine learning workflows, such as machine learning productionalization, model versioning, CI/CD workflows on Github and Gitlab, model and data drift monitoring, and automatic retraining via Airflow.',
                'Developed auto-OCR solution using the AWS stack and boto, and built solutions for named entity recognition from scratch (CRF, BERT), and using state-of-the-art LLMs with HuggingFace and langchain (GPT, LLaMA, FLAN-T5, BLOOM).',
                'Worked in agile teams and cooperated with business analysts, stakeholders, PO, DS lead, and project manager to identify epics and stories, define success criterias, and estimate timelines for the various features.',
                'Led the company\'s internal machine learning mentoring program for colleagues eager to start their career in data science and machine learning.',
                'Facilitated the onboarding and integration of new employees to the organization as a company buddy, in cooperation with people team leads and HR department.'
            ]
        },
        {
            title: 'Production Team Lead',
            company: 'Innovative Language Learning | Sep 2019 - Oct 2022 | Remote',
            points: [
                'Led and coordinated a geographically dispersed, highly international QA team of 30+ people, overseeing proofreading of written and video content prior to publication.',
                'Planned and optimized weekly workloads, developed efficiency KPIs, and produced performance reports for upper management.',
                'Designed and executed onboarding and knowledge-transfer processes, updated company documentation, and enhanced transparency via biweekly QA/info sessions.'
            ]
        },
        {
            title: 'Machine Learning Engineer',
            company: 'Innovative Language Learning | Oct 2019 - Sep 2021 | Remote',
            points: [
                'Built a unified database of past customer interactions previously scattered across multiple sources, enabling centralized data access.',
                'Developed a semi-automated data labeling pipeline using unsupervised (K-means, DBSCAN) and semi-supervised (self-training classifier, label spreading) approaches.',
                'Designed and deployed AI natural language classifier prototypes to categorize incoming customer requests by department, technicality, linguistic nature, and content sensitivity.',
                'Leveraged AWS machine learning stack (Transcribe, Polly, Translate) to create an automated audio error detection tool.',
                'Implemented continuous model training to ensure AI systems adapt and improve over time.',
                'Impact: These innovations generated >$70k USD annual savings, freed resources for product development, increased content throughput by 30%, and eliminated 95% of manual customer support handling, dramatically improving response speed, quality, and operational efficiency.'
            ]
        }
    ];

    experiences.forEach(exp => {
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
        }
        doc.setFontSize(12);
        doc.text(exp.title, 20, yPosition);
        yPosition += 8;
        doc.setFontSize(10);
        doc.text(exp.company, 20, yPosition);
        yPosition += 8;
        exp.points.forEach(point => {
            const splitPoint = doc.splitTextToSize('• ' + point, 160);
            doc.text(splitPoint, 25, yPosition);
            yPosition += splitPoint.length * 5;
        });
        yPosition += 5;
    });

    // Education
    if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
    }
    doc.setFontSize(14);
    doc.text('Education', 20, yPosition);
    yPosition += 10;

    const educations = [
        {
            degree: 'MScBA Master in Management',
            institution: 'Rotterdam School of Management, Erasmus University | 2018 - 2019 | GPA: 4.0 / 4.0',
            description: 'One of Europe\'s leading business schools, renowned for its international focus and entrepreneurial spirit.',
            skills: 'Strategic thinking, cross-cultural communication, financial analysis, leadership in diverse teams, and innovative problem-solving in global business contexts.',
            extracurricular: 'Erasmus Debating Society: Sharpened public speaking, persuasion, and confidence through competitive debating.'
        },
        {
            degree: 'Mechatronics Engineering BSc',
            institution: 'Budapest University of Technology and Economics | 2014 - 2018 | GPA: 4.0 / 4.0',
            description: '',
            skills: 'Technical expertise in mechanical and electrical systems, project management, interdisciplinary collaboration, analytical thinking, and hands-on engineering problem-solving.',
            extracurricular: 'BME Solar Boat Team: Started as electrical engineer, then PM, leading team to international competitions in Monaco and Kaliningrad. ESTIEM: Broadened management skills through European networking and workshops.'
        }
    ];

    educations.forEach(edu => {
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
        }
        doc.setFontSize(12);
        doc.text(edu.degree, 20, yPosition);
        yPosition += 8;
        doc.setFontSize(10);
        doc.text(edu.institution, 20, yPosition);
        yPosition += 6;
        if (edu.description) {
            doc.text(edu.description, 20, yPosition);
            yPosition += 6;
        }
        doc.text('Key Skills: ' + edu.skills, 20, yPosition);
        yPosition += 6;
        doc.text('Extracurricular: ' + edu.extracurricular, 20, yPosition);
        yPosition += 8;
    });

    // Skills
    yPosition += 10;
    doc.setFontSize(14);
    doc.text('Skills', 20, yPosition);
    yPosition += 10;

    const skills = [
        'Machine Learning', 'Generative AI & LLMs', 'MLOps & LLMOps', 'Natural Language Processing', 'Agile Project Management'
    ];

    skills.forEach(skill => {
        doc.setFontSize(10);
        doc.text('• ' + skill, 25, yPosition);
        yPosition += 6;
    });

    // Languages
    yPosition += 5;
    doc.setFontSize(12);
    doc.text('Languages', 20, yPosition);
    yPosition += 8;

    const languages = [
        'Hungarian (Native)', 'English (Proficient)', 'French (Intermediate)', 'German (Beginner)', 'Russian (Beginner)'
    ];

    languages.forEach(lang => {
        doc.setFontSize(10);
        doc.text('• ' + lang, 25, yPosition);
        yPosition += 6;
    });

    // Save the PDF
    doc.save('Levente_Csibi_Resume.pdf');
});

// Activity Description Toggle
function toggleActivityDescription(descId) {
    const desc = document.getElementById(descId);
    const arrow = desc.previousElementSibling.querySelector('.activity-arrow');
    
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        desc.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

// Skill Description Toggle
function toggleSkillDescription(descId) {
    const desc = document.getElementById(descId);
    const arrow = desc.previousElementSibling.querySelector('.skill-arrow');
    
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        desc.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}