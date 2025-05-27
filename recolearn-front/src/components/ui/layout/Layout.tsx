"use client";
import { Box, Card, useMediaQuery } from "@mui/material";
import { Navbar } from "./Navbar";
import { PageHeader } from "./PageHeader";
import { Sidebar } from "./Sidebar/Sidebar";
import { ReactNode, useEffect } from "react";
import useAuthStore from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { Loader } from "../Loader";
import { Recommendations } from "../Recommendations";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { user, hydrated } = useAuthStore();
  const matches = useMediaQuery("(min-width:728px)");
  const router = useRouter();

  useEffect(() => {
    if (!user?.id && hydrated) {
      router.push("/login");
    }
  }, [user, router, hydrated]);

  if (!user || !hydrated) {
    return <Loader />;
  }

  const desktopStyles = {
    alignItems: "flex-start",
    flexDirection: "row"
  };

  const mobileStyles = {
    flexDirection: "column-reverse"
  }

  return (
    <>
      <Navbar />
      <PageHeader />
      <Recommendations />
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          margin: "0 1rem 3.5rem 1rem",
          ...(matches ? desktopStyles : mobileStyles)
        }}
      >
        <Sidebar sx={{ flex: 1 }} />
        <Card variant="outlined" sx={{ padding: "1.2rem 1rem", flex: 4 }}>
          {children}
        </Card>
      </Box>
    </>
  );
};
