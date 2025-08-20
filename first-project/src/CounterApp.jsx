import React from 'react';

export default function CounterApp({ count, action }) {
  return (

      <div className="w-[400px] min-h-[300px] bg-white rounded-2xl shadow-2xl flex flex-col justify-between p-8">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-2">Counter App</h1>

        <div className="flex flex-col items-center">
          <p className="text-xl text-gray-700 mt-2">Current count:</p>
          <span className="text-7xl font-extrabold text-blue-600 mt-3">{count}</span>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button 
            onClick={action.increase} 
            className="px-5 cursor-pointer py-2 bg-green-500 text-white rounded-xl shadow-md font-semibold transition hover:bg-green-600 hover:shadow-lg active:scale-95"
          >
            Increase
          </button>
          <button 
            onClick={action.decrease} 
            className="px-5 py-2 cursor-pointer bg-red-500 text-white rounded-xl shadow-md font-semibold transition hover:bg-red-600 hover:shadow-lg active:scale-95"
          >
            Decrease
          </button>
          <button 
            onClick={action.reset} 
            className="px-5 py-2 cursor-pointer bg-yellow-400 text-black rounded-xl shadow-md font-semibold transition hover:bg-yellow-500 hover:shadow-lg active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>
  
  );
}
