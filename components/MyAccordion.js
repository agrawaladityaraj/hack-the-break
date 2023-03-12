import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

export const Accordion = styled(MuiAccordion)({
  border: `3px solid black`,
  backgroundColor: "white",
  "&:not(:last-child)": {
    borderBottom: "1px",
  },
  "&:before": {
    display: "none",
  },
});

export const AccordionSummary = styled(MuiAccordionSummary)({
  backgroundColor: "#ef8354",
  color: "white",
});
