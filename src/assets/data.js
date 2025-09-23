import MyLogo from "./images/me.jpg";
import Chatbot from "./images/chatbot.png";
import Website from "./images/website.png";
import AIKYAM from "./images/aikyam.png";
import VSManage from "./images/vsmanage.png";
import Penguin from "./images/penguin.png";
import WARespond from "./images/waresponder.png";
import VS2018 from "./images/vs2018.png";
import Sathchalein from "./images/sathchalein.png";
import KYC from "./images/kyc.png";

export const personalInfo = {
  name: "Kuldip Patel",
  bio: "Passionate developer with expertise in modern technologies. Building innovative solutions and creating engaging user experiences.",
  profileImage: MyLogo,
  resume: "/Resume.pdf",
  taglines: [
    'Enthusiasm for LLMs',
    'Full Stack Developer',
    '❤️ Programming and Reverse engineering'
  ],
  socialLinks: {
    email: "patel.kuldip91@gmail.com",
    github: "https://github.com/kp7742",
    linkedin: "https://www.linkedin.com/in/kp7742",
    instagram: "https://www.instagram.com/iamkuldippatel",
    twitter: "https://twitter.com/kexecv",
    medium: "https://medium.com/@imkuldip",
    huggingface: "https://huggingface.co/kp7742",
    youtube: "https://www.youtube.com/c/KuldipPatel",
  },
  skills: {
    langs: [
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Golang",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
      },
      {
        name: "Kotlin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
    ],
    technologies: [
      {
        name: "Android",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        name: "JQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
    ],
    tools: [
      {
        name: "VSCode",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Visual Studio",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      },
      {
        name: "Github",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Jupyter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "Android Studio",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  },
  experiences: [
    {
      date: "Jan 2023 - Present",
      title: "Freelance Developer",
      subtitle: "Gujarat, India",
      description: "Working on intresting projects",
    },
    {
      date: "Jan 2022 - Jan 2023",
      title: "Master of Science in Data Analytics",
      subtitle: "SJSU, CA, USA",
      description: "Database Systems for Analytics, Big Data Tech and App, Machine Learning",
    },
    {
      date: "May 2019 - Jul 2019",
      title: "Software Trainee Intern",
      subtitle: "D-Link India Limited, Mumbai, India",
      description: "Made a Chatbot platform to provide assistance to D-Link resellers",
    },
    {
      date: "Jan 2019 - Aug 2020",
      title: "Developer Student Club Community Lead of DSC RNGPIT",
      subtitle: "RNGPIT, Gujarat, India",
      description: "Served as a lead of the Club, Helped peers to learn and connect, Organized various workshops and seminars to spread knowledge",
    },
    {
      date: "Sep 2016 - Aug 2020",
      title: "Bachelor of Engineering in Computer Engineering",
      subtitle: "RNGPIT(GTU), Gujarat, India",
      description: "Operating Systems, Database Management Systems, Computer Architecture, Computer Networks, Object-Oriented Design, Algorithms and Data Structures",
    }
  ],
};

export const blogPosts = [
  {
    title: 'Mastering React Hooks',
    slug: 'mastering-react-hooks',
    excerpt: 'A deep dive into React Hooks, their use cases, and best practices for modern React development.',
    date: 'Jun 12, 2025',
    readTime: '12 min read',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    title: 'Restaurant Risk Prediction using ML',
    slug: 'restaurant-risk-prediction-using-ml',
    excerpt: 'Exploring the use of Machine Learning to predict the risk of a restaurant.', 
    date: 'Dec 1, 2022',
    readTime: '7 min read',
    tags: ['Machine Learning', 'Data Science', 'Python'],
    link: 'https://medium.com/@imkuldip/restaurant-risk-prediction-using-ml-9f6308cbf18d'
  },
  {
    title: 'BountyCon 2020 CTF — Anti What',
    slug: 'bountycon-2020-ctf-anti-what',
    excerpt: 'A writeup of CTF challenge Anti What from BountyCon 2020.',
    date: 'Feb 15, 2020',
    readTime: '4 min read',
    tags: ['CTF', 'Bug Bounty', 'InfoSec'],
    link: 'https://medium.com/bugbountywriteup/bountycon-2020-ctf-anti-what-5961293ab934'
  },
];

export const projects = [
  {
    title: "My portfolio website",
    description: "⚡ My portfolio, I built using React, Vite and TailwindCSS",
    image: Website,
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
    ],
    links: {
      visit: "https://kuldippatel.dev/",
      github: "https://github.com/kp7742/My-Portfolio",
    }
  },
  {
    title: "IDA Actions",
    description: "A workflow for Github Actions to automatically analyse binaries using IDA",
    image: "https://placehold.co/600x400/000000/FFF?text=IDA+Actions",
    technologies: [
      "Bash",
      "Python",
      "Github Actions"
    ],
    links: {
      github: "https://github.com/kp7742/ida-actions",
    }
  },
  {
    title: "Tiktok Scrapper Challenge",
    description: "Solution of a coding challenge to scrap data from Tiktok",
    image: "https://placehold.co/600x400/000000/FFF?text=Tiktok+Scrapper+Challenge",
    technologies: [
      "Python",
    ],
    links: {
      github: "https://github.com/kp7742/Tiktok-Scrapper-Challenge",
    }
  },
  {
    title: "RootOverlay",
    description: "Draw on Canvas based Overlay using libSU's RootService",
    image: "https://placehold.co/600x400/000000/FFF?text=RootOverlay",
    technologies: [
      "Java",
      "Android",
    ],
    links: {
      github: "https://github.com/kp7742/RootOverlay",
    }
  },
  {
    title: "LeetCode",
    description: "My LeetCode Problems & Solution List",
    image: "https://placehold.co/600x400/000000/FFF?text=LeetCode",
    technologies: [
      "Python",
      "Java",
    ],
    links: {
      github: "https://github.com/kp7742/LeetCode",
    }
  },
  {
    title: "Corona Symptoms Detection Chatbot",
    description: "DATA-228 Big Data Project to implement a chatbot to predict covid-19 symptoms using pretrained model",
    image: Chatbot,
    technologies: [
      "PySpark",
      "Socket.io",
      "Flask"
    ],
    links: {
      github: "https://github.com/kp7742/CSDC",
    }
  },
  {
    title: "Touch Simulation",
    description: "Touch Simulation is program made in Golang to simulate Touch Input in a android devices using Virtual Display with UInput interface of kernel",
    image: "https://placehold.co/600x400/000000/FFF?text=Touch+Simulation",
    technologies: [
      "Golang",
      "Android",
    ],
    links: {
      github: "https://github.com/kp7742/TouchSimulation",
    }
  },
  {
    title: "UE4Dumper",
    description: "UE4Dumper is a Command line Utility to Dump Lib libUE4.so from Memory of Game Process and Generate Structure SDK",
    image: "https://placehold.co/600x400/000000/FFF?text=UE4Dumper",
    technologies: [
      "C++",
      "Android",
    ],
    links: {
      github: "https://github.com/kp7742/UE4Dumper",
    }
  },
  {
    title: "MemDumper",
    description: "MemDumper is a Command line Utility to Dump Memory Segment From Process Memory and Rebuild Linux Binaries",
    image: "https://placehold.co/600x400/000000/FFF?text=MemDumper",
    technologies: [
      "C++",
      "Android",
    ],
    links: {
      github: "https://github.com/kp7742/MemDumper",
    }
  },
  {
    title: "Chatbot as a Platform",
    description: "My Senior Year Project in RNGPIT, CaaS is a Chatbot Platform to Setup text based Customisable Chatbot with Ease",
    image: "https://placehold.co/600x400/000000/FFF?text=Chatbot+as+a+Platform",
    technologies: [
      "Flask",
      "Django",
      "Socket.io",
    ],
    links: {
      github: "https://github.com/ConvAI/CaaS-Backend",
    }
  },
  {
    title: "EscBlocker",
    description: "EscBlocker is a Web Extension to Detect, Report and Block Unauthorised Browser Activity in Events like Online Exams",
    image: "https://placehold.co/600x400/000000/FFF?text=EscBlocker",
    technologies: [
      "JavaScript",
    ],
    links: {
      github: "https://github.com/kp7742/EscBlocker",
    }
  },
  {
    title: "AIKYAM(ऐक्यम्)",
    description: "AIKYAM is Blockchain based Unique Person Identification System. It provides decentralized way to securely store data. Made During DotSlash 3.0 Hackathon",
    image: AIKYAM,
    technologies: [
      "React",
      "Solidity",
      "Truffle",
    ],
    links: {
      github: "https://github.com/kp7742/AIKYAM",
    }
  },
  {
    title: "VSBackend - Visvesmruti 2019",
    description: "VSManage app Backend, Admin Panel and Management System for Visvesmruti 2K19 By DSC RNGPIT",
    image: "https://placehold.co/600x400/000000/FFF?text=VSBackend",
    technologies: [
      "PHP",
      "JavaScript",
    ],
    links: {
      github: "https://github.com/kp7742/Visvesmruti2019-VSBackend",
    }
  },
  {
    title: "VSManage - Visvesmruti 2019",
    description: "VSManage Android App and Backend System for Management of Visvesmruti 2K19 By DSC RNGPIT",
    image: VSManage,
    technologies: [
      "Kotlin",
      "Android",
      "OkHTTP3",
    ],
    links: {
      github: "https://github.com/kp7742/Visvesmruti2019-VSManage",
      playstore: "https://play.google.com/store/apps/details?id=tech.visvesmruti.vsmanage",
    }
  },
  {
    title: "Token Based Authentication",
    description: "Token Based Authentication System is Secure Alternative Implementation of JWT(JSON Web Token).",
    image: "https://placehold.co/600x400/000000/FFF?text=TOBA",
    technologies: [
      "Java",
      "Android",
      "PHP",
    ],
    links: {
      github: "https://github.com/kp7742/TOBA",
    }
  },
  {
    title: "Penguin Framework",
    description: "Custom Xposed Framework Implementation Made for Android 9.0, Allow Runtime Code Injection",
    image: Penguin,
    technologies: [
      "Android",
    ],
    links: {
      github: "https://github.com/Penguin-Xposed/Penguin",
    }
  },
  {
    title: "WAAutoResponder",
    description: "WAAutoResponder is WhatsApp Chat Auto Reply Bot made for Automation with WhatsApp",
    image: WARespond,
    technologies: [
      "Android",
      "Auto Reply"
    ],
    links: {
      github: "https://github.com/kp7742/WAAutoResponder",
    }
  },
  {
    title: "Visvesmruti 2018 App",
    description: "Android Application for Visvesmruti 2018 held in RNGPIT College of Engineering",
    image: VS2018,
    technologies: [
      "Android",
      "Glide",
      "OkHttp"
    ],
    links: {
      github: "https://github.com/kp7742/Visvesmruti2018-App",
      playstore: "https://play.google.com/store/apps/details?id=fetr.ac.in.visvesmruti2018",
    }
  },
  {
    title: "SathChalein",
    description: "SathChalein is an Android App that act as medium between local guide and travelers also allowing both parties to interact. Made During DotSlash Hackathon",
    image: Sathchalein,
    technologies: [
      "Android",
    ],
    links: {
      github: "https://github.com/kp7742/SathChalein",
    }
  },
  {
    title: "GRIEVANCE REDRESSAL SYSTEM",
    description: "GRIEVANCE REDRESSAL SYSTEM for College Campus",
    image: "https://placehold.co/600x400/000000/FFF?text=GRIEVANCE+REDRESSAL+SYSTEM",
    technologies: [
      "PHP",
    ],
    links: {
      github: "https://github.com/kp7742/GRS",
    }
  },
  {
    title: "Know Your Campus",
    description: "Know Your Campus is an Android App to Know About Your College and Download Stuffs like Timetables, Assignments etc. Directly. Made During DotSlash Hackathon",
    image: KYC,
    technologies: [
      "Android",
    ],
    links: {
      github: "https://github.com/kp7742/KnowYourCampus",
    }
  },
];