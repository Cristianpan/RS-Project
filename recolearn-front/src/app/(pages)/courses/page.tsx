import { CourseCard } from "@/components";
import { Typography, Card, CardContent, Divider, Box } from "@mui/material";

export default function MyCourses() {

  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: "grey.100", height: "auto" }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: 300,
            color: "secondary.500",
            marginBottom: "1rem",
          }}
        >
          Vista General Del Curso
        </Typography>

        <Divider />

        <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" , marginTop: "1.2rem"}}>
          <CourseCard title="Sistemas de recomendación" subtitle="Licenciatura en Ingeniería de Software" slug="sistemas-de-recomendacion" />
        </Box>
      </CardContent>
    </Card>
  );
}
