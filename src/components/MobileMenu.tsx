import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 p-6">
        <nav className="flex flex-col gap-6 mt-6">
          <a href="#about" onClick={() => setOpen(false)}>
            {t("nav.about")}
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            {t("nav.projects")}
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            {t("nav.contact")}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
