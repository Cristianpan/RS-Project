import { Box, Card } from "@mui/material";
import { Navbar } from "./Navbar";
import { PageHeader } from "./PageHeader";
import { Sidebar } from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <PageHeader />
      <Box sx={{ display: "flex", gap: "1rem", margin: "0 1rem" }}>
        <Sidebar sx={{flex: 1}} />
        <Card variant="outlined" sx={{ padding: "1.2rem 1rem", flex: 4 }}>
          {children}
        </Card>
      </Box>
    </>
  );
};
