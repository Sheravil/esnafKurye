import Carousel from "react-bootstrap/Carousel";
import Img from "./mardinM.jpg";
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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
