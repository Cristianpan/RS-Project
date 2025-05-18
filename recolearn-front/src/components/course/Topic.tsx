import {
  CardContent,
  Card,
  Box,
  Typography,
  Link as MuiLink,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import Link from "next/link";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export const Topic = () => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: "24px" }}>
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
          <Typography sx={{ fontWeight: "400" }}>
            Inteligencia artificial y los sistemas de recomendacion
          </Typography>
        </Box>

        <Card
          sx={{
            boxShadow: "none", 
            border: "none",
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
      </CardContent>
    </Card>
  );
};
