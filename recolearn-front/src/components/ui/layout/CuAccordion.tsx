import {
  Accordion,
  AccordionSummary,
  Link as MuiLink,
  AccordionDetails,
} from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Link from "next/link";

interface CuAccordionProps {
  title: string;
  children: React.ReactNode;
  href?: string
}

export const CuAccordion = ({ children, title, href = "#" }: CuAccordionProps) => {
  return (
    <Accordion
      sx={{
        padding: 0,
        backgroundColor: "inherit",
        border: "none",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowForwardIosOutlinedIcon color="primary" sx={{fontSize: "0.8rem"}} />}
        sx={{
          flexDirection: "row-reverse",
          padding: 0,
          minHeight: "0 !important",
          height: "auto",
          color: "text.primary",
          "& span": { margin: "0.25rem 0.1rem !important" },
          ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
          },
        }}
      >
        <MuiLink component={Link} underline="hover" sx={{fontSize: "0.9rem"}} href={href}>{title}</MuiLink>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0 8px !important" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
