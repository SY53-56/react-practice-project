import React, { useState } from 'react';

export default function RandomColor() {
  const [color, setColor] = useState("rgb(255, 255, 255)");

  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Detect if color is close to white for better contrast
  function isLight(rgb) {
    const values = rgb.match(/\d+/g).map(Number);
    const brightness = (values[0] * 299 + values[1] * 587 + values[2] * 114) / 1000;
    return brightness > 200; // threshold
  }

  const textColor = isLight(color) ? "text-black" : "text-white";

  return (
    <div 
      className={`w-[400px] min-h-[300px] rounded-2xl shadow-2xl flex flex-col justify-between p-8 transition-all duration-300 ${textColor}`}
      style={{ backgroundColor: color }}
    >
      <h1 className="text-center text-3xl font-bold drop-shadow-lg">
        Random Color Generator
      </h1>
      <div className="text-center mt-6">
        <h2 className="text-2xl font-semibold">RGB Color Code</h2>
        <p className="text-xl font-bold mt-2">{color}</p>
      </div>
      <button 
        onClick={() => setColor(randomColor())}
        className=  "mt-6  cursor-pointer px-6 py-3 bg-blue-600 bg-opacity-50 font-semibold text-lg rounded-xl shadow-md transition hover:bg-opacity-70 hover:shadow-lg active:scale-95"
      >
        Change Color
      </button>
    </div>
  );
}
