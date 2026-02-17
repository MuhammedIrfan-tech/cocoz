import React from 'react'
import '../css/imgs.css';
import cocoz from '../assets/cocoz.jpg';
export default function Imgsection() {
  return (
    <div>
        <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-left">
          <h1 className="hero-title">
            COCOZ
          </h1>

          <h2 className="hero-tagline">
            Stay Cool. Stay Fresh.
          </h2>

         

          <button className="hero-btn">
            More
          </button>
        </div>

        <div className="hero-right">
          <img src={cocoz} alt="COCOZ Drink" />
        </div>

      </div>
    </section>
    </div>
  )
}
