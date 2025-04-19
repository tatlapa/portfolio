import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type HeroProps = {
  profilePicture: string;
  country: string;
};

const Hero: FC<HeroProps> = ({ profilePicture, country }) => {
  return (
    <div className="container">
      <div className="flex max-md:flex-col justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl md-max:text-2xl font-bold">Jérémy Richard</h2>
          <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
          <p>
            I build modern websites and apps with React, Vue, Laravel, and
            Tailwind. I turn concepts into reliable, elegant, and user-friendly
            digital solutions.
            <br />
            Currently based in
            <Badge className="ml-2">
              <Avatar className="w-5 h-5">
                <AvatarImage src={country} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Phuket</span>
            </Badge>
          </p>
        </div>
        <div className="max-md:mt-5">
          <Avatar className="h-76 w-76">
            <AvatarImage src={profilePicture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Hero;
