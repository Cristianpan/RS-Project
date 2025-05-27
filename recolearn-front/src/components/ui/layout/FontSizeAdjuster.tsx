"use client";

import useAdjustedFontSizeStore from "@/stores/useAdjustedFontSize";
import { Box, Slider, Typography } from "@mui/material";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 10,
    label: "+10%",
  },
  {
    value: 20,
    label: "+20%",
  },
  {
    value: 30,
    label: "+30%",
  },
];

const DEFULT_FONT_SIZE = 100;

export const FontSizeAdjuster = () => {
  const { adjustedFontSize, setAdjustedFontSize } = useAdjustedFontSizeStore();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography sx={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
        Ajustar tamaño de la fuente
      </Typography>
      <Slider
        size="small"
        aria-label="Font Size Adjuster"
        value={(adjustedFontSize ?? 100) - DEFULT_FONT_SIZE}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        max={30}
        onChange={(event, newValue) => {
          setAdjustedFontSize((newValue as number) + DEFULT_FONT_SIZE);
        }}
      />
    </Box>
  );
};
