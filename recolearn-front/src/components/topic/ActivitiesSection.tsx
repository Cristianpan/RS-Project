"use client";
import { Typography, Divider, List, ListItem } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import useRecommendationStore from "@/stores/useRecommendationStore";
import { ceilingWithPrecision } from "@/utils";

export const ActivitiesSection = () => {
  const { activities, currentContent } = useRecommendationStore();

  return (
    <>
      <Typography
        sx={{
          fontSize: "0.9rem",
          color: "secondary.500",
          marginTop: "1rem",
        }}
      >
        <TipsAndUpdatesIcon
          sx={{ fontSize: "1.2rem", color: "secondary.500" }}
        />{" "}
        Actividades recomendadas para el contenido: {currentContent?.content}
      </Typography>

      <Divider sx={{ borderColor: "grey.400", margin: "0.5rem 0 0.5rem 0" }} />
      <List
        sx={{
          listStyleType: "disc",
          pl: 4,
        }}
      >
        {activities.map((activity) => (
          <ListItem
            key={activity.id}
            disableGutters
            sx={{
              display: "list-item",
              fontSize: "0.9rem",
              color: "primary.main",
            }}
          >
            {activity.activity} - Duración Aproximada:{" "}
            {ceilingWithPrecision(activity.duration)} min
          </ListItem>
        ))}
      </List>
    </>
  );
};
