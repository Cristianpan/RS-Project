"use client";
import useAuthStore from "@/stores/useAuthStore";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    if (user) {
      router.push("/courses");
    }
  }, [user, router]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f0f0f0",
      }}
    >
      {children}
    </Box>
  );
};
