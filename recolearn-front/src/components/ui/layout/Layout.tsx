"use client";
import { Box, Card } from "@mui/material";
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
  const router = useRouter();

  useEffect(() => {
    if (!user?.id && hydrated) {
      router.push("/login");
    }
  }, [user, router, hydrated]);

  if (!user || !hydrated) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <PageHeader />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          margin: "0 1rem 3.5rem 1rem",
        }}
      >
        <Sidebar sx={{ flex: 1 }} />
        <Recommendations />
        <Card variant="outlined" sx={{ padding: "1.2rem 1rem", flex: 4 }}>
          {children}
        </Card>
      </Box>
    </>
  );
};
