export const profile = {
  name: 'Aryan Singh',
  role: 'Full Stack Developer & AI/ML Engineer',
  tagline: 'Building things that actually matter.',
  location: 'Greater Delhi Area',
  experience: '< 1 Year',
  email: 'aryan.singhh04@gmail.com',
  phone: '+91 84334 19387',
  resume: '/Aryan_Singh_Resume.pdf',
  bio: [
    'Full-Stack Developer and AI/ML Engineer building systems that solve real problems — from cattle classification for the Rashtriya Gokul Mission to mental-health platforms for students. IEEE Code Astraa 2025 finalist; presented to 2,000+ industry stakeholders at UP International Trade Show 2024.',
    'My work has been presented at government missions and industry events, which shaped how I approach every project — build to ship, not just to demo. Currently seeking internship opportunities to build impactful products at scale.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/AryanSinghh07' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thearyansingh07/' },
    { label: 'X / Twitter', href: 'https://x.com/the_aryansingh_' },
  ],
};

export const stats = [
  { value: 6, suffix: '+', label: 'Projects Built' },
  { value: 3, suffix: '', label: 'Hackathons' },
  { value: 2000, suffix: '+', label: 'Trade Show Audience' },
  { value: 5, suffix: '+', label: 'Certifications' },
];

export const skills = [
  {
    name: 'Frontend',
    items: ['React.js', 'Next.js', 'Three.js', 'GSAP', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    items: ['Python', 'Node.js', 'Express.js', 'FastAPI', 'Java', 'C++', 'REST APIs', 'WebSockets'],
  },
  {
    name: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'LangChain', 'OpenCV', 'NLP', 'Computer Vision', 'RAG', 'Model Deployment'],
  },
  {
    name: 'Database & DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'MySQL', 'Git', 'GitHub Actions', 'Nginx', 'MLflow', 'Vercel', 'Render'],
  },
];

