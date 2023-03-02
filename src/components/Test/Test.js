import React, { useState, useEffect } from "react";

import img from "../Courier/courier.png";

const Headerz = () => {
  const [showMotorcycle, setShowMotorcycle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMotorcycle(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header>
      {showMotorcycle && (
        <div className="motorcycle">
          <img src={img} alt="motorcycle" height={50} />
          <div className="road" />
        </div>
      )}
      <nav>Yol</nav>
    </header>
  );
};

export default Headerz;
