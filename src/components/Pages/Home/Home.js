import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import UncontrolledExample from "../../Carousel/Carousel";
import { Grid } from "@mui/material";
import ControlledAccordions from "../../Accordion/Accordion";

function Home() {
  return (
    <Box style={{ color: "#495464" }}>
      <Toolbar />
      <Toolbar />
      <Grid height={200}>
        <h1>Mardin Esnaf Kurye.</h1>
        <h1>Paket Servis Hizmetleri.</h1>
        <p>Kuryemiz size telefonunuz kadar yakın.</p>
      </Grid>
      <Grid container className="bgcolor">
        <Grid xs={1}></Grid>
        <Grid xs={10}>
          <UncontrolledExample />
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      <Toolbar />

      <Grid>
        <ControlledAccordions />
      </Grid>
    </Box>
  );
}

export default Home;
