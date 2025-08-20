import React, { useState } from 'react';

export default function RandomNumberGenrator() {
  const [random, setRandom] = useState(0);

  function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function handleRandomNum() {
    setRandom(randomNumber());
  }

  return (
  
      <div className="w-[400px] h-[300px] bg-white rounded-2xl shadow-2xl flex flex-col justify-between p-8">
        <h1 className="text-center text-3xl font-bold text-gray-800">Random Number Generator</h1>
        
        <div className="flex flex-col items-center">
          <p className="text-xl text-gray-700 mt-4">Your random number is:</p>
          <span className="text-6xl font-extrabold text-blue-600 mt-2">{random}</span>
        </div>
        
        <button 
          onClick={handleRandomNum} 
          className="mt-6 px-6 py-3 cursor-pointer  bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-md transition hover:bg-blue-700 hover:shadow-lg active:scale-95"
        >
          Generate
        </button>
      </div>

  );
}

