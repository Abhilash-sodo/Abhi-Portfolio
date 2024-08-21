export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "/trello.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/kanban.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/gemini.jpg",
    },
  
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/rental.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/trello2.jpg",
    },
  
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: "/trello2.jpg",
    },
    {
      title: "Next Js",
      link: "https://nextjs.org",
      thumbnail: "/nextjs.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail: "/blogging.jpg",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
  
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail: "/rental.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail: "/gemini.jpg",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];
  
  export interface Category {
    id: number;
    name: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    desc: string;
    image: string;
    categoryId: number;
  }
  export const categories: Category[] = [
    { id: 1, name: "Prisma" },
    { id: 2, name: "Nextjs" },
    // Add more categories here
  ];
  
  export const work: Product[] = [
    {
      id: 1,
      name: "ecommerce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/mobile-1.jpg",
      categoryId: 1,
    },
    {
      id: 4,
      name: "trello clone",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/laptop-1.jpg",
      categoryId: 2,
    },
    {
      id: 6,
      name: "kanban clone",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/laptop-3.jpg",
      categoryId: 2,
    },
    {
      id: 2,
      name: "portfolio",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/mobile-2.jpg",
      categoryId: 1,
    },
    {
      id: 3,
      name: "dashboard",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/mobile-3.jpg",
      categoryId: 1,
    },
    {
      id: 5,
      name: "gemini clone",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      image: "/laptop-2.jpg",
      categoryId: 2,
    },
  ];
  
  export const skills = [
    {
      name: "React js",
      percentage: "95%",
      image: "/react.svg",
    },
    {
      name: "TypeScript",
      percentage: "85%",
      image: "/TypeScript.png",
    },
    {
      name: "Javascript",
      percentage: "90%",
      image: "/js.svg",
    },
    {
      name: "Figma",
      percentage: "80%",
      image: "/figma.svg",
    },
    {
      name: "Tailwind-css",
      percentage: "93%",
      image: "/tailwind-css-icon.png",
    },
    {
      name: "Google Sites",
      percentage: "96%",
      image: "/Google Sites Logo.svg",
    },
    {
      name: "Node Js",
      percentage: "88%",
      image: "/nodejs-icon.svg",
    },
    {
      name: "Express Js",
      percentage: "89%",
      image: "/expressjs-icon.svg",
    },
    {
      name: "Next JS",
      percentage: "75%",
      image: "/NextJS.svg",
    },
    {
      name: "Git",
      percentage: "80%",
      image: "/git.png",
    },
    {
      name: "MySQL",
      percentage: "79%",
      image: "/mysql.png",
    },
    {
      name: "MongoDB",
      percentage: "75%",
      image: "/mongodb-icon.svg",
    },
    {
      name: "Python",
      percentage: "90%",
      image: "/python.png",
    },
    {
      name: "Pandas",
      percentage: "85%",
      image: "/pandas-svgrepo-com.svg",
    },
    {
      name: "Flask",
      percentage: "77%",
      image: "/pocoo_flask-icon.svg",
    },
    {
      name: "Django",
      percentage: "77%",
      image: "/django.svg",
    },
    {
      name: "Numpy",
      percentage: "76%",
      image: "/numpy-1.svg",
    },
    {
      name: "Tornado",
      percentage: "75%",
      image: "/tornado-svgrepo-com.svg",
    },
    {
      name: "pyramid",
      percentage: "72%",
      image: "/pyramid.svg",
    },
    {
      name: "Matplotlib",
      percentage: "78%",
      image: "/matplotlib.png",
    }
  ];
  
  export const experience = [
    {
      id: 1,
      startDate: "2020",
      endDate: "2021",
      title: "MERN stack developer",
      description: "MERN stack, full stack 1 year experienced developer",
    },
    {
      id: 2,
      startDate: "2021",
      endDate: "2023",
      title: "MERN stack developer",
      description: "MERN stack, full stack 1 year experienced developer",
    },
    {
      id: 3,
      startDate: "2020",
      endDate: "2023",
      title: "FULL stack developer",
      description: "MERN stack, full stack 1 year experienced developer",
    },
    {
      id: 4,
      startDate: "2022",
      endDate: "present",
      title: "Lead developer",
      description: "MERN stack, full stack 1 year experienced developer",
    },
    {
      id: 5,
      startDate: "2020",
      endDate: "2021",
      title: "MERN stack developer",
      description: "MERN stack, full stack 1 year experienced developer",
    },
    {
      id: 6,
      startDate: "2020",
      endDate: "2021",
      title: "MERN stack developer",
      description: "MERN stack, full stack 1 year experienced developer",
    },
  ];