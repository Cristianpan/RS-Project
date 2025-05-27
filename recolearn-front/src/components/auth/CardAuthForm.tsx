import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";

export const CardAuthForm = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => {
  return (
    <Card sx={{ padding: 2, width: "35rem", textAlign: "center" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            margin: "1rem 0 3rem 0",
          }}
        >
          <Image
            src="/UADY.svg"
            alt="RecomLearn Logo"
            width={120}
            height={120}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "secondary.500",
            }}
          >
            RecomLearn - FMAT
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              color: "text.primary",
              fontWeight: "semi-bold",
            }}
          >
            {label}
          </Typography>
        </Box>

        {children}
      </CardContent>
    </Card>
  );
};
