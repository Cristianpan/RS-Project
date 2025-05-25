import { LoginForm } from "@/components";
import { Box } from "@mui/material";

export default function LoginPage() {
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

      <LoginForm />
    </Box>
  );
}
