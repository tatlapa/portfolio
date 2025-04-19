import Header from "../layouts/Header.tsx";
import Footer from "../layouts/Footer.tsx";
import "../index.css";
import SocialNetwork from "../components/SocialNetwork.tsx";
import Skill from "../components/Skill.tsx";
import Experience from "../components/Experience.tsx";
import Project from "../components/Project.tsx";
import profilePicture from "@/assets/hero/profile3.jpeg";
import thailandPicture from "@/assets/hero/thailand.webp";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import getProjects from "../datas/projects.ts";
import getSkills from "../datas/skills.ts";
import Hero from "../components/Hero.tsx";
import {
  RxArchive,
  RxBackpack,
  RxCode,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";
import { SiMalt } from "react-icons/si";

const Home = () => {
  const projects = getProjects();
  const skills = getSkills();

  return (
    <div className="text-foreground min-h-screen">
      <Header IconComponent={RxCode} />
      <div className="max-md:my-12 max-md:mx-4 my-20 mx-36 relative z-10">
        <div className="flex flex-col justify-center relative">
          <Hero profilePicture={profilePicture} country={thailandPicture} />
          <div className="my-20 w-full max-md:gap-8 gap-2 max-md:flex-col flex">
            <div className="max-md:w-full w-2/3 h-fit border rounded-2xl gap-3 p-4">
              <div className="flex items-center gap-3 mb-4">
                <RxArchive className="w-8 h-8" />
                <h2 className="text-2xl font-semibold">Projects</h2>
              </div>
              <div className="flex flex-col gap-2 h-[600px] overflow-scroll overflow-x-visible">
                {projects.map((project) => (
                  <Project
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    url={project.url}
                    image={project.image}
                  />
                ))}
              </div>
            </div>
            <div className="max-md:w-full w-1/3 gap-3 flex flex-col">
              <div className="border rounded-2xl p-4">
                <div className="gap-3 w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <RxBackpack className="w-8 h-8" />
                    <h2 className="text-2xl font-semibold">Experiences</h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Experience
                      title="Independent"
                      role="Web Developer"
                      date="October 2023 - Today"
                    />
                    <Experience
                      title="React training program"
                      role="React Programmer"
                      date="Sep 2023 - October 2024"
                    />
                    <Experience
                      title="Henri Mondor Hospital"
                      role="Computer Network Technician"
                      date="Déc 2020 - Juin 2022"
                    />
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-3">
                  <SocialNetwork
                    content="Linkedin"
                    IconComponent={RxLinkedinLogo}
                    href="https://www.linkedin.com/in/jeremy-richard-webdev"
                  />
                  <SocialNetwork
                    content="Malt"
                    IconComponent={SiMalt}
                    href="https://www.malt.fr/profile/jeremyrichard1?overview"
                    iconClassName="size-10"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
          <h2 className="text-5xl font-bold">Skills</h2>
          <p>I love working on</p>
          <div className="mt-16 max-md:flex-col max-md:gap-12 grid md:grid-cols-3 gap-12">
            {skills.map((skill) => (
              <Skill
                logo={skill.logo}
                key={skill.id}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
          <h2 className="mt-16 text-3xl font-semibold">Contact</h2>
          <p>I would love to work with you</p>
          <div className="gap-3 text-center mt-8 max-md:flex-col flex">
            <SocialNetwork
              content="Linkedin"
              href="https://www.linkedin.com/in/jeremy-richard-webdev"
              IconComponent={RxLinkedinLogo}
            />
            <SocialNetwork
              content="Malt"
              IconComponent={SiMalt}
              href="https://www.malt.fr/profile/jeremyrichard1?overview"
              iconClassName="size-10"
            />
            <SocialNetwork
              content="Mail"
              href="mailto:jeremyrc77.pro@gmail.com"
              IconComponent={RxEnvelopeClosed}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
