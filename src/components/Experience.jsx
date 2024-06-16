import PropTypes from "prop-types";
import { Card, Avatar, Flex, Heading, Text } from "@radix-ui/themes";

const Experience = (props) => {
  return (
    <>
      <Card className="p-5">
        <Flex align="center" gap="5">
          <Avatar src={props.image} radius="full" />
          <Flex direction="column">
            <Heading as="h2" className="text-xl">{props.title}</Heading>
            <Text>{props.role}</Text>
            <p>{props.date}</p>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

Experience.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
  date: PropTypes.string,
};

export default Experience;
