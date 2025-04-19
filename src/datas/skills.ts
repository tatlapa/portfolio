import reactIcon from "@/assets/stack/react.svg";
import nextIcon from "@/assets/stack/next.svg";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import vueIcon from "@/assets/stack/vue.svg";
import laravelIcon from "@/assets/stack/laravel.svg";
import tsIcon from "@/assets/stack/typescript.svg";

const skills = [
  {
    id: 1,
    titleKey: "skills_data.1.title",
    descriptionKey: "skills_data.1.description",
    logo: reactIcon,
    invertOnDark: false,
  },
  {
    id: 2,
    titleKey: "skills_data.2.title",
    descriptionKey: "skills_data.2.description",
    logo: nextIcon,
    invertOnDark: true,
  },
  {
    id: 3,
    titleKey: "skills_data.3.title",
    descriptionKey: "skills_data.3.description",
    logo: tailwindIcon,
    invertOnDark: false,
  },
  {
    id: 4,
    titleKey: "skills_data.4.title",
    descriptionKey: "skills_data.4.description",
    logo: vueIcon,
    invertOnDark: false,
  },
  {
    id: 5,
    titleKey: "skills_data.5.title",
    descriptionKey: "skills_data.5.description",
    logo: laravelIcon,
    invertOnDark: true,
  },
  {
    id: 6,
    titleKey: "skills_data.6.title",
    descriptionKey: "skills_data.6.description",
    logo: tsIcon,
    invertOnDark: true,
  },
];

const getSkills = () => skills;

export default getSkills;
