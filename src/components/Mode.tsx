import { RxMoon, RxSun } from "react-icons/rx";
import { Button } from "@/components/ui/button";

type ModeProps = {
  toggleAppearance: () => void;
  appearance: string;
};

const Mode = ({ toggleAppearance, appearance }: ModeProps) => {
  return (
    <Button onClick={toggleAppearance} size="icon">
      {appearance === "dark" ? <RxMoon /> : <RxSun />}
    </Button>
  );
};

export default Mode;
