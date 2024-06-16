import PropTypes from "prop-types";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Card, Avatar, Box, Text } from "@radix-ui/themes";

const SocialNetwork = (props) => {
  return (
    <Card asChild className={props.className}>
      <a href={props.href} className="flex items-center justify-between">
        <Box className="relative flex items-center gap-5">
          <Avatar src={props.profilePicture} radius="full"></Avatar>
          <props.IconComponent className="absolute bottom-0 left-6" />
          <Text className="text-xl">{props.content}</Text>
        </Box>
        <ArrowTopRightIcon className="h-5 w-5 text-white" />
      </a>
    </Card>
  );
};

SocialNetwork.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  profilePicture: PropTypes.string,
};

export default SocialNetwork;
