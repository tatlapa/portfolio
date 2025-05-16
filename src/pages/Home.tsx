import Header from "@/layouts/Header.tsx";
import Footer from "@/layouts/Footer.tsx";
import "@/index.css";
import SocialNetwork from "@/components/SocialNetwork.tsx";
import Skill from "@/components/Skill.tsx";
import Experience from "@/components/Experience.tsx";
import Project from "@/components/Project.tsx";
import profilePicture from "@/assets/hero/profile3.jpeg";
import thailandPicture from "@/assets/hero/thailand.webp";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import getProjects from "@/datas/projects.ts";
import getSkills from "@/datas/skills.ts";
import Hero from "@/components/Hero.tsx";
import {
  RxArchive,
  RxBackpack,
  RxCode,
  RxLinkedinLogo,
  RxEnvelopeClosed,
  RxGithubLogo,
} from "react-icons/rx";
import { SiMalt, SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";

const Home = () => {
  const projects = getProjects();
  const skills = getSkills();
  const { t } = useTranslation();

  return (
    <>
      <Header IconComponent={RxCode} />
      <div className="my-12 mx-4 lg:my-20 lg:mx-36 md:mx-24">
        <Hero profilePicture={profilePicture} country={thailandPicture} />
        <div
          className="my-20 w-full gap-8 md:gap-2 flex flex-col md:flex-row"
          id="projects"
        >
          <div className="md:w-2/3 border rounded-2xl gap-3 p-4">
            <div className="flex items-center gap-3 mb-4">
              <RxArchive className="w-8 h-8" />
              <h2 className="text-2xl font-semibold">{t("projects")}</h2>
            </div>
            <div className="flex flex-col gap-2 overflow-scroll h-[600px] overflow-x-visible">
              {projects.map((project) => (
                <Project
                  key={project.id}
                  titleKey={project.titleKey}
                  descriptionKey={project.descriptionKey}
                  url={project.url}
                  image={project.image}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/3 gap-3 flex flex-col">
            <div className="border rounded-2xl p-4">
              <div className="gap-3 w-full ">
                <div className="flex items-center gap-2 mb-3">
                  <RxBackpack className="w-8 h-8" />
                  <h2 className="text-2xl font-semibold">{t("experiences")}</h2>
                </div>
                <div className="flex flex-col gap-3">
                  <Experience
                    title={t("independent")}
                    role={t("web_dev")}
                    date={t("dates.indep")}
                  />
                  <Experience
                    title={t("react_course")}
                    role={t("react_dev")}
                    date={t("dates.react")}
                  />
                  <Experience
                    title={t("hospital")}
                    role={t("network_tech")}
                    date={t("dates.hospital")}
                  />
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>{t("follow_me")}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-1">
                <SocialNetwork
                  content="Linkedin"
                  IconComponent={RxLinkedinLogo}
                  href="https://www.linkedin.com/in/jeremy-richard-webdev"
                  buttonClassName="gap-1 w-full"
                />
                <SocialNetwork
                  content="Malt"
                  IconComponent={SiMalt}
                  href="https://www.malt.fr/profile/jeremyrichard1?overview"
                  iconClassName="size-10"
                  buttonClassName="gap-1 w-full"
                />
                <SocialNetwork
                  content="Github"
                  IconComponent={RxGithubLogo}
                  href="https://github.com/tatlapa"
                  buttonClassName="gap-1 w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-5xl font-bold">{t("skills")}</h2>
        <p>{t("skills_sub")}</p>
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-12">
          {skills.map((skill) => (
            <Skill
              logo={skill.logo}
              key={skill.id}
              titleKey={skill.titleKey}
              descriptionKey={skill.descriptionKey}
              invertOnDark={skill.invertOnDark}
            />
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-semibold" id="contact">
          {t("contact")}
        </h2>
        <p>{t("contact_sub")}</p>
        <div className="mt-8 grid grid-cols-2 gap-2 md:gap-3 md:flex">
          <SocialNetwork
            content="Linkedin"
            href="https://www.linkedin.com/in/jeremy-richard-webdev"
            IconComponent={RxLinkedinLogo}
            buttonClassName="w-full md:w-fit"
          />
          <SocialNetwork
            content="Malt"
            IconComponent={SiMalt}
            href="https://www.malt.fr/profile/jeremyrichard1?overview"
            iconClassName="size-10"
            buttonClassName="w-full md:w-fit"
          />
          <SocialNetwork
            content="Whatsapp"
            IconComponent={SiWhatsapp}
            href="https://api.whatsapp.com/send?phone=33650533782"
            buttonClassName="w-full md:w-fit"
          />
          <SocialNetwork
            content="Mail"
            href="mailto:jeremyrc77.pro@gmail.com"
            IconComponent={RxEnvelopeClosed}
            buttonClassName="w-full md:w-fit"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
