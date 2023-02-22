import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import UncontrolledExample from "../../Carousel/Carousel";
import { Grid } from "@mui/material";

function Home() {
  return (
    <Box>
      <Toolbar />
      <Grid container>
        <Grid sm={1}></Grid>
        <Grid sm={10}>
          <UncontrolledExample />
        </Grid>
        <Grid sm={1}></Grid>
      </Grid>
    </Box>
  );
}

export default Home;
