import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ProjectProps = {
  icon: string;
  iconPreview?: string;
  title: string;
  description: string;
  url: string;
};

const Project: FC<ProjectProps> = ({ icon, title, description, url }) => {
  return (
    <Card className="overflow-visible">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl flex gap-5 items-start"
      >
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={icon} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </Card>
  );
};

export default Project;
