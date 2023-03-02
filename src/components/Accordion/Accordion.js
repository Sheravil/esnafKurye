import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          Fiyat Seçenekleri
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
          Fiyat seçeneklerinden size en uygun olanı seçelim.
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
          <Typography sx={{ width: "100%", flexShrink: 0, color: "#495464" }}>
            Aylık Ödeme
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Aylık Ödeme seçeneğinde sabit bir fiyatta belirlenir ve o ay
            içerisinde ne kadar paket gönderirseniz aynı ücreti ödersiniz.
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
          <Typography sx={{ width: "100%", flexShrink: 0, color: "#495464" }}>
            Paket Ödeme
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Paket Ödeme seçeneğinde paket başı fiyat belirlenir ve gönderim
            sayısına göre ücreti günlük ve ya haftalık ödersiniz.
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
          <Typography sx={{ width: "100%", flexShrink: 0, color: "#495464" }}>
            Yüzdelik Ödeme
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#F4F4F2" }}>
          <Typography>
            Yüzdelik Ödeme seçeneğinde gönderiminizin ücreti üzerinden
            belirlenecek yüzdelik oranla ödeme yaparsınız.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
