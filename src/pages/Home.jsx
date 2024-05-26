import { Theme, Text, Heading, Avatar, Flex } from "@radix-ui/themes";
import {
  LinkedInLogoIcon,
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  ArchiveIcon,
  BackpackIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css";
import SocialNetwork from "../components/SocialNetwork.jsx";
import Skill from "../components/Skill.jsx";
import Experience from "../components/Experience.jsx";
import Project from "../components/Project.jsx";
import profilePicture from "@/assets/profile/profile.jpg";
import reactIcon from "@/assets/stack/react.svg";
import nextIcon from "@/assets/stack/next.svg";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import getProject from "../utils/image-util.jsx";
import getDatas from "../datas/data.jsx";

const Home = () => {
  const [appearance, setAppearance] = useState("dark");

  const toggleAppearance = () => {
    setAppearance((prevAppearance) =>
      prevAppearance === "dark" ? "light" : "dark"
    );
  };

  const datas = getDatas();

  return (
    <Theme
      accentColor="sky"
      appearance={appearance}
      grayColor="sage"
      radius="large"
      scaling="100%"
    >
      <Header toggleAppearance={toggleAppearance} appearance={appearance} />
      <Flex direction="column" className="justify-center my-20 mx-36">
        <Flex className="justify-between w-full">
          <Flex direction="column" className="gap-2 w-2/3">
            <Heading>Jérémy Richard</Heading>
            <Text>Front-End Developer</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              saepe iste nostrum animi placeat beatae itaque, sequi
              reprehenderit voluptates quam tempora, exercitationem consectetur
              voluptatibus suscipit rerum molestiae! Dolores, nesciunt
              voluptates.
            </Text>
          </Flex>
          <Avatar size="9" src={profilePicture} radius="full" />
        </Flex>
        <Flex className="my-20 w-full max-h-[80vh] gap-2">
          <Flex
            direction="column"
            className="w-2/3 p-3 border-1 rounded-2xl gap-3"
          >
            <Flex className="items-center gap-3">
              <ArchiveIcon className="w-8 h-8" />
              <Heading>Projects</Heading>
            </Flex>
            <Flex direction="column" className="overflow-y-auto gap-2">
              {datas.map((project) => (
                <Project
                  key={project.id}
                  icon={getProject(project.icon)}
                  iconPreview={getProject(project.iconPreview)}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
              ))}
            </Flex>
          </Flex>
          <Flex direction="column" className="w-1/3">
            <Flex className="border-1 p-3 rounded-2xl h-3/4">
              <Flex direction="column" className="gap-3 w-full">
                <Flex className="items-center gap-2">
                  <BackpackIcon className="w-8 h-8" />
                  <Heading>Experiences</Heading>
                </Flex>
                <Experience
                  image={profilePicture}
                  title="Formation REACT"
                  role="React Programmer"
                  date="Sep 2023 - Aujourd'hui"
                />
                <Experience
                  image={profilePicture}
                  title="DR.METH"
                  role="Javascript Programmer"
                  date="Juin 2023 - Juil 2023"
                />
                <Experience
                  image={profilePicture}
                  title="Henri Mondor Hospital"
                  role="Computer Network Technician"
                  date="Déc 2020 - Juin 2022"
                />
              </Flex>
            </Flex>
            <Flex
              direction="column"
              className="gap-3 p-3.5 border-1 h-1/4 rounded-2xl"
            >
              <SocialNetwork
                content="Linkedin"
                IconComponent={LinkedInLogoIcon}
                href="#"
                className="p-2"
              />
              <SocialNetwork
                content="Discord"
                IconComponent={DiscordLogoIcon}
                href="#"
                className="p-2"
              />
            </Flex>
          </Flex>
        </Flex>
        <Heading className="text-5xl flex">Skills</Heading>
        <Text>I love working on</Text>
        <Flex className="mt-16">
          <Skill
            content="React"
            logo={reactIcon}
            textContent="Ma librairie principal est React"
            className="border-r-2"
          />
          <Skill
            content="Next"
            logo={nextIcon}
            textContent="Mon framework principal pour React est Next"
            className="border-r-2"
          />
          <Skill
            content="Tailwind"
            logo={tailwindIcon}
            textContent="Ma librairie de style est Tailwind, je peux créer des sites web rapidement en utilisant cette technologie"
            className=""
          />
        </Flex>
        <Heading className="mt-16">Contact</Heading>
        <Text>I would love work with you</Text>
        <Flex className="gap-3 text-center mt-16">
          <SocialNetwork
            content="Linkedin"
            href="#"
            className="w-1/3 p-3"
            IconComponent={LinkedInLogoIcon}
          />
          <SocialNetwork
            content="Discord"
            href="#"
            IconComponent={DiscordLogoIcon}
            className="w-1/3 p-3"
          />
          <SocialNetwork
            content="Mail"
            href="#"
            IconComponent={EnvelopeClosedIcon}
            className="w-1/3 p-3"
          />
        </Flex>
      </Flex>
      <Footer />
    </Theme>
  );
};

export default Home;
