import React, { useState } from "react";
import "./SliderWithHyphens.css"; 
import Sm from '../../images/import.svg'
import Card from '../card/Card';

const SliderWithHyphens = () => {
  const imageUrls = [Sm, Sm, Sm];
  const text = ["We’re launching new privacy features that give you more choice over the ads you see.", "We’re launching new privacy features that give you more choice over the ads you see.2", "We’re launching new privacy features that give you more choice over the ads you see.3"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-item">
          <Card imageSrc={imageUrls[activeIndex]} text={text[activeIndex]} />
        </div>
      </div>
      <ul className="slider-dots">
        {imageUrls.map((_, index) => (
          <li
            className={`slider-dot ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SliderWithHyphens;
