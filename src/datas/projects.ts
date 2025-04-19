const projects = [
  {
    title: "MySupplement",
    description:
      "Smart assistant recommending dietary supplements. Developed with Nuxt.js & Laravel, using GPT-4, Stripe, Amazon API, and a full admin dashboard.",
    url: "https://mysupplement.ai/",
    icon: "/src/assets/projects/kasa.png",
    image: "/src/assets/projects/mysupplement-preview.png",
    id: 1,
  },
  {
    title: "MyScent",
    description:
      "AI-powered platform to create personalized perfumes. Built with Laravel & Vue.js, using OpenAI to generate custom scent compositions.",
    url: "https://myscent.ai/",
    icon: "/src/assets/projects/kasa.png",
    image: "/src/assets/projects/myscent-preview.png",
    id: 2,
  },
  {
    title: "Kasa",
    description:
      "Kasa is a React Sass website that allows you to view accommodations for your vacations.",
    url: "https://github.com/tatlapa/kasa",
    icon: "/src/assets/projects/kasa.png",
    image: "/src/assets/projects/kasa-preview.png",

    id: 3,
  },
  {
    title: "Les Petits Plats",
    description:
      "Les Petits Plats is a vanilla JavaScript website that allows you to search for recipes based on the ingredients you have in your fridge.",
    url: "https://github.com/tatlapa/les-petits-plats",
    icon: "/src/assets/projects/les_petits_plats.svg",
    image: "/src/assets/projects/myscent-preview.png",
    id: 4,
  },
  {
    title: "Fish Eye",
    description:
      "Fish Eye is a vanilla JavaScript photography website that connects photographers and clients.",
    url: "https://github.com/tatlapa/Front-End-Fisheye",
    icon: "/src/assets/projects/fisheye.png",
    image: "/src/assets/projects/myscent-preview.png",
    id: 5,
  },
  {
    title: "Ohmyfood",
    description:
      "Ohmyfood is an HTML CSS website that allows you to view restaurant menus.",
    url: "https://github.com/tatlapa/ohmyfood",
    icon: "/src/assets/projects/ohmyfood.png",
    image: "/src/assets/projects/myscent-preview.png",
    id: 6,
  },
  {
    title: "Booki",
    description:
      "Booki is an HTML CSS website that allows you to view accommodations for your vacations.",
    url: "https://github.com/tatlapa/Booki",
    icon: "/src/assets/projects/booki.png",
    image: "/src/assets/projects/myscent-preview.png",
    id: 7,
  },
];

const getProjects = () => {
  return projects;
};

export default getProjects;
