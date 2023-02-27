import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Logos.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    <img src="https://www.mardindoner.com/upload/logo.png" height={90} alt="" />
  </div>,
  <div className="item" data-value="2">
    <img
      src="https://okuzburger.com/wp-content/themes/okuz-v1/img/okuz-logo.png"
      height={90}
      alt=""
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src="https://files.sikayetvar.com/lg/cmp/52/52083.png?1522650125"
      height={90}
      alt=""
    />
  </div>,
  <div className="item" data-value="4">
    <img
      src="https://mir-s3-cdn-cf.behance.net/projects/404/9028a1144559089.Y3JvcCw2NTk4LDUxNjEsMTI3Myww.png"
      height={90}
      alt=""
    />
  </div>,
  <div className="item" data-value="5">
    <img
      src="https://www.oses.com.tr/assets/images/oses.png"
      height={90}
      alt=""
    />
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
