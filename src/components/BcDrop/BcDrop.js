import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BcDrop() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        type="submit"
        color="error"
        onClick={handleClickOpen}
      >
        Formu Gönder
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Tebrikler"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Formunuz Başarıyla Gönderildi
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button variant="contained" type="submit" color="error">
              Anasayfaya Dön
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
