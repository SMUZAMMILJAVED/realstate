import React, { useState } from 'react';
import Pic1 from "../Images/1.jpg";
import Pic2 from "../Images/2.jpg";
import Pic3 from "../Images/3.jpg";
import Pic4 from "../Images/4.jpg";
import Pic5 from "../Images/5.jpg";
import Pic6 from "../Images/6.jpg";
import Pic7 from "../Images/7.jpg";
import Pic8 from "../Images/8.jpg";

const ImageSlider = () => {
  const images = [
    Pic1,
    Pic2,
    Pic3,
    Pic4,
    Pic5,
    Pic6,
    Pic7,
    Pic8
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length - 1) % (images.length - 1)
    );
  };

  return (
    <div className="relative max-w-screen-xl mx-auto overflow-hidden flex items-center pt-12">
      <button
        className="absolute top-1/2 left-4 bg-black bg-opacity-50 text-white text-2xl p-2 rounded-full transform -translate-y-1/2 z-10"
        onClick={prevImage}
      >
        &#10094;
      </button>
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {images.slice(currentIndex, currentIndex + 2).map((img, index) => (
          <div key={index} className="flex-shrink-0 w-1/2">
            <img src={img} alt={`carousel ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 right-4 bg-black bg-opacity-50 text-white text-2xl p-2 rounded-full transform -translate-y-1/2 z-10"
        onClick={nextImage}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
