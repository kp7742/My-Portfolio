import MyLogo from "./images/me.jpg";
import Profile from "./images/profile.png";
import Chatbot from "./images/chatbot.png";
import Website from "./images/website.png";
import AIKYAM from "./images/aikyam.png";
import VSManage from "./images/vsmanage.png";
import Penguin from "./images/penguin.png";
import WARespond from "./images/waresponder.png";
import VS2018 from "./images/vs2018.png";
import Sathchalein from "./images/sathchalein.png";
import KYC from "./images/kyc.png";
import Resume from "./Resume.pdf";

const data = {
  name: "Kuldip Patel",
  texts: [
    'Student & Full Stack Developer',
    'Pursuing MS in Data Analytics',
    '❤️ Programming and Reverse engineering'
  ],
  logo: {
    src: MyLogo,
    alt: "My Logo"
  },
  profile: {
    src: Profile,
    alt: "Kuldip Patel"
  },
  resume: Resume,
  description: "MS Data Analytics Student @ SJSU | Ex Lead of Developer Students Club RNGPIT | Full Stack Developer | Cyber Security Enthusiast",
  social: {
    email: "contact@kuldippatel.dev",
    github: "https://github.com/kp7742",
    linkedin: "https://www.linkedin.com/in/kp7742",
    instagram: "https://www.instagram.com/iamkuldippatel",
    twitter: "https://twitter.com/kexecv",
    playstore: "https://play.google.com/store/apps/developer?id=Kuldip+Patel",
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
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
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
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JQuery",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "NodeJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        name: "Apache",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
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
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Github",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Composer",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
      },
      {
        name: "NPM",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Jupyter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "Kaggle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg",
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
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "DigitalOcean",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  },
  experiences: [
    {
      date: "Jan 2023 - Preset",
      title: "Master of Science in Data Analytics",
      subtitle: "SJSU, CA, USA",
      description: "Database Systems for Analytics, Big Data Tech and App, Machine Learning",
      isworkcard: false,
    },
    {
      date: "Sep 2019",
      title: "Lead Developer of Visvesmruti 2019",
      subtitle: "RNGPIT, Gujarat, India",
      description: "Developed a Techfest management system including an Android App to handle participation and a Web Interface to Monitor stats",
      isworkcard: true,
    },
    {
      date: "May 2019 - Jul 2019",
      title: "Software Trainee Intern",
      subtitle: "D-Link India Limited, Mumbai, India",
      description: "Made a Chatbot platform to provide assistance to D-Link resellers",
      isworkcard: true,
    },
    {
      date: "Jan 2019 - Aug 2020",
      title: "Developer Student Club Community Lead of DSC RNGPIT",
      subtitle: "RNGPIT, Gujarat, India",
      description: "Served as lead of the Club, Helped peers to learn and connect, Organised various workshops and seminar to spread knowledge",
      isworkcard: true,
    },
    {
      date: "Sep 2018",
      title: "Lead Android Developer of Visvesmruti 2018",
      subtitle: "RNGPIT, Gujarat, India",
      description: "Developed an android app to showcase Techfest information to the visiters and participants",
      isworkcard: true,
    },
    {
      date: "Sep 2016 - Aug 2020",
      title: "Bachelor of Engineering in Computer Engineering",
      subtitle: "RNGPIT(GTU), Gujarat, India",
      description: "Operating Systems, Database Management Systems, Computer Architecture, Computer Networks, Object-Oriented Design, Algorithms and Data Structures",
      isworkcard: false,
    }
  ],
  projects: [
    {
      name: "My portfolio website",
      description: "⚡ My portfolio, I built using React and TailwindCSS",
      image: Website,
      technologies: [
        "React",
        "TailwindCSS",
      ],
      link: {
        visit: "https://kuldippatel.dev/",
        github: "https://github.com/kp7742/My-Portfolio",
      }
    },
    {
      name: "Corona Symptoms Detection Chatbot",
      description: "DATA-228 Big Data Project to implement a chatbot to predict covid-19 symptoms using pretrained model",
      image: Chatbot,
      technologies: [
        "PySpark",
        "Socket.io",
        "Flask"
      ],
      link: {
        github: "https://github.com/kp7742/CSDC",
      }
    },
    {
      name: "Touch Simulation",
      description: "Touch Simulation is program made in Golang to simulate Touch Input in android devices using Virtual Display with UInput interface of kernel",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "Golang",
        "Android",
      ],
      link: {
        github: "https://github.com/kp7742/TouchSimulation",
      }
    },
    {
      name: "UE4Dumper",
      description: "UE4Dumper is a Command line Utility to Dump Lib libUE4.so from Memory of Game Process and Generate Structure SDK",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "C++",
        "Android",
      ],
      link: {
        github: "https://github.com/kp7742/UE4Dumper",
      }
    },
    {
      name: "MemDumper",
      description: "MemDumper is a Command line Utility to Dump Memory Segment From Process Memory and Rebuild Linux Binaries",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "C++",
        "Android",
      ],
      link: {
        github: "https://github.com/kp7742/MemDumper",
      }
    },
    {
      name: "Chatbot as a Platform",
      description: "My Senior Year Project in RNGPIT, CaaS is a Chatbot Platform to Setup text based Customisable Chatbot with Ease",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "Flask",
        "Django",
        "Socket.io",
      ],
      link: {
        github: "https://github.com/ConvAI/CaaS-Backend",
      }
    },
    {
      name: "EscBlocker",
      description: "EscBlocker is a Web Extension to Detect, Report and Block Unauthorised Browser Activity in Events like Online Exams",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "JavaScript",
      ],
      link: {
        github: "https://github.com/kp7742/EscBlocker",
      }
    },
    {
      name: "AIKYAM(ऐक्यम्)",
      description: "AIKYAM is Blockchain based Unique Person Identification System. It provides decentralized way to securely store data. Made During DotSlash 3.0 Hackathon",
      image: AIKYAM,
      technologies: [
        "React",
        "Solidity",
        "Truffle",
      ],
      link: {
        github: "https://github.com/kp7742/AIKYAM",
      }
    },
    {
      name: "VSBackend - Visvesmruti 2019",
      description: "VSManage app Backend, Admin Panel and Management System for Visvesmruti 2K19 By DSC RNGPIT",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "PHP",
      ],
      link: {
        github: "https://github.com/kp7742/Visvesmruti2019-VSBackend",
      }
    },
    {
      name: "VSManage - Visvesmruti 2019",
      description: "VSManage Android App and Backend System for Management of Visvesmruti 2K19 By DSC RNGPIT",
      image: VSManage,
      technologies: [
        "Kotlin",
        "Android",
        "OkHTTP3",
      ],
      link: {
        github: "https://github.com/kp7742/Visvesmruti2019-VSManage",
        playstore: "https://play.google.com/store/apps/details?id=tech.visvesmruti.vsmanage",
      }
    },
    {
      name: "Token Based Authentication",
      description: "Token Based Authentication System is Secure Alternative Implementation of JWT(JSON Web Token).",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "Java",
        "Android",
        "PHP",
      ],
      link: {
        github: "https://github.com/kp7742/TOBA",
      }
    },
    {
      name: "Penguin Framework",
      description: "Custom Xposed Framework Implementation Made for Android 9.0, Allow Runtime Code Injection",
      image: Penguin,
      technologies: [
        "Android",
      ],
      link: {
        github: "https://github.com/Penguin-Xposed/Penguin",
      }
    },
    {
      name: "WAAutoResponder",
      description: "WAAutoResponder is WhatsApp Chat Auto Reply Bot made for Automation with WhatsApp",
      image: WARespond,
      technologies: [
        "Android",
        "Auto Reply"
      ],
      link: {
        github: "https://github.com/kp7742/WAAutoResponder",
      }
    },
    {
      name: "Visvesmruti 2018 App",
      description: "Android Application for Visvesmruti 2018 held in RNGPIT College of Engineering",
      image: VS2018,
      technologies: [
        "Android",
        "Glide",
        "OkHttp"
      ],
      link: {
        github: "https://github.com/kp7742/Visvesmruti2018-App",
        playstore: "https://play.google.com/store/apps/details?id=fetr.ac.in.visvesmruti2018",
      }
    },
    {
      name: "SathChalein",
      description: "SathChalein is an Android App that act as medium between local guide and travelers also allowing both parties to interact. Made During DotSlash Hackathon",
      image: Sathchalein,
      technologies: [
        "Android",
      ],
      link: {
        github: "https://github.com/kp7742/SathChalein",
      }
    },
    {
      name: "GRIEVANCE REDRESSAL SYSTEM",
      description: "GRIEVANCE REDRESSAL SYSTEM for College Campus",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: [
        "PHP",
      ],
      link: {
        github: "https://github.com/kp7742/GRS",
      }
    },
    {
      name: "Know Your Campus",
      description: "Know Your Campus is an Android App to Know About Your College and Download Stuffs like Timetables, Assignments etc. Directly. Made During DotSlash Hackathon",
      image: KYC,
      technologies: [
        "Android",
      ],
      link: {
        github: "https://github.com/kp7742/KnowYourCampus",
      }
    },
  ]
};

export default data;