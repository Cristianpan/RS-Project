import { CuAccordion } from "../CuAccordion";
import { Link as MuiLink, Box } from "@mui/material";
import Link from "next/link";

export const SidebarOptions = () => {
  return (
    <CuAccordion title="Mis Cursos">
      <CuAccordion title="Sistemas de recomendación">
        <CuAccordion title="Temas">
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
              href={"#"}
              sx={{ fontSize: "0.9rem", color: "text.primary" }}
              underline="hover"
            >
              - Tema numero uno
            </MuiLink>
            <MuiLink
              component={Link}
              href={"#"}
              sx={{ fontSize: "0.9rem", color: "text.primary" }}
              underline="hover"
            >
              - Tema numero dos
            </MuiLink>
            <MuiLink
              component={Link}
              href={"#"}
              sx={{ fontSize: "0.9rem", color: "text.primary" }}
              underline="hover"
            >
              - Tema numero tres
            </MuiLink>
          </Box>
        </CuAccordion>
      </CuAccordion>
    </CuAccordion>
  );
};
