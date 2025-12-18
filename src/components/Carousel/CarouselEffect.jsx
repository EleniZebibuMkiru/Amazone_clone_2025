import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Classes from "./Carousel.module.css"; // <-- CSS module import

function CarouselEffect() {
  return (
    <div className="hero__img--bottom">
  <Carousel
    autoPlay
    infiniteLoop
    showIndicators={false}
    showThumbs={false}
  >
    {img.map((imageItemLink, index) => (
      <img key={index} src={imageItemLink} alt={`slide-${index}`} />
    ))}
  </Carousel>
</div>

  );
}

export default CarouselEffect;
