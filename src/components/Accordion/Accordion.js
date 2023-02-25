import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container" style={{ paddingBottom: "20px" }}>
      <AccordionSummary
        style={{
          border: "1px dashed #4954648a",
          borderColor: "#4954648a",
          backgroundColor: "#E8E8E8",
          borderRadius: 1,
          marginBottom: 5,
          cursor: "default",
        }}
      >
        <Typography sx={{ width: "100%", fontSize: "25px" }}>
          Hizmetlerimiz
        </Typography>
      </AccordionSummary>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{ backgroundColor: "#F4F4F2" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Esnaf Kurye
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Mardin Esnafının Kurye sıkıntılarını giderecek profesyonel ekibimiz
            ile paketlerinizi hızlı bir şekilde teslim etmekteyiz.
          </Typography>
          <Typography>
            Detaylı bilgi için{" "}
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#ff6d00", textTransform: "none" }}
            >
              {" "}
              tıklayınız.
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={{ backgroundColor: "#F4F4F2" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={{ backgroundColor: "#F4F4F2" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          style={{ backgroundColor: "#F4F4F2" }}
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
