type SkillProps = {
  content: string
  className?: string
  logo: string
  textContent: string
}

const Skill = ({ content, className, logo, textContent }: SkillProps) => {
  return (
    <div
      className={`${className} max-md:w-full w-1/3 max-md:px-0 px-8 flex flex-col gap-2 max-md:items-start max-md:text-start text-center items-center`}
    >
      <img src={logo} className="max-md:w-16 max-md:h-16 h-32" />
      <h3 className="text-xl font-semibold">{content}</h3>
      <p>{textContent}</p>
    </div>
  )
}

export default Skill
