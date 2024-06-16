import PropTypes from "prop-types";
import { Heading, Box, Text } from "@radix-ui/themes";

const Skill = (props) => {
  return (
    <>
      <Box
        className={`${props.className} max-md:w-full w-1/3 max-md:px-0 px-8 flex flex-col gap-2 max-md:items-start max-md:text-start text-center items-center`}
      >
        <img src={props.logo} className="max-md:w-16 max-md:h-16 h-32" />
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
