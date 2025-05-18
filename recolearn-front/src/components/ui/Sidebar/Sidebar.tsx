import { Card, CardContent, Typography } from "@mui/material";
import { SidebarOptions } from "./SidebarOptions";

export const Sidebar = () => {
  return (
    <Card
      variant="outlined"
      sx={{ margin: "0 1rem", backgroundColor: "grey.100" }}
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
          Navegación
        </Typography>

        <SidebarOptions />
      </CardContent>
    </Card>
  );
};
