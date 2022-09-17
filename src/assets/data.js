import MyLogo from "./images/logo.gif";
import Profile from "./images/profile.jfif";
import Chatbot from "./images/chatbot.png";
import Website from "./images/website.png";
import AIKYAM from "./images/aikyam.png";
import VSManage from "./images/vsmanage.png";
import Penguin from "./images/penguin.png";
import WARespond from "./images/waresponder.png";
import VS2018 from "./images/vs2018.png";
import KYC from "./images/kyc.png";
import Resume from "./Resume.pdf";

const data = {
  name: "Aayush Chouhan",
  texts: [
    "Student & Android Developer",
    "Pursuing UG in Cyber Secure",
    "Learning Web Development",
    "❤️ Programming and Hacking",
  ],
  logo: {
    src: MyLogo,
    alt: "My Logo",
  },
  profile: {
    src: Profile,
    alt: "Aayush Chouhan",
  },
  resume: Resume,
  description:
    "CSE Cyber Security Student @ OCT Bhopal | Android Developer | Cyber Security Enthusiast",
  social: {
    email: "aayushchouhan24@mail.com",
    github: "https://github.com/aayushchouhan24",
    linkedin: "https://www.linkedin.com/in/aayushchouhan24",
    instagram: "https://www.instagram.com/aayushchouhan_24",
    twitter: "https://twitter.com/aayushchouhan24",
    playstore: "https://play.google.com/store/apps/developer?id=Technl+Aayush",
    youtube: "https://www.youtube.com/channel/UCwDEjX_CUgpZQLTdug-BTRQ",
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
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    technologies: [
      {
        name: "Android",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Gradle",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg",
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
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "PyChram",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
      },
      {
        name: "Burp Suit",
        icon: "https://icon-icons.com/downloadimage.php?id=190319&root=3053/PNG/512/&file=burp_suite_macos_bigsur_icon_190319.png",
      },
      {
        name: "After Effect",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
      },
    ],
  },
  experiences: [
    {
      date: "Jan 2023 - Present",
      title: "Master of Science in Data Analytics",
      subtitle: "SJSU, CA, USA",
      description:
        "Database Systems for Analytics, Big Data Tech and App, Machine Learning",
      isworkcard: false,
    },
    {
      date: "Sep 2019",
      title: "Lead Backend Developer of Visvesmruti 2019",
      subtitle: "RNGPIT, Gujarat, India",
      description:
        "Developed a Techfest management system including an Android App to handle participation and a Web Interface to Monitor stats",
      isworkcard: true,
    },
    {
      date: "May 2019 - Jul 2019",
      title: "Software Trainee Intern",
      subtitle: "D-Link India Limited, Mumbai, India",
      description:
        "Made a Chatbot platform to provide assistance to D-Link resellers",
      isworkcard: true,
    },
    {
      date: "Mar 2020 - Apr 2021",
      title: "Freelance Android Developer",
      subtitle: "Bhopal, India",
      description:
        "As games' security continues to improve, I quickly learned new skills and applied them to increase efficiency and productivity in order to identify new flaws in my clients' games. Participating in ongoing growth by making suggestions and participating in problem-solving activities to help my partners",
      isworkcard: true,
    },

    {
      date: "Sep 2018 - Nov 2020",
      title: "Freelance Game Penetration Tester",
      subtitle: "Bhopal, India",
      description:
        "As games' security continues to improve, I quickly learned new skills and applied them to increase efficiency and productivity in order to identify new flaws in my clients' games. Participating in ongoing growth by making suggestions and participating in problem-solving activities to help my partners",
      isworkcard: true,
    },
    {
      date: "Aug 2018 - Apr 2020",
      title: "Higher Secondary School Degree",
      subtitle: "SPPS, Bhopal, India",
      description:
        "Computer Scince (Python), Mathematics, Physics, Chemistry & English",
      isworkcard: false,
    },
  ],
  projects: [
    {
      name: "Touch Simulation",
      description:
        "Touch Simulation is program made in Golang to simulate Touch Input in a android devices using Virtual Display with UInput interface of kernel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: ["Golang", "Android"],
      link: {
        github: "https://github.com/kp7742/TouchSimulation",
      },
    },
    {
      name: "Token Based Authentication",
      description:
        "Token Based Authentication System is Secure Alternative Implementation of JWT(JSON Web Token).",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      technologies: ["Java", "Android", "PHP"],
      link: {
        github: "https://github.com/kp7742/TOBA",
      },
    },
  ],
};

export default data;
