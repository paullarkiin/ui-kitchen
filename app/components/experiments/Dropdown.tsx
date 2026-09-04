"use client";

import React, { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("You clicked me");
    setIsOpen(!isOpen);
  };

  return (
    // container
    <div>
      <div
        onClick={handleOpen}
        className="flex flex-row justify-between items-center bg-gray-300 w-2xs p-4"
      >
        <p className="text-black">This is a list item</p>
        <button className="text-black">➕</button>
      </div>
      {isOpen && (
        <div className="bg-gray-300 p-4 text-black">
          Hello this is some text
        </div>
      )}
    </div>
  );
}
