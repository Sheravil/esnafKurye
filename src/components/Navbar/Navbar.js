import React, { useState } from "react";

import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Anasayfa", "Hakkımızda", "İletişim"];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#FFCC00" }}>
        Esnaf Kurye
      </Typography>
      <hr />
      <Divider />

      <List>
        <Box>
          <ListItemButton style={{ textAlign: "center" }}>
            <ListItemText>
              <Box sx={{ paddingRight: "50%" }}>
                <LocationOnIcon
                  sx={{ position: "absolute", color: "#FFCC00" }}
                />
              </Box>
              <Box>Mardin</Box>
            </ListItemText>
          </ListItemButton>
        </Box>
        {navItems.map((item) => (
          <Link
            to={`/${item}`}
            style={{ textDecoration: "none", color: "#495464" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ReactWhatsapp
          number="90-545-210-4247"
          message="Merhaba Mardin Esnaf Kurye Whatsapp İletişim Hattına Hoşgeldiniz"
          style={{ border: "none", background: "none" }}
        >
          <ListItemButton style={{ color: "green" }}>
            <ListItemText>
              <WhatsAppIcon /> WhatsApp İletişim
            </ListItemText>
          </ListItemButton>
        </ReactWhatsapp>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#E8E8E8" }}>
        <Toolbar>
          <IconButton
            color="#495464"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#FFCC00" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex" },
              color: "#FFCC00",
              paddingLeft: { xs: 10, sm: 5 },
            }}
          >
            Esnaf Kurye
            <Button
              sx={{ marginLeft: 10, display: { xs: "none", sm: "block" } }}
            >
              <LocationOnIcon /> Mardİn
            </Button>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={`/${item}`} style={{ textDecoration: "none" }}>
                <Button key={item} sx={{ color: "#495464" }}>
                  {item}
                </Button>
              </Link>
            ))}
            <ReactWhatsapp
              number="90-545-210-4247"
              message="Merhaba Mardin Esnaf Kurye Whatsapp İletişim Hattına Hoşgeldiniz"
              style={{ border: "none", background: "none" }}
            >
              <Button style={{ color: "green", display: "block" }}>
                <WhatsAppIcon /> WhatsApp İletİşİm
              </Button>
            </ReactWhatsapp>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#E8E8E8",
              color: "#495464",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
