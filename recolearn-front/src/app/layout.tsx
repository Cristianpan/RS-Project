import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "@/themes";
import { Navbar, PageHeader, Sidebar } from "@/components";
import { Box } from "@mui/material";

import "./global.css";

const roboto = Roboto({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "RecomLearn",
  description:
    "Aplicación de cursos para universitarios con sistema de recomendación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={baseTheme}>
            <Navbar />
            <PageHeader />
            <Box sx={{display: "grid", gridTemplateColumns: "20% 80%"}}>
              <Sidebar />
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
