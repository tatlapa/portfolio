import { useTranslation } from "react-i18next";

type SkillProps = {
  titleKey: string;
  descriptionKey: string;
  logo: string;
  invertOnDark?: boolean;
};

const Skill = ({
  titleKey,
  descriptionKey,
  logo,
  invertOnDark,
}: SkillProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2">
      <img
        src={logo}
        alt={t(titleKey)}
        className={`max-md:w-16 max-md:h-16 h-32 ${
          invertOnDark ? "dark:invert" : ""
        }`}
      />
      <h3 className="text-xl font-semibold">{t(titleKey)}</h3>
      <p>{t(descriptionKey)}</p>
    </div>
  );
};

export default Skill;
