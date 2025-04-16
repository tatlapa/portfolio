import { useState } from "react";
import Header from "../layouts/Header.tsx";
import Footer from "../layouts/Footer.tsx";
import "../index.css";
import SocialNetwork from "../components/SocialNetwork.tsx";
import Skill from "../components/Skill.tsx";
import Experience from "../components/Experience.tsx";
import Project from "../components/Project.tsx";
import profilePicture from "@/assets/hero/profile.jpg";
import thailandPicture from "@/assets/hero/thailand.webp";
import reactIcon from "@/assets/stack/react.svg";
import nextIcon from "@/assets/stack/next.svg";
import tailwindIcon from "@/assets/stack/tailwind.svg";
import getProject from "../utils/image-util.tsx";
import getDatas from "../datas/data.ts";
import Hero from "../components/Hero.tsx";
import {
  RxArchive,
  RxBackpack,
  RxCode,
  RxDiscordLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

const Home = () => {
  const [appearance, setAppearance] = useState("dark");

  const toggleAppearance = () => {
    setAppearance((prevAppearance) =>
      prevAppearance === "dark" ? "light" : "dark"
    );
  };

  const datas = getDatas();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header
        toggleAppearance={toggleAppearance}
        appearance={appearance}
        IconComponent={RxCode}
      />
      <div className="max-md:my-12 max-md:mx-4 my-20 mx-36 relative z-10">
        {/* <BlurCircle /> */}
        <div className="flex flex-col justify-center relative">
          <Hero profilePicture={profilePicture} country={thailandPicture} />
          <div className="my-20 w-full max-md:gap-8 gap-2 max-md:flex-col flex">
            <div className="max-md:w-full w-2/3 h-fit border rounded-2xl gap-3 p-4">
              <div className="flex items-center gap-3 mb-4">
                <RxArchive className="w-8 h-8" />
                <h2 className="text-2xl font-semibold">Projects</h2>
              </div>
              <div className="flex flex-col gap-2 overflow-y-auto">
                {datas.map((project) => (
                  <Project
                    icon={getProject(project.icon)}
                    iconPreview={getProject(project.iconPreview)}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                  />
                ))}
              </div>
            </div>
            <div className="max-md:w-full w-1/3 gap-3 flex flex-col">
              <div className="border rounded-2xl h-3/4 p-4">
                <div className="gap-3 w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <RxBackpack className="w-8 h-8" />
                    <h2 className="text-2xl font-semibold">Experiences</h2>
                  </div>
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
                </div>
              </div>
              <div className="gap-3 border h-1/4 rounded-2xl p-4">
                <SocialNetwork
                  content="Linkedin"
                  IconComponent={RxLinkedinLogo}
                  href="#"
                  profilePicture={profilePicture}
                />
                <SocialNetwork
                  content="Discord"
                  IconComponent={RxDiscordLogo}
                  href="#"
                  profilePicture={profilePicture}
                />
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold">Skills</h2>
          <p>I love working on</p>
          <div className="mt-16 max-md:flex-col max-md:gap-12 flex">
            <Skill
              content="React"
              logo={reactIcon}
              textContent="My main library is React, It allows me to create websites quickly and efficiently"
              className="max-md:border-none border-r-2"
            />
            <Skill
              content="Next"
              logo={nextIcon}
              textContent="My main framework for React is Next"
              className="max-md:border-none border-r-2"
            />
            <Skill
              content="Tailwind"
              logo={tailwindIcon}
              textContent="My styling library is Tailwind I can create websites quickly using this technology"
              className=""
            />
          </div>
          <h2 className="mt-16 text-3xl font-semibold">Contact</h2>
          <p>I would love work with you</p>
          <div className="gap-3 text-center mt-16 max-md:flex-col flex">
            <SocialNetwork
              content="Linkedin"
              href="#"
              IconComponent={RxLinkedinLogo}
              profilePicture={profilePicture}
              className="max-md:w-full w-1/3"
            />
            <SocialNetwork
              content="Discord"
              href="#"
              IconComponent={RxDiscordLogo}
              profilePicture={profilePicture}
              className="max-md:w-full w-1/3"
            />
            <SocialNetwork
              content="Mail"
              href="#"
              IconComponent={RxEnvelopeClosed}
              profilePicture={profilePicture}
              className="max-md:w-full w-1/3"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
