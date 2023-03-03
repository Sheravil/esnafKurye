import Carousel from "react-bootstrap/Carousel";
import Img from "./moto.png";
import ImgA from "./adress.png";
import Imge from "./mardin.png";
import ImgW from "./mardin-web-kurye2.png";
import { Grid } from "@mui/material";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Grid sx={{ display: { xs: "inherit", sm: "none" } }}>
          <img className="d-block w-100 " src={Img} alt="First slide" />
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "inherit" } }}>
          <img className="d-block w-100" src={Imge} alt="First slide" />
        </Grid>
      </Carousel.Item>

      <Carousel.Item>
        <Grid sx={{ display: { xs: "inherit", sm: "none" } }}>
          <img className="d-block w-100" src={ImgA} alt="First slide" />
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "inherit" } }}>
          <img className="d-block w-100" src={ImgW} alt="First slide" />
        </Grid>
        {/* <Carousel.Caption>
          <h1>İşletmeniz İçin</h1>
          <p>Hızlı şehir içi kurye teslimat hizmeti</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* <Carousel.Item>
        <Grid sx={{ display: { xs: "inherit", sm: "none" } }}>
          <img className="d-block w-100" src={Img} alt="First slide" />
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "inherit" } }}>
          <img className="d-block w-100" src={Imge} alt="First slide" />
        </Grid>
        <Carousel.Caption>
          <h3>25 ₺ 'den başlayan fiiyatlarla</h3>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default UncontrolledExample;
