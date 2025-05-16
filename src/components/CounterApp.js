import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return ( <div className="bg-white shadow-md rounded mt-10 p-6 max-w-sm mx-auto">
        <div className=" text-2xl h-12">

        </div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Counter</h2>
      <p className="text-4xl font-bold text-blue-600 mb-6">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Increment
        </button>
      </div>
    </div>
   
  );
};

export default CounterApp;