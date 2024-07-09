/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./LandingSection.css";
import img1 from '../../../assets/landing/frame13.jpg';
import img2 from '../../../assets/landing/frame14.jpg';
import img3 from '../../../assets/landing/frame15.jpg';
import img4 from '../../../assets/landing/frame16.jpg';
import img5 from '../../../assets/landing/screenshot1.jpg';
import { Menu } from "@headlessui/react";
import Conoce from "../AboutUs"
import { useNavigate } from 'react-router-dom';

const images = [img1, img2, img3, img4, img5];

function LandingSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  const Conoce = () => {
    navigate('/conocenos');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-section">
      <div className="text-content">
        <h1>Sabores divinamente irresistibles a tu alcance</h1>
        <p>Servimos comida de verdad</p>
        <button className ='conoce'onClick={Conoce}>CONOCE MÁS</button>
      </div>
      <div className="image-content">
        <img
          src={images[currentImageIndex]}
          alt={`Comida deliciosa ${currentImageIndex + 1}`}
          className="active"
        />
      </div>
    </div>
  );
}

export default LandingSection;
