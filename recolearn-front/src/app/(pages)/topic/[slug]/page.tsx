import { Typography, Box, Divider, List, ListItem } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export default function Topic() {
  return (
    <>
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="h1" sx={{ fontSize: "2rem" }}>
          Recomendacion 1
        </Typography>
        <Typography
          sx={{ fontSize: "0.9rem", color: "secondary.500", marginTop: "1rem" }}
        >
          Duración: 1 año
        </Typography>

        <Divider sx={{ borderColor: "grey.400", margin: "1rem 0" }} />

        <Typography sx={{ fontSize: "0.9rem", color: "grey.800" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          varius sapien, sodales luctus nulla. Pellentesque quis enim nibh.
          Curabitur eu lacus non tortor gravida maximus vel a leo. In ultricies
          congue varius. Ut a hendrerit lorem. Nam lobortis lorem nisl, a
          vehicula enim malesuada quis. Cras dignissim augue placerat purus
          pretium, sit amet vestibulum neque posuere. Suspendisse nunc turpis,
          lobortis ut suscipit at, ultricies vulputate orci.
        </Typography>
        <br />
        <Typography sx={{ fontSize: "0.9rem", color: "grey.800" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          varius sapien, sodales luctus nulla. Pellentesque quis enim nibh.
          Curabitur eu lacus non tortor gravida maximus vel a leo. In ultricies
          congue varius. Ut a hendrerit lorem. Nam lobortis lorem nisl, a
          vehicula enim malesuada quis. Cras dignissim augue placerat purus
          pretium, sit amet vestibulum neque posuere. Suspendisse nunc turpis,
          lobortis ut suscipit at, ultricies vulputate orci.
        </Typography>
        <br />
        <Typography sx={{ fontSize: "0.9rem", color: "grey.800" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          varius sapien, sodales luctus nulla. Pellentesque quis enim nibh.
          Curabitur eu lacus non tortor gravida maximus vel a leo. In ultricies
          congue varius. Ut a hendrerit lorem. Nam lobortis lorem nisl, a
          vehicula enim malesuada quis. Cras dignissim augue placerat purus
          pretium, sit amet vestibulum neque posuere. Suspendisse nunc turpis,
          lobortis ut suscipit at, ultricies vulputate orci.
        </Typography>
        <Box sx={{marginTop: "2rem"}}>
          <Typography variant="h2" sx={{ fontSize: "1.6rem" }}>
            ¡Evalua tus conocimientos!
          </Typography>
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
            Porque tus amigos reprobaron todo, te recomendamos lo siguiente...
          </Typography>

          <Divider sx={{ borderColor: "grey.400", margin: "1rem 0 0.5rem 0" }} />
          <List
            sx={{
              listStyleType: "disc",
              pl: 4,
            }}
          >
            <ListItem
              disableGutters
              sx={{
                display: "list-item",
                fontSize: "0.9rem",
                color: "primary.main",
              }}
            >
              Recomendación 1 - Duración aproximada: 1 año
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                display: "list-item",
                fontSize: "0.9rem",
                color: "primary.main",
              }}
            >
              Recomendación 1 - Duración aproximada: 1 año
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                display: "list-item",
                fontSize: "0.9rem",
                color: "primary.main",
              }}
            >
              Recomendación 1 - Duración aproximada: 1 año
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
