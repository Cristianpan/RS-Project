import {
  Card,
  CardContent,
  CardHeader,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

export const PageHeader = () => {
  return (
    <Card variant="outlined" sx={{ margin: "1.2rem 1rem" }}>
      <CardContent sx={{ padding: "1.25rem" }}>
        <CardHeader
          color="text"
          title="Mis cursos"
          sx={{
            padding: "0 1rem 1rem 0",
            "& span": { fontSize: "2rem !important", fontWeight: 300 },
          }}
        />

        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink
            underline="none"
            color="inherit"
            href="#"
            sx={{ fontSize: "0.9rem" }}
            component={Link}
          >
            MUI
          </MuiLink>
          <MuiLink
            underline="none"
            color="inherit"
            href="#"
            component={Link}
            sx={{ fontSize: "0.9rem" }}
          >
            Core
          </MuiLink>
          <MuiLink
            underline="none"
            color="text.primary"
            href="#"
            aria-current="page"
            component={Link}
            sx={{ fontSize: "0.9rem" }}
          >
            Breadcrumbs
          </MuiLink>
        </Breadcrumbs>
      </CardContent>
    </Card>
  );
};
