"use client";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState } from "react";

interface UnitProps {
  title: string;
  children: React.ReactNode;
}

export const Unit = ({ title, children }: UnitProps) => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  }

  return (
    <Accordion
      sx={{
        backgroundColor: "inherit",
        border: "none",
        boxShadow: "none",
      }}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        expandIcon={
          <ArrowForwardIosOutlinedIcon
            color="primary"
            fontSize="medium"
            fontWeight={700}
          />
        }
        sx={{
          flexDirection: "row-reverse",
          padding: "1rem 0",
          minHeight: "0 !important",
          height: "auto",
          color: "text.primary",
          "& span": { margin: "0 0.3rem !important" },
          ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        }}
      >
        <Typography component="h3" sx={{ fontSize: "1.6rem", fontWeight: 300 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0 8px !important" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
