"use client";
import { useEffect, useState } from "react";

const heroImages = ["/hero0.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto change background every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-svh bg-cover bg-center flex justify-center items-center md:mt-[-120px] transition-all duration-1000">
      <img
        src={heroImages[currentImageIndex]}
        alt="Hero Image"
        className="w-full h-full object-fill transition-all duration-1000"
      />
    </div>
  );
}
