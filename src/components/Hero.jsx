import { Text, Heading, Avatar, Flex, Badge } from "@radix-ui/themes";
import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <Flex className="max-md:flex-col justify-between w-full">
      <Flex direction="column" className="gap-2">
        <Heading as="h2" className="md-max:text-2xl text-5xl">
          Jérémy Richard
        </Heading>
        <Heading as="h3">Front-End Developer</Heading>
        <Text>
          I love creating website on React and Next, I am a Front-End Developer.
          Living in
          <Badge className="inline-flex ml-1">
            <Avatar
              className="w-5 h-auto"
              radius="none"
              src={props.country}
            ></Avatar>
            <Text size="3">Phuket</Text>
          </Badge>
        </Text>
      </Flex>
      <div className="m-auto">
        <Avatar
          className="max-md:w-32 max-md:h-32 w-96 h-96"
          src={props.profilePicture}
          radius="full"
        />
      </div>
    </Flex>
  );
};

Hero.propTypes = {
  profilePicture: PropTypes.string,
  country: PropTypes.string,
};

export default Hero;
