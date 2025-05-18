import { CuAccordion } from "../CuAccordion";
import { Link as MuiLink, Box } from "@mui/material";
import Link from "next/link";

export const SidebarOptions = () => {
  return (
    <CuAccordion title="Mis Cursos" href="/courses">
      <CuAccordion title="Sistemas de recomendación" href="/course/sistemas-de-recomendacion">
        <CuAccordion title="Unidad 1: Los sistemas de recomendacion">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              paddingLeft: "0.8rem",
            }}
          >
            <MuiLink
              component={Link}
              href={"/topic/preview/example"}
              sx={{ fontSize: "0.9rem", color: "text.primary" }}
              underline="hover"
            >
              Inteligencia artificial y los sistemas de recomendacion
            </MuiLink>
            
          </Box>
        </CuAccordion>
      </CuAccordion>
    </CuAccordion>
  );
};
