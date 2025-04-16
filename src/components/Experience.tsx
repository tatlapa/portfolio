import { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type ExperienceProps = {
  image: string;
  title: string;
  role: string;
  date: string;
};

const Experience: FC<ExperienceProps> = ({ image, title, role, date }) => {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-5">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{role}</p>
          <p>{date}</p>
        </div>
      </div>
    </Card>
  );
};

export default Experience;
