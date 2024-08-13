import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [material, setMaterial] = useState('Quartz');

  const materials = [
    { name: 'Quartz', image: 'url-to-quartz-image.jpg' },
    { name: 'Marble', image: 'url-to-marble-image.jpg' },
    // Add more materials as needed
  ];

  const handlePrev = () => {
    const currentIndex = materials.findIndex((m) => m.name === material);
    const prevIndex = (currentIndex - 1 + materials.length) % materials.length;
    setMaterial(materials[prevIndex].name);
  };

  const handleNext = () => {
    const currentIndex = materials.findIndex((m) => m.name === material);
    const nextIndex = (currentIndex + 1) % materials.length;
    setMaterial(materials[nextIndex].name);
  };

  const currentMaterial = materials.find((m) => m.name === material);

  return (
    <div className="container">
      <div className="slider">
        <div className="prev-button" onClick={handlePrev}>
          <span>PREV</span>
        </div>
        <div className="image-section" style={{ backgroundImage: `url(${currentMaterial.image})` }}>
          <select value={material} onChange={(e) => setMaterial(e.target.value)}>
            {materials.map((m) => (
              <option key={m.name} value={m.name}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <div className="next-button" onClick={handleNext}>
          <span>NEXT</span>
        </div>
      </div>
      <div className="full-image">
        <img src={currentMaterial.image} alt={material} />
      </div>
    </div>
  );
};

export default App;
