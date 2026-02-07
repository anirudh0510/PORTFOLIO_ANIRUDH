const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving & DSA",
    desc: "Solving complex algorithmic challenges with data structures and logical thinking to build efficient, scalable solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Project Development Expertise",
    desc: "From planning to deployment — developed real-world projects including a LeetCode Clone, Comic Book App, Football Analysis Tool & Daily Planner.",
  },
  {
    imgPath: "/images/time.png",
    title: "Reliable Delivery & Team Communication",
    desc: "Delivering polished, functional work on time while maintaining clear communication and continuous updates throughout development.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Deep Learning ",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Designed and developed a full-stack LeetCode-style coding platform that allows users to practice DSA problems, write and execute code in the browser, access editorial solutions with video explanations, and track progress.The platform is fully deployed on AWS EC2 and built with scalability, performance, and security in mind.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/11.png",
    title: "LeetCode Project – Full Stack Coding Practice Platform",
    date: "Duration: 6 Months",
    responsibilities: [
      "Developed real-time code execution using Judge0 API with multi-language support (C++, Java, JavaScript).",
      "Implemented secure authentication and authorization using JWT with protected routes.",
      "Built a VS Code–like in-browser code editor using Monaco Editor.",
      "Designed a responsive and modern user interface using React 19, Tailwind CSS, and DaisyUI.",
      "Implemented global state management using Redux Toolkit and React Redux.",
      "Added Redis caching to improve API response times and reduce database load.",
      "Integrated Cloudinary for hosting and streaming editorial videos with optimized media delivery.",
      "Built a role-based Admin Panel to manage coding problems, test cases, constraints, difficulty levels, visibility, and user activity.",
      "Implemented an AI-powered coding assistant using Google Gemini API for problem guidance and debugging.",
      "Designed and developed clean RESTful APIs using Node.js and Express.js.",
      "Deployed and managed the full-stack application on AWS EC2 with production-ready environment variables.",
      "Built the frontend using Vite with JavaScript (ES Modules) for fast development and optimized builds.",
      "Implemented client-side routing and navigation using React Router.",
      "Handled form management and validation using React Hook Form and Zod.",
      "Performed API communication using Axios with proper error handling.",
      "Used MongoDB with Mongoose for efficient data modeling and database operations.",
      "Followed modern development practices using Git, GitHub, and ESLint.",
    ],
  },
  {
    review:
      "demonstrated strong full-stack engineering and system design skills while building a production-ready coding platform. His ability to integrate complex systems like online code execution, caching, and AI assistance showcases a solid problem-solving mindset and real-world development experience.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/2.png",
    title: "Algorithm Visualizer",
    date: "Duration: 1 month",
    responsibilities: [
      "Designed and developed an interactive web-based Algorithm Visualizer to help users understand algorithms through dynamic animations.",
      "Implemented visualizations for Sorting Algorithms including Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, and Quick Sort.",
      "Built Searching Algorithm visualizations for Linear Search and Binary Search with user-defined inputs.",
      "Developed Graph Algorithm visualizations including Dijkstra’s Algorithm, Depth First Search (DFS), and Breadth First Search (BFS).",
      "Implemented dynamic controls for array size and execution speed with real-time visual updates.",
      "Designed and implemented a unique Race Mode to compare multiple algorithms side-by-side.",
      "Displayed real-time execution time and time complexity to help users analyze algorithm performance.",
      "Built a leaderboard system ranking algorithms based on execution speed.",
      "Created separate Race Modes for Sorting, Searching, and Graph algorithms.",
      "Designed a clean and intuitive user interface using React.js and Tailwind CSS.",
      "Implemented smooth animations and transitions using JavaScript and Tailwind CSS transitions.",
      "Managed application state efficiently using React Hooks.",
      "Deployed the application on Vercel for fast, reliable, and scalable access.",
      "Developed the frontend using React.js with modular and reusable components.",
      "Used Tailwind CSS for responsive design and consistent UI styling.",
      "Handled algorithm logic and visual rendering using JavaScript.",
      "Ensured smooth user interaction and performance optimization across different visualizations.",
    ],
  },
  {
    review:
      "The Football Analysis System is an AI/ML-based computer vision project designed to analyze football match footage.It leverages YOLO for real-time object detection and OpenCV for video processing to detect players, track movements, and extract meaningful match statistics with visual feedback.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/3.png",
    title: "Football Analysis System – AI/ML Computer Vision Project",
    date: "Duration: 2 month",
    responsibilities: [
      "Designed and developed an AI/ML-based Football Analysis System to analyze football match footage using computer vision techniques.",
      "Implemented real-time player detection using YOLO (You Only Look Once) for accurate object detection on the football field.",
      "Integrated OpenCV for video processing, frame handling, and annotation of detected players.",
      "Tracked player movements across video frames to analyze positional changes and motion patterns.",
      "Extracted and analyzed match statistics including player positions, movement paths, and distance covered.",
      "Generated annotated video output with bounding boxes and visual overlays for clear analysis.",
      "Utilized Python as the core programming language for building the analysis pipeline.",
      "Used NumPy for efficient numerical computations and data handling.",
      "Visualized statistical insights and results using Matplotlib.",
      "Designed a modular and extensible analysis pipeline to support different match videos.",
      "Handled video input processing and output generation with structured directories.",
      "Ensured compatibility with pre-trained YOLO weights and configuration files.",
      "Implemented command-line execution for flexible video analysis using script parameters.",
      "Optimized frame-by-frame processing for better performance during analysis.",
      "Produced final output videos and statistical reports for match evaluation.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Anirudh has an impressive ability to turn complex ideas into working products. His LeetCode-style platform shows strong full-stack skills, clean architecture, and a deep understanding of DSA concepts.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "What stands out about Anirudh is his consistency and problem-solving mindset. From algorithm visualizations to AI-based football analysis, he approaches every project with clarity and purpose.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Anirudh combines strong frontend skills with solid backend logic. His attention to detail, especially in UI/UX and performance optimization, makes his projects feel production-ready.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Working with Anirudh is smooth and efficient. He communicates clearly, learns fast, and isn’t afraid to dive deep into complex topics like system design, APIs, and algorithm performance.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Anirudh’s projects reflect a strong foundation in Data Structures and Algorithms. His Algorithm Visualizer and Race Mode feature demonstrate creative thinking and a genuine passion for teaching through code.Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Anirudh shows excellent growth as a developer. His ability to integrate technologies like Redis, Judge0, and AI APIs proves his readiness for real-world engineering challenges.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/_anirudh._.chauhan._/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://github.com/anirudh0510",
    imgPath: "/images/fb.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/anirudh-chauhan-a343b12a5/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
