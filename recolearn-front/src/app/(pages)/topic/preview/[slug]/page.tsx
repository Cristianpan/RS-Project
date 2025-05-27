import { CourseTopicRecommendations } from "@/components/course/CourseTopicRecommendations";
import { CourseTopicTitle } from "@/components/course/CourseTopicTitle";
import { Box } from "@mui/material";

export default function PreviewTopic() {
  return (
    <Box sx={{ padding: "0.5rem" }}>
      <CourseTopicTitle title="Inteligencia Artificial y los sistemas de recomendacion" />
      <CourseTopicRecommendations label="Mejores contenidos para ti y según tus compañeros" />
    </Box>
  );
}
