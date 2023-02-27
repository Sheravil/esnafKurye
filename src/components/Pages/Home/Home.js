import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import UncontrolledExample from "../../Carousel/Carousel";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logos from "../../Logos/Logos";

function Home() {
  return (
    <Box style={{ color: "#495464" }}>
      <Toolbar />
      <Toolbar />
      <Grid>
        <h1>Mardin Esnaf Kurye</h1>
        <h1>Paket Servis Hizmetleri</h1>
        <p>Kuryemiz size telefonunuz kadar yakın</p>
      </Grid>
      <Grid>
        <Link to="Contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#ff6d00",
              textTransform: "none",
              margin: "10px 0px",
            }}
          >
            İşletmem için teklif almak istiyorum
          </Button>
        </Link>
      </Grid>
      <Grid>
        <Link to="Contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#ff6d00",
              textTransform: "none",
              margin: "10px 0px",
            }}
          >
            Esnaf Kurye Olmak İstiyorum
          </Button>
        </Link>
      </Grid>
      <Toolbar />
      <Grid container className="bgcolor">
        <Grid xs={1}></Grid>
        <Grid xs={10}>
          <UncontrolledExample />
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      <Toolbar />
      <Grid>
        <h1>Anlaşmalı Firmalar</h1>
      </Grid>
      <Toolbar />
      <Grid>
        <Logos />
      </Grid>
      <Toolbar />
    </Box>
  );
}

export default Home;
