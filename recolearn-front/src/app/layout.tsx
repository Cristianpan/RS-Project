import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from "@/themes";
import { Navbar } from "@/components";

import "./global.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-poppins",
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
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={baseTheme}>
            <Navbar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
