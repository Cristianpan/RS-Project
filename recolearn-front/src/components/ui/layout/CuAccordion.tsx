"use client";
import {
  Accordion,
  AccordionSummary,
  Link as MuiLink,
  AccordionDetails,
  Box,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

interface CuAccordionProps {
  title: string;
  children: React.ReactNode;
  href?: string;
}

export const CuAccordion = ({ children, title, href }: CuAccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event: SyntheticEvent) => {
    if (
      event.target instanceof SVGElement &&
      event.target.tagName.toLowerCase() === "svg"
    ) {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <Accordion
      sx={{
        padding: 0,
        backgroundColor: "inherit",
        border: "none",
        boxShadow: "none",
      }}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        expandIcon={
          <Box
            sx={{
              ":hover": { backgroundColor: "grey.300" },
              padding: "0.3rem 0.3rem 0.1rem 0.3rem",
              borderRadius: "50%",
              transition: "background-color 0.1s ease-in-out",
            }}
          >
            <ArrowForwardIosOutlinedIcon
              color="primary"
              sx={{ fontSize: "0.8rem" }}
            />
          </Box>
        }
        sx={{
          flexDirection: "row-reverse",
          padding: 0,
          minHeight: "0 !important",
          height: "auto",
          color: "text.primary",
          "& span": { margin: "0.25rem 0.1rem !important" },
          ".MuiAccordionSummary-expandIconWrapper:hover": {
            backgroundColor: "gray.200",
          },
          ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        }}
      >
        {href ? (
          <MuiLink
            component={Link}
            underline="hover"
            sx={{ fontSize: "0.9rem" }}
            href={href}
          >
            {title}
          </MuiLink>
        ) : (
          <span style={{ fontSize: "0.9rem" }}>{title}</span>
        )}
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0 8px !important" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
