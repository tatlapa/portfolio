import LanguageSwitcher from "@/components/LanguageSwitcher.tsx";
import ModeToggle from "@/components/mode-toggle.tsx";
import MobileMenu from "@/components/MobileMenu.tsx";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  IconComponent: React.ElementType;
};

const Header = ({ IconComponent }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className="flex justify-between bg-[#111A27] max-md:px-4 max-md:py-4 px-36 py-6 items-center border-b border-[#1B537B]">
      <h1 className="text-white items-center flex gap-2 max-md:text-sm text-lg font-semibold">
        <IconComponent className="max-md:w-4 max-md:h-4 w-8 h-8" />
        jeremyrichard.fr
      </h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-5 items-center text-white text-sm">
        <li>
          <a href="#about">{t("nav.about")}</a>
        </li>
        <li>
          <a href="#projects">{t("nav.projects")}</a>
        </li>
        <li>
          <a href="#contact">{t("nav.contact")}</a>
        </li>
        <ModeToggle />
        <LanguageSwitcher />
      </ul>

      {/* Menu Mobile */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
