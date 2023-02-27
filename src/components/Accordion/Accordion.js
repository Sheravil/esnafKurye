import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Contact from "../Pages/Contact/Contact";
import { Link } from "react-router-dom";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container" style={{ paddingBottom: "20px" }}>
      <AccordionSummary
        style={{
          border: "1px dashed #ff6d00",
          borderColor: "#ff6d00",
          backgroundColor: "#F4F4F2",
          borderRadius: 1,
          marginBottom: 1,
          cursor: "default",
        }}
      >
        <Typography sx={{ width: "100%", fontSize: "25px" }}>
          Hizmetlerimiz
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        style={{
          backgroundColor: "#F4F4F2",
          border: "1px solid #BBBFCA",
          borderColor: "#BBBFCA",
        }}
      >
        <Typography>
          Esnafın Kurye sıkıntılarını giderecek profesyonel ekibimiz ile
          paketlerinizi hızlı bir şekilde teslim ediyoruz
        </Typography>
      </AccordionDetails>
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
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Yemek</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Yemek siparişlerinizi işletmenizden en kısa sürede alıp adrese
            teslim ediyoruz.
          </Typography>
          <Typography>
            Detaylı bilgi için{" "}
            <Link to="Contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "#ff6d00",
                  textTransform: "none",
                }}
              >
                {" "}
                tıklayınız
              </Button>
            </Link>
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
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Market</Typography>
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
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Kıyafet</Typography>
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
            Belgeler
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
