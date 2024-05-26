import {
  Card,
  Heading,
  Text,
  Flex,
  Avatar,
  HoverCard,
  Box,
  Inset,
} from "@radix-ui/themes";
import PropTypes from "prop-types";

const Project = (props) => {

  return (
    <>
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Card asChild key={props.id} className="overflow-visible">
            <a href={props.url} className="rounded-xl flex gap-5">
              <Flex align={"center"}>
                <Avatar src={props.icon} radius="large" className="border-1 px-1" />
              </Flex>
              <Flex direction="column">
                <Heading>{props.title}</Heading>
                <Text>{props.description}</Text>
              </Flex>
            </a>
          </Card>
        </HoverCard.Trigger>
        <HoverCard.Content
          width="100vh"
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Flex>
            <Box
              asChild
              flexShrink="0"
              style={{
                padding: "0",
              }}
            >
              <Inset pr="current">
                <img
                  src={props.iconPreview}
                  alt={`preview ${props.title}`}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    height: "80vh",
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
            </Box>
          </Flex>
        </HoverCard.Content>
      </HoverCard.Root>
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
