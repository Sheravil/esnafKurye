import React, { useEffect, useState } from "react";

import "./Starting.css";
import bgImage from "./mardin.jpg";

import Box from "@mui/material/Box";
import Typewriter from "typewriter-effect/dist/core";
import { Backdrop } from "@mui/material";
import Home from "../Home/Home";

function Starting() {
  useEffect(() => {
    var app = document.getElementById("heads");

    const typewriter = new Typewriter(app, {
      loop: true,
      cursor: "_",
    });

    typewriter.typeString("Mardin Esnaf Kurye ").pauseFor(5000).start();
  }, []);

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }, []);
  return (
    <Box sx={{ color: "#495464" }}>
      <Home />
      <Backdrop
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "-320px 0",
        }}
        sx={{
          color: "#F4F4F2",
          textShadow: "2px 2px black",
          backgroundColor: "#E8E8E8",
          zIndex: (theme) => theme.zIndex.drawer + 2,
        }}
        open={open}
      >
        <div>
          <h1 id="heads">Mardin</h1>
        </div>
      </Backdrop>
    </Box>
  );
}

export default Starting;
