import { CardContent, Card } from "@mui/material";
import { CourseTopicTitle } from "./CourseTopicTitle";
import { CourseTopicRecommendations } from "./CourseTopicRecommendations";

interface TopicProps {
  title: string;
}

const recommendations = [
  {
    label: "Sitio web",
    duration: "15 min",
  },
  {
    label: "Video",
    duration: "30m",
  },
];

export const CourseTopicCard = ({ title }: TopicProps) => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: "24px" }}>
        <CourseTopicTitle title={title} />

        <CourseTopicRecommendations
          label="Tus favoritos"
          recommendations={recommendations}
        />
        <CourseTopicRecommendations
          label="Porque a tus compañeros les ha funcionado..."
          recommendations={recommendations}
        />
      </CardContent>
    </Card>
  );
};
