import { FC } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type SocialNetworkProps = {
  content: string;
  className?: string;
  href: string;
  profilePicture: string;
  IconComponent: React.ElementType;
};

const SocialNetwork: FC<SocialNetworkProps> = ({
  content,
  className,
  href,
  profilePicture,
  IconComponent,
}) => {
  return (
    <Card className={className}>
      <a href={href} className="flex items-center justify-between">
        <div className="relative flex items-center gap-5">
          <Avatar>
            <AvatarImage src={profilePicture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <IconComponent className="absolute bottom-0 left-6" />
          <span className="text-xl">{content}</span>
        </div>
        <RxArrowTopRight className="h-5 w-5 text-white" />
      </a>
    </Card>
  );
};

export default SocialNetwork;
