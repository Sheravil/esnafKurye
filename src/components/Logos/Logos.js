import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Logos.css";

import Dunya from "./dunya-doner-mardin-en-iyi-kumru.png";
import Elegance from "./elegance-esnafakurye.png";
import Foresta from "./foresta-esnafakurye.png";
import Balik from "./balik.png";
import Okuz from "./okuz-logo.png";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <img src={Dunya} height={120} alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src={Okuz} height={120} alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src={Elegance} height={120} alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src={Foresta} height={120} alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={Balik} height={120} alt="" />
  </div>,
];

const Logos = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="default"
    disableButtonsControls
    infinite
    autoPlay={true}
    autoPlayInterval={1500}
  />
);

export default Logos;
