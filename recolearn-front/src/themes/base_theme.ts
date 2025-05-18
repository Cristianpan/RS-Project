"use client";
import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#332D56",
    },
    secondary: {
      main: "#FF9F00",
      "500": "#c68d2a"
    },
    text: {
      primary: "#3E3F5B",
    },
    grey: {
      "100": "#F9F9F9",
      "200": "#DEDEDE",
    },
  },
});
