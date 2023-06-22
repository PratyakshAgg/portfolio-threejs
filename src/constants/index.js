import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    gpt,
    reactjs,
    port,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    meme,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    linkedin,
    mail,
    leetcode,
    codeforces,
    ti, 
    school,
    cpp,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/pratyaksh-aggarwal/",
    },
    {
      title: "Github",
      icon: github,
      link: "https://github.com/PratyakshAgg",
    },
    {
      title: "Leetcode",
      icon: leetcode,
      link: "https://leetcode.com/prat_yaksh/",
    },
    {
      title: "Codeforces",
      icon: codeforces,
      link: "https://codeforces.com/profile/prat_yaksh",
    },
    {
      title: "Gmail",
      icon: mail,
      link: "mailto: pratyaksh2002@gmail.com",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "CBSE Class 10",
      company_name: "Riverside DAVPS, Ambala Cantt",
      icon: school,
      iconBg: "#383E56",
      date: "March 2016 - March 2018",
      points: [
        "Percentage: 95.8%",
      ],
    },
    {
      title: "CBSE Class 12 (Non-Medical)",
      company_name: "Riverside DAVPS, Ambala Cantt",
      icon: school,
      iconBg: "#E6DEDD",
      date: "March 2018 - April 2020",
      points: [
        "Percentage: 96.2%",
      ],
    },
    {
      title: "B.E. Computer Science",
      company_name: "Thapar Institute of Engineering and Technology, Patiala",
      icon: ti,
      iconBg: "#383E56",
      date: "September 2020 - Present",
      points: [
        "Present CGPA: 9.32",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GPT-3 UI",
      description:
        "Web-based platform that tells about OpenAI's latest innovation, GPT-3. It has various components that are built from scratch using React.js.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "frontend",
          color: "green-text-gradient",
        },
        {
          name: "webdev",
          color: "pink-text-gradient",
        },
      ],
      image: gpt,
      source_code_link: "https://github.com/PratyakshAgg/gpt3-ui-react",
      live_link: "https://resilient-jalebi-81b9c3.netlify.app/",
    },
    {
      name: "Meme Generator",
      description:
        "Web Application that enable the user to create memes by generating a random meme template and enabling the user to write text on it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: meme,
      source_code_link: "https://github.com/PratyakshAgg/ReactJS-Projects",
      live_link: "https://glowing-fox-59c3d5.netlify.app/",
    },
    {
      name: "Portfolio Design",
      description:
        "A Personal Portfolio Website with various animations and components built purely using Javascript and SCSS from scratch with a theme change option.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "portfolio",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/PratyakshAgg/PratyakshAgg.github.io",
      live_link: "https://pratyakshagg.github.io/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };