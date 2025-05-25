import { CourseTopicRecommendations } from "@/components/course/CourseTopicRecommendations";
import { CourseTopicTitle } from "@/components/course/CourseTopicTitle";
import { Box } from "@mui/material";

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

export default function PreviewTopic() {
  return (
    <Box sx={{ padding: "0.5rem" }}>
      <CourseTopicTitle title="Inteligencia Artificial y los sistemas de recomendacion"/>
      <CourseTopicRecommendations
        label="Tus favoritos"
        recommendations={recommendations}
      />
      <CourseTopicRecommendations
        label="Porque a tus amigos les ha funcionado"
        recommendations={recommendations}
      />
    </Box>
  );
}