// NOTE: set `links.live` / `links.github` to each project's real URLs when available.
export const projects = [
  {
    slug: 'crop-disease-prediction',
    index: '01',
    featured: true,
    title: 'AI Crop Disease Prediction',
    subtitle: 'Computer Vision for Farmers',
    year: '2024',
    description:
      'Detects crop diseases from field images using computer vision. Placed 11th at GU Hackathon 2024, recognised at Smart India Hackathon 2024, and presented to 2,000+ attendees at the UP International Trade Show.',
    features: [
      'Real-time disease detection & prediction from crop images',
      'AI-powered plant care recommendations',
      'Educational media resource for farmers',
      'Finance page to track daily farming expenses',
    ],
    approach:
      'Built a machine learning system using TensorFlow/Keras to identify crop diseases from images. Presented at the UP International Trade Show 2024 to 2,000+ attendees, and recognised at Smart India Hackathon 2024. 11th place at GU Hackathon 2024.',
    role: '6-member university team. My role covered full-stack development with AI/ML, UI/UX, and API integration.',
    case: {
      problem:
        'Farmers lose a huge share of their yield to crop diseases spotted too late — expert diagnosis is slow, costly, and out of reach for most small farms.',
      solution:
        'A computer-vision system that detects diseases from a simple field photo in real time, then recommends treatments and plant-care steps — with finance tracking and learning resources built in for farmers.',
      different:
        'Not just a model demo — a complete farmer-facing product: disease detection, AI care recommendations, educational media, and a daily expense tracker in one place.',
      impact:
        'Presented to 2,000+ attendees at the UP International Trade Show 2024, recognised at Smart India Hackathon 2024, and placed 11th at GU Hackathon 2024.',
    },
    tech: ['Python', 'TensorFlow', 'OpenCV', 'React', 'MySQL'],
    images: ['/projects/id1-1.png', '/projects/id1-2.png'],
    links: {
      github: 'https://github.com/AryanSinghh07/AI-Driven-Crop-Disease-Prediction-and-Management-System',
      live: 'https://agrovisionn.netlify.app/',
    },
  },
  {
    slug: 'cbt-chatbot',
    index: '02',
    featured: true,
    title: 'CBT Chatbot',
    subtitle: 'Mental Health Support for Students',
    year: '2025',
    description:
      '24/7 AI-powered Cognitive Behavioural Therapy chatbot delivering grounding techniques — 5-4-3-2-1, guided breathing, mind-training games. Finalist at Code Astraa Hackathon 2025 (Galgotias × IEEE).',
    features: [
      'Real-time conversation with an AI therapist',
      'Grounding techniques: 5-4-3-2-1, guided breathing',
      'Mind training games & meditation exercises',
      'User-friendly, empathetic interface',
    ],
    approach:
      'Developed for Code Astraa Hackathon 2025 (Galgotias University × IEEE). Uses NLP to simulate CBT sessions and provide grounding techniques to students experiencing late-night anxiety. Focused on creating an empathetic and instantly accessible support system.',
    role: 'Team project — Hackathon finalist. I led full-stack development, NLP integration, and FastAPI endpoints.',
    case: {
      problem:
        'Student anxiety peaks late at night — exactly when counsellors, helplines, and friends are unavailable.',
      solution:
        'A 24/7 AI companion that simulates Cognitive Behavioural Therapy sessions — grounding techniques like 5-4-3-2-1 and guided breathing, plus mind-training games and meditation exercises.',
      different:
        'Built around empathy, not just answers — instant, judgement-free support designed for students at 2AM, using evidence-based CBT techniques instead of generic chatbot replies.',
      impact:
        'Finalist at Code Astraa Hackathon 2025, organised by Galgotias University × IEEE.',
    },
    tech: ['Python', 'FastAPI', 'NLP', 'React', 'Tailwind CSS'],
    images: ['/projects/id2-1.png', '/projects/id2-2.png'],
    links: {
      github: 'https://github.com/AryanSinghh07',
      live: null,
    },
  },
  {
    slug: 'gopalan-ai',
    index: '03',
    featured: true,
    title: 'Cattle Scoring & Breed Selection',
    subtitle: 'Animal Type Classification System',
    year: '2025',
    description:
      'AI classification & scoring system built for the Rashtriya Gokul Mission (SIH 2025). Eliminates human bias and observer fatigue in identifying elite indigenous bovine breeding stock.',
    features: [
      'AI-based animal type classification & scoring',
      'Eliminates human bias and observer fatigue',
      'Standardised scoring of indigenous bovine breeds',
      'Built for Rashtriya Gokul Mission field workers',
    ],
    approach:
      'Built an AI classification and scoring pipeline for Smart India Hackathon 2025 under the Rashtriya Gokul Mission. Computer vision models score indigenous bovine breeding stock consistently, removing observer fatigue from the selection process. Secured 34th place at Galgotias University.',
    role: 'Team project for Smart India Hackathon 2025 — model training and scoring API.',
    case: {
      problem:
        'Identifying elite indigenous bovine breeding stock relies on manual scoring — slow, inconsistent, and distorted by observer fatigue and human bias.',
      solution:
        'An AI classification and scoring pipeline that evaluates animal type traits from images, producing standardised, repeatable scores for field workers.',
      different:
        'Purpose-built for the Rashtriya Gokul Mission — official scoring criteria are encoded directly into the model, removing subjectivity from selection entirely.',
      impact:
        'Built for Smart India Hackathon 2025 — secured 34th place at Galgotias University.',
    },
    tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
    images: [
      '/projects/gopalan_id3.png',
      '/projects/gopalan_id4.png',
      '/projects/gopalan_id1.png',
      '/projects/gopalan_id2.png',
      '/projects/gopalan_id5.png',
      '/projects/gopalan_id6.png',
    ],
    links: {
      github: 'https://github.com/AryanSinghh07',
      live: null,
    },
  },
  {
    slug: 'paws',
    index: '04',
    featured: false,
    title: 'PAWS',
    subtitle: 'Pet Adoption & Welfare System',
    year: '2024',
    description:
      'A digital platform that bridges the gap between animal shelters and adopters — automated shelter workflows, adoption applications, pet health records, and integrated e-commerce for pet care.',
    features: [
      'Responsive interface for browsing and applying for adoptions',
      'Automated workflows for shelters to manage listings and applications',
      'Integrated e-commerce for pet products and services',
      'GitHub-hosted architecture with automated deployment',
    ],
    approach:
      'PAWS bridges the gap between animal shelters and potential pet adopters through a user-friendly, scalable digital platform. Catering to three key groups — adopters, shelters, and admins — it enhances transparency in the adoption process and ensures shelters can efficiently manage animals and applicants.',
    role: 'Solo project exploring a comprehensive ecosystem for pet adoption and care management.',
    case: {
      problem:
        'Shelters juggle listings, applications, and pet records manually, while adopters struggle to find and trust the right pet.',
      solution:
        'One platform for adopters, shelters, and admins — browsing and applications, automated shelter workflows, health records, and integrated pet-care e-commerce.',
      different:
        'Serves all three sides of adoption in a single ecosystem instead of a listings-only site — transparency for adopters, efficiency for shelters, oversight for admins.',
      impact:
        'A complete, deployable adoption ecosystem with automated workflows and e-commerce — designed, built, and shipped solo.',
    },
    tech: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS'],
    images: ['/projects/id5-1.png', '/projects/id5-2.png'],
    links: {
      github: 'https://github.com/AryanSinghh07/Paws',
      live: 'https://thepawss.netlify.app/',
    },
  },
  {
    slug: 'smart-publications-generator',
    index: '05',
    featured: false,
    title: 'Smart Publications Generator',
    subtitle: 'NLP for Academia',
    year: '2024',
    description:
      'NLP tool for faculty to automatically generate standardised academic publication summaries and one-click citation details for CVs, portfolios, and grant applications.',
    features: [
      'Summarise publications in a concise, standardised format',
      'Auto-generate complete citation details with one click',
      'Highlight research impact and contributions',
      'Build polished profiles for CVs and institutional websites',
    ],
    approach:
      'Utilises NLP models to extract key information from academic papers and generate summaries and citations. The frontend allows upload or manual input, while the backend handles processing and summary generation using Python NLP pipelines.',
    role: '2-member university project. I handled backend development, NLP model integration, and API design.',
    case: {
      problem:
        'Faculty waste hours manually formatting publication summaries and citation details for CVs, portfolios, and grant applications.',
      solution:
        'An NLP pipeline that extracts key information from academic papers and generates standardised summaries and complete citations in one click.',
      different:
        'Outputs are standardised and institution-ready — consistent formats for CVs, profiles, and grant paperwork, not raw AI text that needs rewriting.',
      impact:
        'Cuts publication-profile preparation from hours to minutes for faculty members.',
    },
    tech: ['Python', 'NLP', 'React', 'Node.js'],
    images: ['/projects/id3-1.png', '/projects/id3-2.png'],
    links: {
      github: 'https://github.com/AryanSinghh07/CiteCraft',
      live: 'https://citecraft.netlify.app/',
    },
  },
  {
    slug: 'aapki-meet',
    index: '06',
    featured: false,
    title: 'Aapki Meet',
    subtitle: 'Online Meeting Platform',
    year: '2023',
    description:
      'Modern online meeting platform with AI features — built for business meetings, college classes, and team collaboration. Real-time video via WebRTC with AI-powered summaries.',
    features: [
      'Real-time video conferencing via WebRTC',
      'AI-powered meeting summaries & transcription',
      'Screen sharing and collaboration tools',
      'Integration with popular productivity tools',
    ],
    approach:
      'Built a feature-rich meeting platform using WebRTC for real-time communication, Firebase for authentication and real-time database, and explored AI integration for transcription and summarisation.',
    role: 'Solo project. Explored real-time communication technologies and AI-assisted meeting tools.',
    case: {
      problem:
        "Generic meeting tools aren't built for classes and small teams — and key discussions vanish the moment the call ends.",
      solution:
        'A WebRTC meeting platform with Firebase auth and realtime data — screen sharing, collaboration tools, and AI-powered transcription and meeting summaries.',
      different:
        'Designed for education and business alike — lightweight, browser-based, with AI summaries so no one has to take minutes.',
      impact:
        'A working real-time platform that became my proving ground for WebRTC and AI integration.',
    },
    tech: ['React', 'Firebase', 'WebRTC', 'Node.js'],
    images: ['/projects/id4-1.png', '/projects/id4-2.png'],
    links: {
      github: 'https://github.com/AryanSinghh07',
      live: null,
    },
  },
  {
    slug: 'intellistream',
    index: '07',
    featured: true,
    title: 'IntelliStream',
    subtitle: 'AI-Powered Cognitive Profiling for Stream Selection',
    year: '2026',
    description:
      'Stealth-gamified cognitive profiling platform that predicts academic stream fit for Indian Class 10–11 students through behavioral gameplay analytics — replacing the single high-stakes aptitude test with continuous, naturalistic measurement.',
    features: [
      'Six-phase cognitive taxonomy (~31 dimensions) spanning Speed, Memory, Reasoning, Verbal, Numerical & Executive Function',
      'Stealth-gamified portfolio of 62+ mini-games with anonymised display names, removing evaluative framing',
      'Dual-track behavioral signal capture — global event-listener RT proxy plus a millisecond-precise stimulus/response API',
      'XGBoost prediction engine (~8ms inference, 6.2MB model) with 1-hour result caching and ranked stream probabilities',
    ],
    approach:
      'Built as a three-layer system: a React 18 + TypeScript game assessment layer (Vercel CDN), a Supabase/PostgreSQL behavioral analytics layer that aggregates dual-track reaction-time signals into a cognitive feature vector, and a Python Flask + XGBoost inference server (Render, Gunicorn). Trained on a cognitively-grounded synthetic dataset with 5-fold cross-validation, then validated in a school-based pilot across Grades 8–12, with stable predictions emerging after 8–12 gameplay sessions of 20–35 minutes each.',
    role: 'Co-authored the research paper and led the technical build — full-stack platform, behavioral analytics pipeline, and XGBoost prediction engine — with a 4-member team from Galgotias University.',
    case: {
      problem:
        "Indian students choose a life-defining academic stream at 14–15 based on a single pen-and-paper aptitude test — a one-time, self-report snapshot that can't capture how cognition develops over time or map onto modern career pathways beyond Science, Commerce, and Humanities.",
      solution:
        'A stealth-gamified platform where students play purpose-built cognitive mini-games across 8–12 sessions; behavioral signals — response latency, decision revisions, error recovery, cross-session consistency — are aggregated into a cognitive feature vector and classified by XGBoost into ranked stream probabilities.',
      different:
        "Measures how a student thinks across dozens of naturalistic play sessions instead of what they report in one sitting. Behavioral process metrics proved substantially stronger predictors than raw game scores, validating the core stealth-assessment thesis.",
      impact:
        '89.7% top-1 and 96.1% top-2 accuracy (macro F1 0.88) on evaluation data, with a live deployed platform (62+ games) and a school pilot across Grades 8–12 showing stable predictions after 8–12 sessions.',
    },
    tech: ['React', 'TypeScript', 'Python', 'XGBoost', 'Supabase', 'Flask'],
    images: [
      '/projects/intellistream_id1.png',
      '/projects/intellistream_id2.png',
      '/projects/intellistream_id3.png',
      '/projects/intellistream_id4.png',
    ],
    links: {
      github: 'https://github.com/AryanSinghh07',
      live: 'https://intellistream-v2.vercel.app/',
    },
  },
];

