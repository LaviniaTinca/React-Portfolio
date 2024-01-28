/* eslint-disable react/prop-types */
import "./carousel.scss";
import { useState } from "react";

const Carousel = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (index) => {
    setCurrentImage(index);
  };
  return (
    <div className="carousel-container">
      <div className="carousel-buttons">
        {item.images.map((image, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={index === currentImage ? "active" : ""}
          ></button>
        ))}
      </div>
      <img src={item.images[currentImage]} alt={`image ${currentImage + 1}`} />
    </div>
  );
};

export default Carousel;
