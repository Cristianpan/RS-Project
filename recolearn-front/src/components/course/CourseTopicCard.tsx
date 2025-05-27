"use client";

import { CardContent, Card } from "@mui/material";
import { CourseTopicTitle } from "./CourseTopicTitle";
import { CourseTopicRecommendations } from "./CourseTopicRecommendations";

interface TopicProps {
  title: string;
}

export const CourseTopicCard = ({ title }: TopicProps) => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: "24px" }}>
        <CourseTopicTitle title={title} />

        <CourseTopicRecommendations
          label="Mejores contenidos para ti y según tus compañeros"
        />
      </CardContent>
    </Card>
  );
};
