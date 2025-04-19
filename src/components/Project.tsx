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
import { useTranslation } from "react-i18next";

type ProjectProps = {
  titleKey: string;
  descriptionKey: string;
  url: string;
  image: string;
};

const Project: FC<ProjectProps> = ({
  titleKey,
  descriptionKey,
  url,
  image,
}) => {
  const { t } = useTranslation();

  return (
    <HoverCard>
      <HoverCardTrigger>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Card className="shadow-md transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{t(titleKey)}</CardTitle>
              <CardDescription>{t(descriptionKey)}</CardDescription>
            </CardHeader>
          </Card>
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <img src={image} alt={t(titleKey)} />
      </HoverCardContent>
    </HoverCard>
  );
};

export default Project;
