import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import Accordion from "../../Accordion/Accordion";
import Img from "./contract.png";

function Price() {
  return (
    <Box component="main" sx={{ color: "#495464" }}>
      <Toolbar />
      <Grid container sx={{ display: "contents" }}>
        <Grid sx={{ p: 3 }}>
          <h1>İşletmeniz İçin En Uygun Teklifi Seçin</h1>
        </Grid>
        <Grid xs={12} className="bgcolor " sx={{ p: "5px 50px" }}>
          <img src={Img} alt="First slide" height={400} />
        </Grid>
        <Grid>
          <Toolbar />
          <Grid container>
            <Grid sm={2}></Grid>
            <Grid sm={8}>
              <Accordion />
            </Grid>
            <Grid sm={2}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Price;
