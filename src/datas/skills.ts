import reactIcon from "@/assets/stack/react.svg";
import nextIcon from "@/assets/stack/next.svg";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import vueIcon from "@/assets/stack/vue.svg";
import laravelIcon from "@/assets/stack/laravel.svg";
import tsIcon from "@/assets/stack/typescript.svg";

const skills = [
  {
    id: 1,
    title: "React",
    logo: reactIcon,
    description:
      "React is my go-to library for building user interfaces. It enables fast, component-based development.",
  },
  {
    id: 2,
    title: "Next",
    logo: nextIcon,
    description:
      "Next.js is my main React framework. It simplifies routing and server-side rendering for better performance.",
  },
  {
    id: 3,
    title: "Tailwind",
    logo: tailwindIcon,
    description:
      "Tailwind CSS helps me build modern, responsive UIs rapidly with utility-first classes.",
  },
  {
    id: 4,
    title: "Vue",
    logo: vueIcon,
    description:
      "Vue.js is a progressive framework I use for building performant and reactive interfaces.",
  },
  {
    id: 5,
    title: "Laravel",
    logo: laravelIcon,
    description:
      "Laravel is my favorite PHP backend framework. I use it to build robust APIs and full-stack applications.",
  },
  {
    id: 6,
    title: "TypeScript",
    logo: tsIcon,
    description:
      "TypeScript adds static typing to JavaScript. It makes my code more robust and easier to maintain.",
  },
];

const getSkills = () => skills;

export default getSkills;
