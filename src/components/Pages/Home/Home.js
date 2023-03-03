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
      <Grid xs={12}>
        <h1>Mardin Esnaf Kurye</h1>
        <h1>Paket Servis Hizmetleri</h1>
        <p>Kuryemiz size telefonunuz kadar yakın</p>
      </Grid>
      <Grid container sx={{ p: 5 }}>
        <Grid sm={3}></Grid>
        <Grid xs={12} sm={3}>
          <Link to="Teklif" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#DC0000",
                textTransform: "none",
                margin: "10px 0px",
              }}
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
            >
              İşletmem için teklif almak istiyorum
            </Button>
          </Link>
        </Grid>
        <Grid xs={12} sm={3}>
          <Link to="Kurye" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              style={{
                backgroundColor: "#DC0000",
                textTransform: "none",
                margin: "10px 0px",
              }}
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
            >
              Esnaf Kurye Olmak İstiyorum
            </Button>
          </Link>
        </Grid>
        <Grid sm={3}></Grid>
      </Grid>
      <Grid container className="bgcolor">
        <Grid xs={1} sm={2}></Grid>
        <Grid xs={10} sm={8}>
          <UncontrolledExample />
        </Grid>
        <Grid xs={1} sm={2}></Grid>
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
