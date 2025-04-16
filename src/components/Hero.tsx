import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type HeroProps = {
  profilePicture: string;
  country: string;
};

const Hero: FC<HeroProps> = ({ profilePicture, country }) => {
  return (
    <div className="flex max-md:flex-col justify-between w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl md-max:text-2xl font-bold">Jérémy Richard</h2>
        <h3 className="text-xl font-semibold">Front-End Developer</h3>
        <p className="flex gap-2 items-center">
          I love creating websites with React and Next. I am a Front-End
          Developer. Living in 
          <Badge>
            <Avatar>
              <AvatarImage src={country} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Phuket</span>
          </Badge>
        </p>
      </div>
      <div className="max-md:mt-5">
        <Avatar className="h-76 w-full">
          <AvatarImage src={profilePicture} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Hero;
