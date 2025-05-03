import { FC } from "react";
import { Button } from "@/components/ui/button";

type SocialNetworkProps = {
  content: string;
  href: string;
  IconComponent: React.ElementType;
  iconClassName?: string;
  buttonClassName?: string;
};

const SocialNetwork: FC<SocialNetworkProps> = ({
  content,
  href,
  IconComponent,
  iconClassName = "",
  buttonClassName = "",
}) => {
  return (
    <a href={href}>
      <Button className={buttonClassName}>
        <IconComponent className={iconClassName} />
        {content}
      </Button>
    </a>
  );
};

export default SocialNetwork;
