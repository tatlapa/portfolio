import mysupplementPreview from "@/assets/projects/mysupplement-preview.png";
import myscentPreview from "@/assets/projects/myscent-preview.png";
import kasaPreview from "@/assets/projects/kasa-preview.png";
import lesPetitsPlatsPreview from "@/assets/projects/les_petits_plats.svg";
import fisheyePreview from "@/assets/projects/fisheye.png";
import ohmyfoodPreview from "@/assets/projects/ohmyfood.png";
import bookiPreview from "@/assets/projects/booki.png";
import wakfuCrafterPreview from "@/assets/projects/wakfu-crafter-preview.png";

const projects = [
  {
    titleKey: "projects_data.1.title",
    descriptionKey: "projects_data.1.description",
    url: "https://mysupplement.netlify.app/",
    image: mysupplementPreview,
    id: 1,
  },
  {
    titleKey: "projects_data.2.title",
    descriptionKey: "projects_data.2.description",
    url: "https://myscent.ai/",
    image: myscentPreview,
    id: 2,
  },
  {
    titleKey: "projects_data.3.title",
    descriptionKey: "projects_data.3.description",
    url: "https://wakfu-craft.netlify.app",
    image: wakfuCrafterPreview,
    id: 3,
  },
  {
    titleKey: "projects_data.4.title",
    descriptionKey: "projects_data.4.description",
    url: "https://github.com/tatlapa/kasa",
    image: kasaPreview,
    id: 4,
  },
  {
    titleKey: "projects_data.5.title",
    descriptionKey: "projects_data.5.description",
    url: "https://github.com/tatlapa/les-petits-plats",
    image: lesPetitsPlatsPreview,
    id: 5,
  },
  {
    titleKey: "projects_data.6.title",
    descriptionKey: "projects_data.6.description",
    url: "https://github.com/tatlapa/Front-End-Fisheye",
    image: fisheyePreview,
    id: 6,
  },
  {
    titleKey: "projects_data.7.title",
    descriptionKey: "projects_data.7.description",
    url: "https://github.com/tatlapa/ohmyfood",
    image: ohmyfoodPreview,
    id: 7,
  },
  {
    titleKey: "projects_data.8.title",
    descriptionKey: "projects_data.8.description",
    url: "https://github.com/tatlapa/Booki",
    image: bookiPreview,
    id: 8,
  },
];

const getProjects = () => projects;

export default getProjects;
