import { Box, Heading } from "@radix-ui/themes";
import Mode from "./Mode";
import proptTypes from "prop-types";


const Header = ({toggleAppearance, appearance}) => {
  return (
    <header className="flex justify-between bg-[#111A27] px-36 py-6 items-center border-b-1 border-[#1B537B]">
      <Heading className="text-white">My Portfolio</Heading>
      <Box className="flex items-center">
        <ul className="flex gap-5 items-center justify-center text-white">
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
          <Mode toggleAppearance = {toggleAppearance} appearance={appearance}/>
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
