import PropTypes from "prop-types";
import { Heading, Box, Text } from "@radix-ui/themes";

const Skill = (props) => {
  return (
    <>
      <Box
        align="center"
        className={`${props.className} w-1/3 px-8 flex flex-col max-md:flex-row gap-8 items-center`}
      >
        <img src={props.logo} className="w-1/2 h-32" />
        <Heading align="center">{props.content}</Heading>
        <Text>{props.textContent}</Text>
      </Box>
    </>
  );
};

Skill.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  logo: PropTypes.string,
  textContent: PropTypes.string,
};

export default Skill;
