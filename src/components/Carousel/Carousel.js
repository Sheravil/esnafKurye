import Carousel from "react-bootstrap/Carousel";
import Img from "./moto.png";
import Imge from "./mardin.jpg";
import { Grid } from "@mui/material";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Grid sx={{ display: { xs: "inherit", sm: "none" } }}>
          <img className="d-block w-100" src={Img} alt="First slide" />
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "inherit" } }}>
          <img className="d-block w-100" src={Imge} alt="First slide" />
        </Grid>
        <Carousel.Caption>
          <h1>Mardin Esnaf Kurye</h1>
          <p> Esnaf'lar için teslimatı kolaylaştırıyoruz</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Grid sx={{ display: { xs: "inherit", sm: "none" } }}>
          <img className="d-block w-100" src={Img} alt="First slide" />
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "inherit" } }}>
          <img className="d-block w-100" src={Imge} alt="First slide" />
        </Grid>
        <Carousel.Caption>
          <h1>İşletmeniz İçin</h1>
          <p>Hızlı şehir içi kurye teslimat hizmeti</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Grid sx={{ display: { xs: "inherit", sm: "none" } }}>
          <img className="d-block w-100" src={Img} alt="First slide" />
        </Grid>
        <Grid sx={{ display: { xs: "none", sm: "inherit" } }}>
          <img className="d-block w-100" src={Imge} alt="First slide" />
        </Grid>
        <Carousel.Caption>
          <h3>25 ₺ 'den başlayan fiiyatlarla</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;