import React, { useEffect, useState } from "react";
import "./LandingSection.css";
import img1 from '../../../assets/landing/frame13.jpg';
import img2 from '../../../assets/landing/frame14.jpg';
import img3 from '../../../assets/landing/frame15.jpg';
import img4 from '../../../assets/landing/frame16.jpg';
import img5 from '../../../assets/landing/screenshot1.jpg';

const images = [img1, img2, img3, img4, img5];

function LandingSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('Current Image Index:', currentImageIndex);
    console.log('Current Image:', images[currentImageIndex]);
  }, [currentImageIndex]);

  return (
    <div className="landing-section">
      <div className="text-content">
        <h1>Sabores divinamente irresistibles a tu alcance</h1>
        <p>Servimos comida de verdad</p>
        <button>Conoce Más</button>
      </div>
      <div className="image-content">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Comida deliciosa ${index + 1}`}
            className={`slide ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default LandingSection;
