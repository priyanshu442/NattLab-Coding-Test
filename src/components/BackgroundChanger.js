import React, { useState } from "react";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  // Generate a random hex color
  const changeBackground = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-top items-top"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-2xl font-bold mb-4">Click to Change Background</h1>
      <button
        onClick={changeBackground}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Change Background
      </button>
    </div>
  );
};

export default BackgroundChanger;

