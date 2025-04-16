import Mode from "../components/Mode";

type HeaderProps = {
  toggleAppearance: () => void;
  appearance: string;
  IconComponent: React.ElementType;
};

const Header = ({
  toggleAppearance,
  appearance,
  IconComponent,
}: HeaderProps) => {
  return (
    <header className="flex justify-between bg-[#111A27] max-md:px-4 max-md:py-4 px-36 py-6 items-center border-b border-[#1B537B]">
      <h1 className="text-white items-center flex gap-2 max-md:text-sm text-lg font-semibold">
        <IconComponent className="max-md:w-4 max-md:h-4 w-8 h-8" />
        jeremyrichard.fr
      </h1>
      <div className="flex items-center">
        <ul className="flex max-md:gap-1 gap-5 items-center justify-center text-white max-md:text-xs">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <Mode toggleAppearance={toggleAppearance} appearance={appearance} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
