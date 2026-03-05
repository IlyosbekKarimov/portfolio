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
    img: "icons/wifi.svg",
  },
  {
    id: 2,
    img: "icons/search.svg",
  },
  {
    id: 3,
    img: "icons/user.svg",
  },
  {
    id: 4,
    img: "icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: false,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: false,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Vue.js"],
  },
  {
    category: "Mobile",
    items: ["React Native"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Django"],
  },
  {
    category: "Database",
    items: ["Sqlite3", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ilyosbekKarimov",
  },
  {
    id: 2,
    text: "Telegram",
    icon: "icons/telegram.svg",
    bg: "#4bcb63",
    link: "https://t.me/Karimov_I_G",
  },
  {
    id: 3,
    text: "Youtube",
    icon: "icons/youtube.svg",
    bg: "#ff866b",
    link: "http://www.youtube.com/@CyberSpace2004",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ilyas-karimov-48bbaa275",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "images/gal1.png",
  },
  {
    id: 2,
    img: "images/gal2.png",
  },
  {
    id: 3,
    img: "images/gal3.png",
  },
  {
    id: 4,
    img: "images/gal4.png",
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
  icon: "icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Bank asset management",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-10 left-5", 
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Bank asset management Project.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Bank asset management website is a sleek and modern platform designed for managing assets.",
            "Instead of a simple paper asset managing, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like managing everything from your phone or laptop instead of paper documents.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "Bank asset management system",
          icon: "images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://bank-asset-mgmt-5zro.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "bank.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "images/bankassetmanagement.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "KPI system",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "KPI system Project.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "KPI system is a web page that tracks contribution of employees and there is managers that gives contribution points.",
            "Instead of giving more money while employeer doing nothing, they see how much contribution employee has and give money accordingly.",
            "Think of it like you are giving your employees hope to get more money by improving himself/herself further.",
            "It's built with React.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "kpi.samduuf.com",
          icon: "images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://kpi.samduuf.uz",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "kpi-samduuf-uz.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "images/kpisamduufuz.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "images/safari.png",
          kind: "file",
          fileType: "url",
          href: "#",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "#",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "#",
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
  icon: "icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "images/ilyosbek.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "images/casualmeme.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "images/conferencememe.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "images/meme.png",
      description: [
        "Hey! I’m Ilyosbek 👋, a software developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in TypeScript, React, and Next.js — and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping the cheapest coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "images/trash-2.png",
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