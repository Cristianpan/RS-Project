import { Box, Typography } from "@mui/material";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";

interface CourseTopicTitleProps {
  title: string;
}

export const CourseTopicTitle = ({ title }: CourseTopicTitleProps) => {
  return (
    <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: "1",
          width: "50px",
          backgroundColor: "#399be2",
          borderRadius: "0.4rem",
        }}
      >
        <LayersOutlinedIcon sx={{ color: "white", fontSize: "1.8rem" }} />
      </Box>
      <Typography sx={{ fontWeight: "400" }}>{title}</Typography>
    </Box>
  );
};
