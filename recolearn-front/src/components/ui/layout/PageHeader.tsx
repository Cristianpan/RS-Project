"use client";
import {
  Card,
  CardContent,
  CardHeader,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const PageHeader = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("Mis Cursos");
  const [breadcrumbs, setBreadcrumbs] = useState<
    { label: string; href: string }[]
  >([]);

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const newBreadcrumbs: { label: string; href: string }[] = []

    if (segments.includes("courses")) {
      setTitle("Mis Cursos");
    }

    if (segments.includes("course")) {
      const title = segments[segments.indexOf("course") + 1].replaceAll(
        "-",
        " "
      );
      setTitle(title);
      newBreadcrumbs.push({ label: title, href: pathname });
    }
    setBreadcrumbs([{ label: "Mis Cursos", href: "/courses" }, ...newBreadcrumbs]);
  }, [pathname]);

  return (
    <Card variant="outlined" sx={{ margin: "1.2rem 1rem" }}>
      <CardContent sx={{ padding: "1.25rem" }}>
        <CardHeader
          color="text"
          title={title}
          sx={{
            padding: "0 1rem 1rem 0",
            "& span": {
              fontSize: "2rem !important",
              fontWeight: 300,
              textTransform: "capitalize",
            },
          }}
        />

        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <MuiLink
              key={index}
              underline="none"
              href={breadcrumb.href}
              component={Link}
              sx={{
                fontSize: "0.9rem",
                transition: "color 0.3s",
                textTransform: "capitalize",
                ":hover": {
                  color: "secondary.500",
                  textDecoration: "underline",
                  textDecorationColor: "secondary.main",
                },
              }}
            >
              {breadcrumb.label}
            </MuiLink>
          ))}
        </Breadcrumbs>
      </CardContent>
    </Card>
  );
};
