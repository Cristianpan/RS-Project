"use client";
import useRecommendationStore from "@/stores/useRecommendationStore";
import { ceilingWithPrecision } from "@/utils";
import { Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export const TopicHeader = () => {
  const [rateValue, setRateValue] = useState(0);
  const { currentContent } = useRecommendationStore();

  return (
    <>
      <Typography variant="h1" sx={{ fontSize: "2rem" }}>
        {currentContent?.content}
      </Typography>
      <Typography
        sx={{ fontSize: "0.9rem", color: "secondary.500", marginTop: "1rem" }}
      >
        Duración Aproximada:{" "}
        {ceilingWithPrecision(currentContent?.duration ?? 0)} min
      </Typography>
      <Rating
        sx={{ marginTop: "0.5rem", color: "secondary.500"}}
        size="medium"
        name="simple-controlled"
        value={rateValue}
        onChange={(event, newValue) => {
          setRateValue(newValue as number);
        }}
      />
    </>
  );
};
