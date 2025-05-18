import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "@/themes";
import { Navbar, PageHeader } from "@/components";

import "./global.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700"],
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
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
