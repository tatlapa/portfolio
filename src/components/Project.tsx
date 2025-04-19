import { FC } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

type ProjectProps = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const Project: FC<ProjectProps> = ({ title, description, url, image }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Card className="shadow-md transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <img src={image} alt="" />
      </HoverCardContent>
    </HoverCard>
  );
};

export default Project;
