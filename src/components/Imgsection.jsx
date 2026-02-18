import React from 'react'
import '../css/imgs.css';
import cocoz from '../assets/cocoz.jpg';
export default function Imgsection() {
  return (
    <div>
        <section className="hero-section">
      <div className="hero-container">
        
        <div className="hero-left" data-aos="fade-right">
          <h1 className="hero-title">
            COCOZ
          </h1>

          <h2 className="hero-tagline">
            Stay Cool. Stay Fresh.
          </h2>

          <button className="hero-btn" data-aos="zoom-in" data-aos-delay="300">
            More
          </button>
        </div>

        <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
          <img src={cocoz} alt="COCOZ Drink" />
        </div>

      </div>
    </section>
    </div>
  )
}
