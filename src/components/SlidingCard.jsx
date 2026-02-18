import React from 'react';
import '../css/slider.css';
import cocktail from '../assets/cocktail.jpg';
import coffee from '../assets/coffee.jpg';
import falooda from '../assets/falooda.jpg';
import fried from '../assets/fried.jpg';
import juice from '../assets/juice.jpg';
import shake from '../assets/shake.jpg';
import tea from '../assets/tea.jpg';

export default function SlidingCard() {
  const foodItems = [
    { name: "Cocktail", img: cocktail },
    { name: "Coffee Shake", img: coffee },
    { name: "Falooda", img: falooda },
    { name: "Fried Snack", img: fried },
    { name: "Fresh Juice", img: juice },
    { name: "Banana Shake", img: shake },
    { name: "Tea", img: tea },
  ];

  // Duplicate items for seamless scrolling
  const duplicatedItems = [...foodItems, ...foodItems];

  return (
    <div className="slider-container">
      <h2 className="slider-title">Our Food Items</h2>
      <div className="food-slider">
        <div className="scroll-track">
          {duplicatedItems.map((item, index) => (
            <div className="food-card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
