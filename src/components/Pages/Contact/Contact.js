import React from "react";

import "./Contact.css";
import Map from "./GoogleMap";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import ReactWhatsapp from "react-whatsapp";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <Box component="main" style={{ padding: 0 }}>
      <Typography className="Clouds">
        <Grid container>
          <Grid
            xs={12}
            sm={6}
            sx={{
              marginTop: { xs: 3, sm: 3 },
              padding: { xs: 0, sm: 10 },
              fontSize: 30,
            }}
          >
            <Grid xs={12}>
              <h1>Mardin Esnaf Kurye</h1>
            </Grid>
            <Grid xs={12}>
              <h3>Paket Servis Hizmetleri</h3>
            </Grid>
            <Grid xs={12}>
              <ReactWhatsapp
                number="90-545-210-4247"
                message="Merhaba esnafakurye ile ilgili detaylı bilgi almak istiyorum."
                style={{ border: "none", background: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color: "green",
                    textTransform: "none",
                    fontWeight: "bold",
                    backgroundColor: "F4F4F2",
                  }}
                  startIcon={<WhatsAppIcon />}
                  color="inherit"
                >
                  WhatsApp
                </Button>
              </ReactWhatsapp>
            </Grid>
            <Grid xs={12}>
              <a
                href="https://www.instagram.com/esnafa_kurye/?igshid=NmQ2ZmYxZjA%3Dm"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    color: "#DC0000",
                    backgroundColor: "F4F4F2",
                    fontWeight: "bold",
                    textTransform: "none",
                    marginTop: "10px",
                  }}
                  startIcon={<InstagramIcon />}
                >
                  esnafa_kurye
                </Button>
              </a>
            </Grid>
            <Grid xs={12}>
              <a href="tel:+905452104247" style={{ textDecoration: "none" }}>
                <Button
                  className="hovercolor"
                  variant="contained"
                  color="inherit"
                  sx={{
                    color: "#DC0000",
                    backgroundColor: "F4F4F2",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                  startIcon={<CallIcon />}
                >
                  0545 210 42 47
                </Button>
              </a>
            </Grid>
            <Grid xs={12}>
              <a
                href="mailto:esnafakurye@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    color: "#DC0000",
                    fontWeight: "bold",
                    textTransform: "none",
                    marginTop: "10px",
                    backgroundColor: "F4F4F2",
                  }}
                  startIcon={<LocalPostOfficeIcon />}
                >
                  esnafakurye@gmail.com
                </Button>
              </a>
            </Grid>
          </Grid>
          <Grid xs={12} sm={5}>
            <Grid xs={12} sx={{ paddingTop: { sm: 3 } }}>
              <Map />
            </Grid>
          </Grid>
          <Grid xs={0} sm={1}></Grid>
        </Grid>
      </Typography>
    </Box>
  );
}

export default Contact;
