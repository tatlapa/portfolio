import {
  Card,
  Heading,
  Text,
  Flex,
  Avatar,
} from "@radix-ui/themes";
import PropTypes from "prop-types";

const Project = (props) => {
  return (
    <>
      <Card asChild key={props.id} className="overflow-visible">
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl flex gap-5"
        >
          <Flex align="center">
            <Avatar src={props.icon} radius="large" className="border-1 px-1" />
          </Flex>
          <Flex direction="column">
            <Heading>{props.title}</Heading>
            <Text>{props.description}</Text>
          </Flex>
        </a>
      </Card>
    </>
  );
};

Project.propTypes = {
  IconComponent: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number,
  icon: PropTypes.string,
  iconPreview: PropTypes.string,
};

export default Project;
