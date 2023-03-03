import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function About() {
  return (
    <Grid container>
      <Box
        component="main"
        sx={{ p: { xs: 5, sm: 20 }, textAlign: "left", color: "#495464" }}
      >
        <Toolbar />

        <Typography>
          <Grid container>
            <Grid>
              <Typography
                variant="h6"
                component="div"
                className="logo"
                sx={{
                  flexGrow: 1,
                  color: "#DC0000",
                  fontFamily: "Chakra Petch",
                  paddingRight: 1,
                }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#DC0000",
                  }}
                >
                  <h1>esnafakurye </h1>
                </Link>
              </Typography>
            </Grid>
            <Grid>
              <h1> Lojistik</h1>
            </Grid>
          </Grid>
          <h2>Kolay & Hızlı Kurye Hizmeti</h2>
          <br />
          <br />
          <strong style={{ color: "#DC0000" }}>Hızlı Teslimat:</strong>
          &nbsp;Gönderinizi onayladıktan sonra size en yakın kurye işletmenize
          gelir ve en kısa sürede teslimatı gerçekleştirir.
          <br />
          <br />
          <strong style={{ color: "#DC0000" }}>Uygun Fiyatlar:</strong>
          &nbsp;Hızlı ve güvenilir kurye hizmetini erişilebilir ve uygun
          fiyatlarla alın. Zamandan olduğu kadar teslimat giderlerinden de
          tasarruf edin
          <br />
          <br />
          <strong style={{ color: "#DC0000" }}>Kurye Takibi:</strong>
          &nbsp;Teslimat süresince kuryenizi mobil uygulamadan ve web sitesinden
          takip edebilirsiniz.
          <br />
          <br />
          <strong style={{ color: "#DC0000" }}>Kurye Seçenekleri:</strong>
          &nbsp;Gönderinizin boyutuna ve hassasiyetine göre ister motorlu ister
          scooter kurye talebi oluşturabilirsiniz.
        </Typography>
      </Box>
    </Grid>
  );
}

export default About;
