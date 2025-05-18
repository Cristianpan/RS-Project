import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

interface CuAccordionProps {
  title: string;
  children: React.ReactNode;
}

export const CuAccordion = ({ children, title }: CuAccordionProps) => {
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
        expandIcon={<ExpandMoreOutlinedIcon />}
        sx={{
          flexDirection: "row-reverse",
          padding: 0,
          minHeight: "0 !important",
          height: "auto",
          color: "text.primary",
          "& span": { margin: "0 !important", fontSize: "0.9rem !important" },
        }}
      >
        <Typography component="span">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: "0 8px !important" }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};
