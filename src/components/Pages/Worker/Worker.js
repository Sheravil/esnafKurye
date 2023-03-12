import React from "react";
import { useFormik } from "formik";
import { Box, Toolbar, Grid, TextField, Alert } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import img from "./kurye-ol.png";
import validationSchema from "./Validations";

function Worker() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "İsim",
        lastName: "Soyisim",
        age: "Yaş",
        number: "TelefonNumarası",
        email: "email",
        worktime: "çalışmaSaati",
        worktype: "çalışmaŞekli",
        year: "Tecrübe",
        whereWork: "nerede",
        licence: "Ehliyet",
      },

      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  const labell = { inputProps: { "aria-label": "Checkbox demo" } };

  console.log(errors, "hata");

  return (
    <Box noValidate autoComplete="off">
      <Toolbar />
      <Toolbar />
      <Grid container sx={{ display: "block", textAlign: "center" }}>
        <Grid>
          <span
            style={{
              color: "#DC0000",
              fontFamily: "Chakra Petch",
              fontSize: "30px",
            }}
          >
            esnafakurye{" "}
          </span>
          <span style={{ fontSize: "20px" }}>
            kuryesi ol ve kazanmaya başla
          </span>
        </Grid>
      </Grid>
      <Grid className="bgcolor" xs={12}>
        <img
          src={img}
          alt=""
          style={{ padding: "20px 0px", maxWidth: "100%", maxHeight: "400px" }}
        />
      </Grid>
      <Toolbar />
      <h1>Hemen başvurunu yap</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <TextField
          name="name"
          onChange={handleChange}
          id="outlined-basic"
          label="İsim"
          variant="outlined"
          color="error"
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div
            style={{
              fontSize: "small",
              color: "#DC0000",
              marginBottom: "-59px",
            }}
          >
            <p>Lütfen geçerli bir name giriniz</p>
          </div>
        )}

        <br />
        <br />
        <TextField
          name="lastName"
          onChange={handleChange}
          id="outlined-basic"
          label="Soyisim"
          variant="outlined"
          color="error"
          onBlur={handleBlur}
        />

        <br />
        <br />
        <TextField
          name="age"
          onChange={handleChange}
          id="outlined-basic"
          label="Yaş"
          variant="outlined"
          color="error"
        />
        <br />
        <br />
        <TextField
          name="number"
          onChange={handleChange}
          id="outlined-basic"
          label="Telefon Numarası"
          variant="outlined"
          color="error"
        />
        <br />
        <br />
        <TextField
          name="email"
          onChange={handleChange}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          color="error"
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div
            className="errorText"
            style={{
              fontSize: "small",
              color: "#DC0000",
              marginBottom: "-59px",
            }}
          >
            <p>Lütfen geçerli bir email giriniz</p>
          </div>
        )}

        <br />
        <br />
        <TextField
          name="whereWork"
          onChange={handleChange}
          id="outlined-basic"
          label="Nerelerde Çalıştınız ?"
          variant="outlined"
          color="error"
        />

        <br />
        <br />
        <Box
          style={{
            border: "1px solid rgba(128, 128, 128, 0.237)",
            borderRadius: 10,
            margin: "0px 70px",
          }}
        >
          <FormControl color="error" sx={{ alignItems: "center" }}>
            <br />
            <FormLabel id="demo-radio-buttons-group-label">
              Çalışma Saatlerinizi Seçin
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="none"
              name="worktime"
              onChange={handleChange}
            >
              <br />
              <FormControlLabel
                value="full"
                control={<Radio color="error" />}
                label="Tam Zamanlı"
              />
              <FormControlLabel
                value="part"
                control={<Radio color="error" />}
                label="Yarı Zamanlı"
              />
            </RadioGroup>
            <br />
          </FormControl>
        </Box>
        <br />
        <Box
          style={{
            border: "1px solid rgba(128, 128, 128, 0.237)",
            borderRadius: 10,
            margin: "0px 70px",
            padding: "0px 20px",
          }}
        >
          <FormControl color="error" sx={{ alignItems: "center" }}>
            <br />
            <FormLabel id="demo-radio-buttons-group-label">
              Çalışma Seçenekleri
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="none"
              name="worktype"
              onChange={handleChange}
            >
              <br />
              <FormControlLabel
                value="mymoto"
                control={<Radio color="error" />}
                label="Kendi motorumla çalışmak istiyorum"
              />
              <br />
              <FormControlLabel
                value="yourmoto"
                control={<Radio color="error" />}
                label="Şirket motoruyla çalışmak istiyorum"
              />
            </RadioGroup>
            <br />
          </FormControl>
        </Box>
        <br />
        <Box
          sx={{
            maxWidth: 250,
            margin: "0px 70px",
            alignItems: "center",
            padding: 0,
          }}
        >
          <FormControl fullWidth color="error">
            <InputLabel id="demo-simple-select-label">
              Kaç Yıllık Deneyiminiz Var?
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.year}
              label="Kaç Yıllık Deneyiminiz Var?"
              onChange={handleChange}
              color="error"
              name="year"
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3+</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <Box
          style={{
            border: "1px solid rgba(128, 128, 128, 0.237)",
            borderRadius: 10,
            margin: "0px 70px",
          }}
        >
          <br />
          <FormLabel>Ehliyet Tipini Seçin</FormLabel>
          <br />
          <br />
          <span>
            <Checkbox
              {...labell}
              color="error"
              name="licence"
              value="A1"
              onChange={handleChange}
            />
            A1
          </span>
          <span>
            <Checkbox
              {...labell}
              color="error"
              name="licence"
              value="A2"
              onChange={handleChange}
            />
            A2
          </span>
          <span>
            <Checkbox
              {...labell}
              color="error"
              name="licence"
              value="B"
              onChange={handleChange}
            />
            B
          </span>
          <br />
          <br />
        </Box>
        <br />
        <Button variant="contained" type="submit" color="error">
          Formu Gönder
        </Button>
        <br />
        <br />
        {/* <Box style={{ padding: 50 }}>
          <Grid xs={2}></Grid>
          <Grid xs={8}>{JSON.stringify(values).split(",").join(" ")}</Grid>
          <Grid xs={2}></Grid>
        </Box> */}
        <br />
      </form>
    </Box>
  );
}

export default Worker;
