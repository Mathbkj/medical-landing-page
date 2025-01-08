import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

type AccordionType = {
  named: string;
  content: string;
};

export default function AccordionExpandIcon({ named, content }: AccordionType) {
  return (
    <div className="my-8 accordion-div">
      <Accordion
        sx={{
          backgroundColor: "transparent",
          padding: "10",
          color: "#06d6a0",
          paddingX: 2,
          paddingBottom: 4,
        }}
        slotProps={{ transition: { unmountOnExit: true } }}
      >
        <AccordionSummary
          sx={{ boxShadow: "1px 2px 4px 2px black" }}
          expandIcon={
            <ArrowDownwardIcon
              sx={{ marginHorizontal: 10, color: "#06d6a0" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography color="" component="span">
            {named}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{}}>
          <Typography sx={{ paddingLeft: 10 }}>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
