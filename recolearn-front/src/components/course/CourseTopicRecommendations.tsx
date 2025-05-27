"use client";

import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import useRecommendationStore from "@/stores/useRecommendationStore";
import { ceilingWithPrecision, generateSlug } from "@/utils";

interface CourseTopicRecommendationsProps {
  label: string;
}

export const CourseTopicRecommendations = ({
  label,
}: CourseTopicRecommendationsProps) => {
  const { contents: recommendations, setCurrentContent } =
    useRecommendationStore();

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "grey.100",
        height: "auto",
        marginTop: "1rem",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <TipsAndUpdatesIcon
            sx={{ fontSize: "1.2rem", color: "secondary.500" }}
          />
          <Typography sx={{ fontSize: "1rem", color: "secondary.500" }}>
            {label}
          </Typography>
        </Box>

        <Divider sx={{ marginTop: "0.8rem", borderColor: "grey.300" }} />

        <List
          sx={{
            listStyleType: "disc",
            pl: 4,
          }}
        >
          {recommendations.map((content) => (
            <ListItem
              key={content.id}
              disableGutters
              sx={{
                display: "list-item",
              }}
            >
              <MuiLink
                href={`/topic/${generateSlug(content.content)}`}
                underline="hover"
                component={Link}
                onClick={() => setCurrentContent(content)}
                sx={{
                  fontSize: "0.9rem",
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.500",
                    borderColor: "secondary.primary",
                  },
                }}
              >
                {content.content} - Duración Aproximada:{" "}
                {ceilingWithPrecision(content.duration)} min
              </MuiLink>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
