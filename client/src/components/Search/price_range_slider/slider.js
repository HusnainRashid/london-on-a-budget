import React, { useState } from "react";
import './slider.css';


const slider = () => {
    return (
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="style.css" />

    <title>Price Range Slider</title>
  </head>

  <body>
    <div class="card">
      <h4>Price Range Slider</h4>

      <div class="price-content">
        <div>
          <label>Min</label>
          <p id="min-value">$50</p>
        </div>

        <div>
          <label>Max</label>
          <p id="max-value">$500</p>
        </div>
      </div>

        <div class="range-slider">
          <input type="range" class="min-price" value="100" min="10" max="500" step="10" />
          <input type="range" class="max-price" value="250" min="10" max="500" step="10" />
        </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>

    );
};

let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

function validateRange(minPrice, maxPrice) {
  if (minPrice > maxPrice) {

    // Swap to Values
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }

  minValue.innerHTML = "$" + minPrice;
  maxValue.innerHTML = "$" + maxPrice;
}

const inputElements = document.querySelectorAll("input");

inputElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);

    validateRange(minPrice, maxPrice);
  });
});

validateRange(inputElements[0].value, inputElements[1].value);


export default slider;
