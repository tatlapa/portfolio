import { FC } from "react";
import { Button } from "@/components/ui/button";

type SocialNetworkProps = {
  content: string;
  href: string;
  IconComponent: React.ElementType;
  iconClassName?: string;
};

const SocialNetwork: FC<SocialNetworkProps> = ({
  content,
  href,
  IconComponent,
  iconClassName = "",
}) => {
  return (
    <a href={href}>
      <Button className="flex items-center justify-center gap-2">
        <IconComponent className={iconClassName} />
        {content}
      </Button>
    </a>
  );
};

export default SocialNetwork;
