import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/rain.css";

const RainBackground = () => {
  const thunderstormRef = useRef(null);
  const lightningRef = useRef(null);

  const delayRain = 50;
  const delayThunder = 2000;

  const random = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const createRaindrop = () => {
    const thunderstorm = thunderstormRef.current;
    const raindrop = document.createElement("div");
    raindrop.className = "raindrop";
    thunderstorm.appendChild(raindrop);

    const startX = random(0, window.innerWidth * 0.95);
    const startY = random(-10, -5);
    const duration = random(0.75, 2.5);

    gsap.fromTo(
      raindrop,
      { x: startX, y: startY, opacity: 1 },
      {
        x: startX + 20,
        y: window.innerHeight + 20,
        opacity: 0,
        duration,
        ease: "linear",
        onComplete: () => {
          thunderstorm.removeChild(raindrop);
        },
      }
    );
  };

  const createLightning = () => {
    gsap.to(lightningRef.current, {
      duration: 0.1,
      opacity: 1,
      delay: random(1, 10),
      onComplete: () => {
        gsap.to(lightningRef.current, {
          duration: 0.1,
          opacity: 0,
          delay: 0.1,
        });
      },
    });
  };

  useEffect(() => {
    const rainInterval = setInterval(createRaindrop, delayRain);
    const thunderInterval = setInterval(createLightning, delayThunder);

    return () => {
      clearInterval(rainInterval);
      clearInterval(thunderInterval);
    };
  }, []);

  return (
    <div id="thunderstorm" ref={thunderstormRef}>
      <div className="raindrop"></div>
      <div id="lightning" ref={lightningRef}></div>
    </div>
  );
};

export default RainBackground;
