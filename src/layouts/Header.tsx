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
    <header className="flex items-center justify-between bg-[#111A27] px-4 py-4 md:px-24 lg:px-36 md:py-6 border-b border-[#1B537B]">
      <h1 className="text-white items-center flex gap-1 md:gap-2 text-sm md:text-lg font-semibold">
        <IconComponent className="w-4 h-4 md:w-8 md:h-8" />
        jeremyrichard.fr
      </h1>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-5 items-center text-white text-sm">
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
      <div className="md:hidden flex items-center gap-1 md:gap-2">
        <ModeToggle />
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
