import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const targetLanguage = i18n.language === "fr" ? "English" : "Français";

  return (
    <Button
      onClick={toggleLanguage}
      size="sm"
      className="md:h-9 md:px-4 has-[>svg]:px-3"
    >
      <GlobeIcon />
      {targetLanguage}
    </Button>
  );
};

export default LanguageSwitcher;
