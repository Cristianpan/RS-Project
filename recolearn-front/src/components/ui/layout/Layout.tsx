"use client";
import { Box, Card } from "@mui/material";
import { Navbar } from "./Navbar";
import { PageHeader } from "./PageHeader";
import { Sidebar } from "./Sidebar/Sidebar";
import { ReactNode, useEffect } from "react";
import useAuthStore from "@/stores/useAuthStore";
import { useRouter, usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { user } = useAuthStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if ((pathname === "/login" || pathname === "/signup") && user) {
      router.push("/courses");
    }

    if (!user && pathname !== "/login" && pathname !== "/signup") {
      router.push("/login");
    }
  }, [pathname, user, router]);

  if (user) {
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
          <Card variant="outlined" sx={{ padding: "1.2rem 1rem", flex: 4 }}>
            {children}
          </Card>
        </Box>
      </>
    );
  }

  return children
};
