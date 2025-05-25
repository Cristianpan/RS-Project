"use client";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import useUnitAccordionStore from "@/stores/useUnitAccordions";

interface UnitProps {
  course: string;
  title: string;
  children: React.ReactNode;
}

export const Unit = ({ course, title, children }: UnitProps) => {

  const { accordions, toggleAccordion } = useUnitAccordionStore();

  const isOpen = accordions[`${course}-${title}`] || false;
  
  const handleChange = () => {
    toggleAccordion(course, title);
  }

  return (
    <Accordion
      sx={{
        backgroundColor: "inherit",
        border: "none",
        boxShadow: "none",
      }}
      expanded={isOpen}
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
