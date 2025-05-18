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
      <CardContent>
        <CardHeader
          color="primary"
          title="Mis Cursos"
          sx={{ "& span": { fontSize: "2rem !important", fontWeight: 100 } }}
        />

        <Breadcrumbs aria-label="breadcrumb" sx={{ marginLeft: "1rem" }}>
          <MuiLink underline="none" color="inherit" href="#" component={Link}>
            MUI
          </MuiLink>
          <MuiLink underline="none" color="inherit" href="#" component={Link}>
            Core
          </MuiLink>
          <MuiLink
            underline="none"
            color="text.primary"
            href="#"
            aria-current="page"
            component={Link}
          >
            Breadcrumbs
          </MuiLink>
        </Breadcrumbs>
      </CardContent>
    </Card>
  );
};
