import { Box } from "@mui/material";
import React from "react";

function Map() {
  return (
    <Box sx={{ marginTop: 3, height: { xs: "35vh", sm: "80vh" } }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.2467042352605!2d40.70158961523842!3d37.33666767984155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400a8f19fdd15be1%3A0xdc9749e3acddfbf8!2sD%C3%BCnya%20D%C3%B6ner%20Kumru%20Mardin!5e0!3m2!1str!2str!4v1677046011472!5m2!1str!2str"
        style={{ border: 0, width: "80%", height: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
}

export default Map;
