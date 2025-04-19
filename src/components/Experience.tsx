import { FC } from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

type ExperienceProps = {
  title: string;
  role: string;
  date: string;
};

const Experience: FC<ExperienceProps> = ({ title, role, date }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{role}</p>
        <p>{date}</p>
      </CardContent>
    </Card>
  );
};

export default Experience;
