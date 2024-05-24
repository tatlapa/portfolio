import proptTypes from "prop-types";
import { Button } from "@radix-ui/themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Mode = (props) => {
  return (
    <Button
      onClick={props.toggleAppearance}
    >
      {props.appearance === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

Mode.propTypes = {
  toggleAppearance: proptTypes.func,
  appearance: proptTypes.string,
};

export default Mode;
