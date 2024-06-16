import { Theme, Text, Heading, Flex } from "@radix-ui/themes";
import {
  LinkedInLogoIcon,
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  ArchiveIcon,
  BackpackIcon,
  CodeIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css";
import SocialNetwork from "../components/SocialNetwork.jsx";
import Skill from "../components/Skill.jsx";
import Experience from "../components/Experience.jsx";
import Project from "../components/Project.jsx";
import profilePicture from "@/assets/hero/profile.jpg";
import thailandPicture from "@/assets/hero/thailand.webp";
import reactIcon from "@/assets/stack/react.svg";
import nextIcon from "@/assets/stack/next.svg";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import getProject from "../utils/image-util.jsx";
import getDatas from "../datas/data.jsx";
import Hero from "../components/Hero.jsx";

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
      <Header
        toggleAppearance={toggleAppearance}
        appearance={appearance}
        IconComponent={CodeIcon}
      />
      <Flex direction="column" className="justify-center max-md:my-12 max-md:mx-4 my-20 mx-36">
        <Hero profilePicture={profilePicture} country={thailandPicture} />
        <Flex className="my-20 w-full gap-2 max-md:flex-col">
          <Flex direction="column" className="max-md:w-full w-2/3 h-fit border-1 rounded-2xl gap-3">
            <Flex className="items-center gap-3">
              <ArchiveIcon className="w-8 h-8" />
              <Heading as="h2">Projects</Heading>
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
          <Flex direction="column" className="max-md:w-full w-1/3 gap-3">
            <Flex className="border-1 rounded-2xl h-3/4">
              <Flex direction="column" className="gap-3 w-full">
                <Flex className="items-center gap-2">
                  <BackpackIcon className="w-8 h-8" />
                  <Heading as="h2">Experiences</Heading>
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
              className="gap-3 border-1 h-1/4 rounded-2xl"
            >
              <SocialNetwork
                content="Linkedin"
                IconComponent={LinkedInLogoIcon}
                href="#"
                profilePicture={profilePicture}
              />
              <SocialNetwork
                content="Discord"
                IconComponent={DiscordLogoIcon}
                href="#"
                profilePicture={profilePicture}
              />
            </Flex>
          </Flex>
        </Flex>
        <Heading as="h2" className="text-5xl flex">
          Skills
        </Heading>
        <Text>I love working on</Text>
        <Flex className="mt-16 max-md:flex-col">
          <Skill
            content="React"
            logo={reactIcon}
            textContent="My main library is React"
            className="max-md:border-b-2 border-r-2"
          />
          <Skill
            content="Next"
            logo={nextIcon}
            textContent="My main framework for React is Next"
            className="max-md:border-b-2 border-r-2"
          />
          <Skill
            content="Tailwind"
            logo={tailwindIcon}
            textContent="My styling library is Tailwind; I can create websites quickly using this technology"
            className=""
          />
        </Flex>
        <Heading as="h2" className="mt-16">
          Contact
        </Heading>
        <Text>I would love work with you</Text>
        <Flex className="gap-3 text-center mt-16 max-md:flex-col">
          <SocialNetwork
            content="Linkedin"
            href="#"
            IconComponent={LinkedInLogoIcon}
            profilePicture={profilePicture}
            className="max-md:w-full w-1/3"
          />
          <SocialNetwork
            content="Discord"
            href="#"
            IconComponent={DiscordLogoIcon}
            profilePicture={profilePicture}
            className="max-md:w-full w-1/3"
          />
          <SocialNetwork
            content="Mail"
            href="#"
            IconComponent={EnvelopeClosedIcon}
            profilePicture={profilePicture}
            className="max-md:w-full w-1/3"
          />
        </Flex>
      </Flex>
      <Footer />
    </Theme>
  );
};

export default Home;
