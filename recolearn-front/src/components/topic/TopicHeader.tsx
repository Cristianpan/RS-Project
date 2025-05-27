"use client";
import useRecommendationStore from "@/stores/useRecommendationStore";
import { ceilingWithPrecision } from "@/utils";
import { Typography } from "@mui/material";

export const TopicHeader = () => {
  const { currentContent } = useRecommendationStore();

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: "2rem" }}>
        {currentContent?.content}
      </Typography>
      <Typography
        sx={{ fontSize: "0.9rem", color: "secondary.500", marginTop: "1rem" }}
      >
        Duración Aproximada: {ceilingWithPrecision(currentContent?.duration ?? 0)} min
      </Typography>
    </>
  );
};
