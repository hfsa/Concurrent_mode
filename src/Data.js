import React, { useEffect, useState } from "react";

export default function Data({ value }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setImage(
        <img
          src="https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg"
          alt="loading"
        />
      );
    }, 1000);
  });

  return (
    <div className="App">
      <h1>{value}</h1>
      <p>WHAT YOU SEEK IS SEEKING YOU</p>
      {image}
    </div>
  );
}
