import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type HeroProps = {
  profilePicture: string;
  country: string;
};

const Hero: FC<HeroProps> = ({ profilePicture, country }) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="flex max-md:flex-col justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl md-max:text-2xl font-bold">{t("name")}</h2>
          <h3 className="text-xl font-semibold">{t("job_title")}</h3>
          <p>
            {t("bio")}
            <br />
            {t("based_in")}
            <Badge className="ml-2">
              <Avatar className="w-5 h-5">
                <AvatarImage src={country} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>{t("location")}</span>
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
