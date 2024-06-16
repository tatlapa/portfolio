import { Box, Heading } from "@radix-ui/themes";
import Mode from "./Mode";
import proptTypes from "prop-types";

const Header = (props) => {
  return (
    <header className="flex justify-between bg-[#111A27] max-md:px-4 max-md:py-4 px-36 py-6 items-center border-b-1 border-[#1B537B]">
      <Heading className="text-white items-center flex gap-2 max-md:text-sm">
      <props.IconComponent className="max-md:w-4 max-md:h4 w-8 h-8"/>jeremyrichard.fr
      </Heading>
      <Box className="flex items-center">
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
          <Mode
            toggleAppearance={props.toggleAppearance}
            appearance={props.appearance}
          />
        </ul>
      </Box>
    </header>
  );
};

Header.propTypes = {
  toggleAppearance: proptTypes.func,
  appearance: proptTypes.string,
};

export default Header;
