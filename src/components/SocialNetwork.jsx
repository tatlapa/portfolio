import PropTypes from "prop-types";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Card, Avatar, Box } from "@radix-ui/themes";

const SocialNetwork = (props) => {
  return (
    <Card asChild>
      <a
        href={props.href}
        className={`${props.className} flex gap-6 items-center justify-center`}
      >
        <Box className="relative">
          <Avatar src="src/assets/profile.jpg" radius="full"></Avatar>
          <props.IconComponent className="absolute bottom-0 right-0"/>
        </Box>
        <div>{props.content}</div>
        <ArrowTopRightIcon className="h-5 w-5 text-white"  />
      </a>
    </Card>
  );
};

SocialNetwork.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  fdp: PropTypes.elementType,
};

export default SocialNetwork;
