type SkillProps = {
  title: string;
  logo: string;
  description: string;
};

const Skill = ({ title, logo, description }: SkillProps) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={logo} className="max-md:w-16 max-md:h-16 h-32" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Skill;
