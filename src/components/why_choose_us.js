import React, { useState } from "react";
import "./WhyChooseUsCard.css";

const WhyChooseUsCard = ({ title, description, image, colorChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`why-choose-us-card ${isHovered ? "hovered" : ""} ${
        colorChange ? "blue-background-color" : "background-color"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`card-content `}>
        <img src={image} alt={title} className="card-image" />
        <h3 className={`card-title ${isHovered ? "hovered" : ""}`}>{title}</h3>
        {isHovered && <p className="card-description">{description}</p>}
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
