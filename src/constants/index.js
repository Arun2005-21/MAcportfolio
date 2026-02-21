const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 2026",
    title:
      "How I Built a Full-Stack Airbnb Clone using Node.js, Express & MongoDB",
    image: "/images/blog1.png",
    link: "https://www.linkedin.com/posts/arun-mn-259773326_excited-to-share-my-latest-full-stack-activity-7344320460517478400-hGxe",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["Java", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React", "Bootstrap", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "EJS", "EJS-mate"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "GenAI",
    items: ["LLMs", "RAG", "LangChain"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Arun2005-21",
  },
  {
    id: 2,
    text: "LeetCode",
    icon: "/icons/download.svg",
    bg: "#4ADE80",
    link: "https://leetcode.com/u/vQWVqUGN56/",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#DD2A7B",
    link: "https://share.google/tXZsOUrntfDJTMYTx",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/arun-mn-259773326/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal2.jpg",
  },
  {
    id: 2,
    img: "/images/gal1.jpeg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Full-Stack Listing & Travel Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 11,
          name: "Project Overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A full-stack listing and travel platform inspired by Airbnb, built to strengthen real-world full-stack development skills.",
            "This project includes authentication, CRUD operations, category-based filtering, and map-based geolocation features.",
            "It follows MVC architecture and RESTful routing, keeping the code clean, scalable, and maintainable.",
            "Built using Node.js, Express.js, MongoDB, EJS, and modern full-stack development practices.",
          ],
        },
        {
          id: 12,
          name: "Live Demo.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://lnkd.in/gMccEK6u",
          position: "top-10 right-20",
        },
        {
          id: 13,
          name: "Project Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 14,
          name: "GitHub Repo.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Arun2005-21/delta-demo",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Career & Education Advisor",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 21,
          name: "AI Career Advisor Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI-Based Personalized Career and Education Advisor helps students choose the right stream or degree after Class 10 or 12.",
            "It collects student academic level, interests, and financial background to generate personalized recommendations.",
            "It recommends suitable streams (Arts, Science, Commerce, Vocational) and degree programs in nearby government colleges.",
            "It includes aptitude quiz and video interview modules to evaluate logical reasoning and communication skills.",
            "It also supports WhatsApp and phone-call guidance for rural and low-connectivity users.",
            "Built using React.js, Node.js, Express.js, and MongoDB with custom student survey and aptitude test data.",
          ],
        },
        {
          id: 22,
          name: "Live Demo.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://one-stop-personalize-zeqy.bolt.host/roadmap",
          position: "top-20 left-20",
        },
        {
          id: 23,
          name: "career-advisor.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 24,
          name: "GitHub Repo.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Arun2005-21",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 31,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A Food Delivery App built to provide a smooth ordering experience with a clean and modern mobile UI.",
            "Users can browse restaurants, explore menus, place orders, and track delivery updates in real time.",
            "Designed with a focus on mobile-first experience and responsive UI patterns.",
            "Built using React Native for cross-platform performance on Android and iOS.",
          ],
        },
        {
          id: 32,
          name: "Demo.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 33,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 34,
          name: "GitHub Repo.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Arun2005-21",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 41,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian12.jpeg",
    },
    {
      id: 42,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian12.jpeg",
      description: [
        "Hey! I’m Arun 👋, a MERN Stack Developer who loves building real-world web applications with clean UI and scalable code.",
        "I specialize in React.js, Node.js, Express.js, and MongoDB, and I enjoy creating responsive full-stack projects from frontend to backend.",
        "I’m also exploring MERN + AI projects using LLMs, RAG, and LangChain to build smarter and more helpful applications.",
        "I’ve worked as a Google Gemini Student Ambassador and a Frontend Web Development Intern, and I’ve participated in 10+ hackathons—always focused on learning, building, and improving.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 51,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 61,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
