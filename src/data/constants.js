import paloAltoCybersecurityCertificate from "../assets/certificates/palo-alto-cybersecurity.png";
import ciscoPythonEssentialsCertificate from "../assets/certificates/cisco-python-essentials.jpg";
import awsDataEngineeringCertificate from "../assets/certificates/aws-data-engineering.jpg";
import excelrPromptEngineeringCertificate from "../assets/certificates/excelr-prompt-engineering.jpg";
import awsCloudCertificate from "../assets/certificates/aws-cloud.jpg";
import awsDevopsCertificate from "../assets/certificates/aws-devops.jpg";
import googleAndroidDevelopmentCertificate from "../assets/certificates/google-android-development.png";
import chatgptGenerativeAiCertificate from "../assets/certificates/chatgpt-generative-ai.jpg";
import googleAiMlCertificate from "../assets/certificates/google-ai-ml.png";
import jpMorganAgileCertificate from "../assets/certificates/jp-morgan-agile.jpg";
import microchipEmbeddedSystemsCertificate from "../assets/certificates/microchip-embedded-systems.jpg";
import facebookLogo from "../assets/social/facebook-logo.svg";
import xLogo from "../assets/social/x-logo.png";
import linkedinLogo from "../assets/social/linkedin-logo.svg";
import instaLogo from "../assets/social/instagram-logo.svg";
import githubLogo from "../assets/social/github-logo.svg";
import greenkoImage from "../assets/experience/greenko.jpeg";
import accufyImage from "../assets/experience/accufy.png";
import scetImage from "../assets/education/scet.png";
import smvmImage from "../assets/education/smvm.png";
import montessoriImage from "../assets/education/montessori.jpg";
import socialAppImage from "../assets/projects/social-app.png";
import ppeDetectionImage from "../assets/projects/ppe-detection.png";
import objectTrackingImage from "../assets/projects/object-tracking.png";
import qrAttendanceImage from "../assets/projects/qr-attendance.png";
import documentQaImage from "../assets/projects/document-qa.webp";
import bigFishImage from "../assets/projects/freelance/big-fish.webp";
import shakeCrazyImage from "../assets/projects/freelance/shake-crazy.webp";
import mbncImage from "../assets/projects/freelance/mbnc.webp";

export const Bio = {
  name: "Chiru Chaitanya",
  roles: [
    "Software Developer",
    "Programmer",
    "Python FullStack Dev",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/chiruchaitanya77",
  resume:
    "https://drive.google.com/file/d/1e59rmlbdSwbTa3H85J6WrVeZ8LSYSrCO/view",
  linkedin: "https://www.linkedin.com/in/chiru-chaitanya/",
  x: "https://x.com/chiru_rkst_7?s=11",
  insta: "https://www.instagram.com/chiru_rkst_7/",
  facebook: "https://www.facebook.com/chiru.chaitanya.96/",
};

export const socialIcons = {
  Facebook: facebookLogo,
  X: xLogo,
  LinkedIn: linkedinLogo,
  Instagram: instaLogo,
  GitHub: githubLogo,
};

export const socialLinks = [
  { platform: "Facebook", href: Bio.facebook },
  { platform: "X", href: Bio.x },
  { platform: "LinkedIn", href: Bio.linkedin },
  { platform: "Instagram", href: Bio.insta },
  { platform: "GitHub", href: Bio.github },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React Js", image: "skills/react.svg" },
      { name: "Redux", image: "skills/redux.svg" },
      { name: "Next Js", image: "skills/nextjs-icon.svg" },
      { name: "HTML5", image: "skills/html-5.svg" },
      { name: "CSS3", image: "skills/css-3-icon.svg" },
      { name: "Tailwind CSS", image: "skills/tailwind-icon.svg" },
      { name: "JavaScript", image: "skills/javascript.svg" },
      { name: "Bootstrap", image: "skills/bootstrap.svg" },
      { name: "Material UI", image: "skills/material-ui.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", image: "skills/nodejs-icon.svg" },
      { name: "Express Js", image: "skills/express.svg" },
      { name: "Flask", image: "skills/flask.svg" },
      { name: "HyGraph", image: "skills/hygraph.png" },
      { name: "Python", image: "skills/python.svg" },
      { name: "Django", image: "skills/django-icon.svg" },
      { name: "MySQL", image: "skills/mysql-icon.svg" },
      { name: "Postgresql", image: "skills/postgresql.svg" },
      { name: "MongoDB", image: "skills/mongodb-icon.svg" },
      { name: "Firebase", image: "skills/firebase-icon.svg" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "AWS", image: "skills/aws.svg" },
      { name: "Google Cloud", image: "skills/google-cloud.svg" },
      { name: "Docker", image: "skills/docker-icon.svg" },
      { name: "Jenkins", image: "skills/jenkins.svg" },
      { name: "Nginx", image: "skills/nginx.svg" },
      // { name: "Grafana", image: "skills/grafana.svg" },
      // { name: "Kubernetes", image: "skills/kubernetes.svg" },
      // { name: "Prometheus", image: "skills/prometheus.svg" },
    ],
  },
  {
    title: "Android",
    skills: [
      { name: "Java", image: "skills/java.svg" },
      { name: "FlutterFlow", image: "skills/flutterflow.png" },
      { name: "Android Studio", image: "skills/androidstudio.svg" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", image: "skills/python.svg" },
      { name: "TensorFlow", image: "skills/tensorflow.svg" },
      { name: "Keras", image: "skills/keras.svg" },
      { name: "Jupyter", image: "skills/jupyter.svg" },
      { name: "PyTorch", image: "skills/pytorch-icon.svg" },
      { name: "Google Colab", image: "skills/google-colab-icon.svg" },
      { name: "Scikit Learn", image: "skills/scikitlearn.svg" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: "skills/git-icon.svg" },
      { name: "GitHub", image: "skills/github-icon.svg" },
      { name: "Netlify", image: "skills/netlify-icon.svg" },
      { name: "Vercel", image: "skills/vercel-icon.svg" },
      { name: "VS Code", image: "skills/visual-studio-code.svg" },
      { name: "Postman", image: "skills/postman-icon.svg" },
      { name: "PowerBI", image: "skills/powerbi.png" },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: greenkoImage,
      role: "SAP MM Operations and Management Consultant",
      company: "Greenko Group",
      date: "Sep 2021 – Apr 2022",
      desc: "Maintained and operated Wind Energy Converter systems ensuring continuous uptime. Streamlined SAP logistics and financial operations by interfacing SAP systems via ALE/IDocs. Developed custom SAP workflows and RF enhancements for real-time material tracking, automated purchase requisition notifications, and streamlined procurement processes, improving efficiency across plant operations.",
      skills: ["SAP MM", "WM", "ALE/IDocs", "SAP Workflow", "Custom Transaction Development", "Enhancement Framework", "RF Framework"],
      doc: ""
    },
    {
      id: 1,
      img: accufyImage,
      role: "Python Full Stack Web Developer",
      company: "Accufy, Hyderabad, India",
      date: "Apr 2025 – Present",
      desc: "Developed and maintained full-stack financial web applications like ITR1, INVGPT, and Document Processors. Enhanced data automation using AI to process financial documents into JSON and CSV formats. Built frontends with React Vite, Tailwind, and integrated secure backends using FastAPI and Postgres with ORM. Implemented Razorpay SSO payments, ERI API integrations, and AI-powered tax optimization models. Deployed scalable services on AWS EC2 using Docker.",
      skills: ["Python", "FastAPI", "ReactJS", "TailwindCSS", "SQLAlchemy", "PostgreSQL", "AWS", "Docker", "Razorpay API", "REST API"],
      doc: ""
    }
];

export const education = [
  {
    id: 0,
    img: scetImage,
    school: "Swarnandhra College of Engineering and Technology, Narsapur",
    date: "Oct 2022 - Sep 2025",
    grade: "8.09 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Swarnandhra College of Engineering and Technology, Narsapur. I have completed 7 semesters and have a CGPA of 8.09. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: smvmImage,
    school: "Sree Mullapudi Venkataraya Memorial Polytechnic, Tanuku",
    date: "Apr 2017 - Apr 2020",
    grade: "71.94%",
    desc: "I completed my Diploma at Sree Mullapudi Venkataraya Memorial Polytechnic, Tanuku, where I studied Electrical and Electronics Engineering.",
    degree: "ISC(Diploma), Electrical and Electronics",
  },
  {
    id: 2,
    img: montessoriImage,
    school: "Montessori School, Tanuku",
    date: "Apr 2016 - Apr 2017",
    grade: "9.7 GPA",
    desc: "I completed my class 10 education at Montessori School, Tanuku, where I studied Science with Computer Application.",
    degree: "ICSC(X), Science with Computer",
  },
];

export const projects = [
  {
    "id": 1,
    title: "MERN Stack Social App",
    implementation: "The app handles the feed and live conversations differently. Posts remain available when someone returns to the feed, while Socket.io delivers new chat messages during a conversation. Firebase handles uploaded images separately from the posts that reference them.",
    highlights: [
      "A member can create a profile, find friends, and start a conversation from the same account they use to post.",
      "The feed brings together text, photos, and videos. A member can move between browsing other people’s posts and publishing their own.",
      "The React interface includes light and dark themes, with a Netlify frontend that connects to the Express backend on Vercel.",
    ],
    date: "Mar 2025",
    description: "Developed a feature-rich social networking web application using the MERN stack, enabling users to connect and engage seamlessly. Users can register and log in securely, explore posts from all users, and manage their own profile details. The platform supports real-time chatting using Socket.io, friend management, and interactive post creation with text, images, or videos. The UI is built using Material UI, offering a responsive and visually appealing experience, with a theme toggle for light and dark modes. Firebase is integrated for image storage, ensuring fast and scalable media handling. Deployed the backend on Vercel and the frontend on Netlify, optimizing performance and user experience.",
    image: socialAppImage,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Redux", "Firebase", "MUI"],
    category: "web app",
    github: "https://github.com/chiruchaitanya77/SocialApp",
    webapp: "https://socialappbychiru.netlify.app/"
  },
  {
    id: 2,
    title: "PPE Compliance Detection System",
    implementation: "I connected a YOLOv8 detector to a Django dashboard so a reviewer can use the same detection workflow on a recorded incident or a live camera feed. The model distinguishes specific missing equipment, which lets the application alert the reviewer to the type of violation.",
    highlights: [
      "An operator can upload a video for review or select a connected camera for live monitoring.",
      "The detector checks frames for missing helmets, safety vests, and masks. A sound alert flags these detections while the footage is being processed.",
      "The dashboard includes training graphs and CSV results for reviewing how the detector performed during training.",
    ],
    date: "Mar 2025",
    description: "Developed a DeepLearning based PPE Compliance Detection System uses YOLOv8 to detect helmets, vests, gloves, and shoes in real-time from CCTV footage, ensuring workplace safety. Built using Python Django and HTML/CSS, JS, it alerts managers of violations and simplifies compliance monitoring.",
    image: ppeDetectionImage,
    tags: ["Python", "Django","YOLOv8", "OpenCV", "Deep Learning", "SQLite3" , "Torchvision", "Jinja2", "Drive API", "Pygame", "Pillow"],
    category: ["machine learning"],
    github: "https://github.com/chiruchaitanya77/PPE_Detection_System",
    webapp: "https://comingsoonpg.netlify.app/"
  },
  {
    id: 3,
    title: "Object Detection and Tracking",
    implementation: "A Flask application connects the browser to a YOLOv9 detector. Images take a single trip through the model. Video takes a different path because each frame needs its own detections before the result can be played back.",
    highlights: [
      "An uploaded image produces an annotated result so the viewer can inspect which objects the model found.",
      "For MP4 uploads, OpenCV reads the frames, draws the model’s boxes and labels, and writes the annotated frames back to video.",
      "The camera view streams annotated JPEG frames to the browser, letting a viewer see detections as the scene changes.",
    ],
    date: "Sep 2024 - Nov 2024",
    description:
        "Developed a web interactive object detection application capable of detecting objects in images and tracking in videos/ webcam, using pre-trained Ultralytics-Yolov9 model, PyTorch, OpenCV, TensorFlow, and flask, and used Django for the project's front end. Achievements: Achieved an accuracy of 95.8% in accurately detecting objects from images/ videos.",
    image:
        objectTrackingImage,
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    // category: "web app",
    category: ["machine learning"],
    github: "https://github.com/chiruchaitanya77/Object_Detection_and_Tracking_Web_App",
    webapp: "https://objectdetectionandtrackingwebapp.onrender.com",
  },
  {
    id: 4,
    title: "Face Recognition",
    implementation: "I used reference photos organized into folders, one per person. The application converts those photos into numerical face encodings, pairs each encoding with its folder label, and stores the result in a pickle file for the next session.",
    highlights: [
      "On startup, the app loads saved encodings when available, avoiding a fresh scan of the reference photos each time.",
      "OpenCV reduces the webcam frames to a quarter of their original width and height before the recognition step.",
      "When a face matches a known encoding, the app scales its coordinates back to the full frame and draws a box with the matching name.",
    ],
    date: "Jan 2021",
    description:
        "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image:
        "https://img.freepik.com/premium-vector/face-recognition-isometric-website-template_53562-9550.jpg",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/chiruchaitanya77/Face_Detection_ML_Python",
    webapp: "https://comingsoonpg.netlify.app/",
  },
  {
    id: 5,
    title: "QR Code-Based Attendance System",
    implementation: "Each attendance entry connects a student’s roll number to a date. That gives the scanner a way to recognize repeat scans and gives administrators a consistent way to reconstruct the class register for a particular day.",
    highlights: [
      "Students register and receive an ID card with an individual QR code that the attendance camera can read.",
      "Before marking a student present, the Django backend checks for an existing entry for that roll number and date.",
      "Administrators can review present and absent lists by date. A Google Sheets integration makes the attendance record available outside the dashboard.",
    ],
    date: "Feb 2025",
    description: "Developed a Django-based attendance system that automates student attendance tracking using QR codes. The system generates unique QR codes for students, which can be scanned via a mobile/web application for real-time attendance marking. It integrates Django for the backend, OpenCV for QR scanning, and a user-friendly web interface for students and administrators.",
    image: qrAttendanceImage,
    tags: ["Python", "Django", "OpenCV", "QR Code", "OAuth" , "Sheets API", "Drive API"],
    category: "web app",
    github: "https://github.com/chiruchaitanya77/QR_Attendance_System",
    webapp: "https://qr-attendance-system-19l7.onrender.com/"
  },
  {
    id: 6,
    title: "AI-Powered Document Question-Answering System",
    implementation: "The system separates preparing a document from answering questions about it. Ingestion builds a reusable index, so a follow-up question can search passages already processed instead of parsing the whole document again.",
    highlights: [
      "The ingestion pipeline reads PDFs, text files, and structured documents, then splits their content into smaller passages while retaining metadata.",
      "Embeddings make it possible to retrieve passages by meaning, even when the question uses different wording from the document.",
      "A prompt builder combines the question with the retrieved text for Gemini. Separate API endpoints support adding documents, querying the collection, and administration.",
    ],
    date: "Apr 2025",
    description: "Built a production-ready AI-driven Document Question-Answering (QA) system capable of ingesting PDFs, text files, and structured documents, converting them into vector embeddings, and answering user queries with high accuracy. Implemented a modular Python architecture with pipelines for document ingestion, intelligent text splitting, metadata extraction, embedding generation, and vector storage. Integrated a custom LLM pipeline using Google Gemini with a prompt-builder engine to deliver context-aware, document-grounded answers. Exposed REST APIs for document ingestion, querying, and admin operations. Utilized SQLAlchemy for database models and sessions, along with robust logging, configuration management, and utilities for reliable deployment. The system enables organizations to transform their documents into a fully interactive and searchable knowledge base.",
    image: documentQaImage,
    tags: ["Python", "LLM", "Gemini API", "OpenAI", "Embeddings", "Vector Store", "NLP", "RAG", "FastAPI", "SQLAlchemy", "Document Processing"],
    category: ["machine learning"],
    github: "",
    webapp: "https://comingsoonpg.netlify.app/"
  }
];

export const freelanceProjects = [
  {
    title: "The Big Fish Collectives",
    implementation: "Applications and casting briefs share a form-validation layer and go into Cloudflare D1. The site saves each enquiry before sending email, so the team still has a record if a notification fails. The dashboard keeps the submitted brief and its status history together for follow-up.",
    sector: "Casting & talent representation",
    description: "I built a website for a Hyderabad talent collective where actors and crew can apply for representation and producers can submit a casting brief.",
    tags: ["React", "TypeScript", "Cloudflare Workers", "D1"],
    highlights: [
      "Actors and crew can send a portfolio or showreel with their application for representation.",
      "A separate brief lets producers describe the role, shoot dates, location, and budget so the collective can shortlist people who fit.",
      "The team can review incoming enquiries in one dashboard and track each from receipt to closure.",
    ],
    image: bigFishImage,
    webapp: "https://big-fish-collective.bigfishcollective.workers.dev/",
  },
  {
    title: "Shake Crazy",
    implementation: "The truck changes location, so the homepage connects its directions button and map to the team’s latest check-in. When coordinates are available the map uses the pin directly, and a written location can also be used for directions. The page shows the truck’s typical hours alongside the map.",
    sector: "Food truck",
    description: "I built a site where customers can find the truck, filter the menu by category or dietary preference, and try their timing in a stopwatch challenge.",
    tags: ["React", "TypeScript", "Express", "GSAP"],
    highlights: [
      "Customers can narrow the menu by food category and vegetarian or non-vegetarian options. Unavailable items stay out of the results.",
      "The truck’s team can update the location and menu from an admin dashboard, so customers can check both before heading out.",
      "A daily game challenges visitors to stop a timer at ten seconds. A winners list records successful attempts.",
    ],
    image: shakeCrazyImage,
    webapp: "https://meek-twilight-96f4de.netlify.app/",
  },
  {
    title: "MBNC Private Limited",
    implementation: "I connected the public quote form to a searchable list for the office. Each submission captures contact details and a written project description alongside the site and budget, giving the team the information it needs for a first conversation. The form validates required fields before sending the request.",
    sector: "Construction & infrastructure",
    description: "I built a project showcase and quote request form so prospective clients can explore the company’s residential, commercial, and industrial work before sharing their own plans.",
    tags: ["Next.js", "TypeScript", "GSAP"],
    highlights: [
      "Visitors can filter the project gallery by residential, commercial, or industrial work and see where each build took place.",
      "The quote form asks for the type of construction and site location, with room to share a budget and preferred timeline.",
      "The office can search incoming quote requests and filter by project type or status when following up with prospective clients.",
    ],
    image: mbncImage,
    webapp: "https://mbnc-396jpyx9s-chirus-projects-3a155289.vercel.app/",
  },
];

export const certificates = [
  {
    id: 9,//big
    title: "CYBER-SECURITY",
    image: paloAltoCybersecurityCertificate,
    duration: 1.5
  },
  {
    id: 1,//small
    title: "PYTHON ESSENTIALS",
    image: ciscoPythonEssentialsCertificate,
    duration: 1.5
  },
  {
    id: 8,//big
    title: "AWS DATA ENGINEERING",
    image: awsDataEngineeringCertificate,
    duration: 1.5
  },
  {
    id: 2,//small
    title: "PROMPT ENGINEERING",
    image: excelrPromptEngineeringCertificate,
    duration: 1
  },
  {
    id: 7,//big
    title: "AWS CLOUD",
    image: awsCloudCertificate,
    duration: 1
  },
  {
    id: 3,//small
    title: "AWS DEVOPS",
    image: awsDevopsCertificate,
    duration: 1.5
  },
  {
    id: 6,//big
    title: "GOOGLE'S ANDROID DEV",
    image: googleAndroidDevelopmentCertificate,
    duration: 1.5
  },
  {
    id: 4,//small
    title: "CHATGPT/GEN AI",
    image: chatgptGenerativeAiCertificate,
    duration: 1
  },
  {
    id: 5,//big
    title: "GOOGLE'S AIML",
    image: googleAiMlCertificate,
    duration: 1
  },
  {
    id: 11,//small
    title: "JP-MORGAN'S AGILE",
    image: jpMorganAgileCertificate,
    duration: 1.5
  },
  {
    id: 10,//big
    title: "EMBEDDED SYSTEM DEV",
    image: microchipEmbeddedSystemsCertificate,
    duration: 1
  },
];