// NOTE: entries still on a single .svg placeholder haven't gotten real photos yet —
// drop them into public/achievements/ and list the paths here (any format is fine).
export const achievements = [
  {
    title: 'Smart India Hackathon 2025',
    category: 'Hackathon',
    description: 'Built Gopalan AI for the Rashtriya Gokul Mission — secured 34th place at Galgotias University.',
    images: ['/achievements/sih-2025-certificate.png', '/achievements/sih-2025-team.png'],
  },
  {
    title: 'Code Astraa Hackathon 2025',
    category: 'Finalist',
    description: 'Finalist with the CBT mental-health chatbot, organised by Galgotias University and IEEE.',
    images: ['/achievements/code-astraa-2025.svg'],
  },
  {
    title: 'UP International Trade Show 2024',
    category: 'Presentation',
    description: 'Presented the Crop Disease Detection System to 2,000+ attendees at a government industry event.',
    images: [
      '/achievements/up-trade-show-2024-1.jpg',
      '/achievements/up-trade-show-2024-2.jpg',
      '/achievements/up-trade-show-2024-3.jpg',
    ],
  },
  {
    title: 'Smart India Hackathon 2024',
    category: 'Hackathon',
    description: 'Secured 11th place at Galgotias University for the AI-powered Crop Disease Detection System.',
    images: [
      '/achievements/sih-2024-certificate.jpg',
      '/achievements/sih-2024-team.jpg',
      '/achievements/sih-2024-cover.jpg',
    ],
  },
  {
    title: 'Open Source Contributor',
    category: 'Open Source',
    description: 'Active contributor to open-source projects on GitHub, focused on web tools and automation.',
    images: ['/achievements/open-source.svg'],
  },
];

export const education = [
  {
    degree: 'BCA — AI & ML Specialization',
    institution: 'Galgotias University',
    period: '2023 — 2026',
    note: 'Industry-oriented program focused on software development and AI/ML.',
  },
  {
    degree: 'High School',
    institution: 'Dr. A.K. Public School',
    period: '2019 — 2021',
    note: 'Completed with distinction in Computer Science.',
  },
];

export const certifications = [
  'AWS Academy Graduate — Cloud Foundations',
  'Cisco CCNA Cyber Ops',
  'Machine Learning with Python',
  'Web Development',
  'AI for Beginners',
];
