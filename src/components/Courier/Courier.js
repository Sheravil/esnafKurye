import { Grid, Toolbar } from "@mui/material";
import React from "react";
import Img from "./courier.png";
import "./Courier.css";

function Courier() {
  return (
    <Grid className="stick">
      <Toolbar />
      <Grid className="street" paddingTop={1}>
        <img
          className=" Animate"
          id="anime"
          src={Img}
          height={60}
          style={{ paddingBottom: 10 }}
        />
      </Grid>
    </Grid>
  );
}

export default Courier;
