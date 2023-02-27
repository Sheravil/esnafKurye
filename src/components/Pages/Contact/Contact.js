import React from "react";

import "./Contact.css";
import Map from "./GoogleMap";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import ReactWhatsapp from "react-whatsapp";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  return (
    <Box component="main" sx={{ p: 3 }} style={{ padding: 0 }}>
      <Typography className="Clouds">
        <Grid container>
          <Grid
            xs={12}
            sm={6}
            sx={{
              marginTop: { xs: 2, sm: 3 },
              padding: { xs: 0, sm: 10 },
              fontSize: { sm: 30 },
            }}
          >
            <Grid xs={12}>
              <h2>Mardin Esnaf Kurye</h2>
            </Grid>
            <Grid xs={12}>
              <h3>Paket Servis Hizmetleri</h3>
            </Grid>
            <Grid xs={12}>
              <a href="tel:+905452104247" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  startIcon={<CallIcon />}
                >
                  0545 210 42 47
                </Button>
              </a>
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
                    color: "white",
                    marginTop: "10px",
                    textTransform: "none",
                  }}
                  startIcon={<WhatsAppIcon />}
                  color="success"
                >
                  WhatsApp
                </Button>
              </ReactWhatsapp>
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
