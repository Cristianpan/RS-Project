import {
  Box,
  Typography,
  Link as MuiLink,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import Link from "next/link";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export default function PreviewTopic() {
  return (
    <Box sx={{ padding: "0.5rem" }}>
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
          <LayersOutlinedIcon sx={{ color: "#fff", fontSize: "1.8rem" }} />
        </Box>
        <Typography variant="h1" sx={{ fontSize: "1.6rem" }}>
          Inteligencia Artificial y los sistemas de recomendación
        </Typography>
      </Box>
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
              ¡Porque tus amigos no entendieron nada!
            </Typography>
          </Box>

          <Divider sx={{ marginTop: "0.8rem", borderColor: "grey.300" }} />

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
              }}
            >
              <MuiLink
                href={`/topic/example`}
                underline="hover"
                component={Link}
                sx={{
                  fontSize: "0.9rem",
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.500",
                    borderColor: "secondary.primary",
                  },
                }}
              >
                Recomendación 1 - Duración aproximada: 1 año
              </MuiLink>
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                display: "list-item",
              }}
            >
              <MuiLink
                href={`/topic/example`}
                underline="hover"
                component={Link}
                sx={{
                  fontSize: "0.9rem",
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.500",
                    borderColor: "secondary.primary",
                  },
                }}
              >
                Recomendación 1 - Duración aproximada: 1 año
              </MuiLink>
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                display: "list-item",
              }}
            >
              <MuiLink
                href={`/topic/example`}
                underline="hover"
                component={Link}
                sx={{
                  fontSize: "0.9rem",
                  color: "primary.main",
                  "&:hover": {
                    color: "secondary.500",
                    borderColor: "secondary.primary",
                  },
                }}
              >
                Recomendación 1 - Duración aproximada: 1 año
              </MuiLink>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
