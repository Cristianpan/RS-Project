import { Card, CardContent, Typography } from "@mui/material";
import { SidebarOptions } from "./SidebarOptions";

interface SidebarProps {
  sx?: object
}

export const Sidebar = ({sx = {}}: SidebarProps) => {
  return (
    <Card
      variant="outlined"
      sx={{backgroundColor: "grey.100", height: "auto", ...sx}}
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
