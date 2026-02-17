import React from 'react'
import '../css/describe.css';
export default function Description() {
  return (
    <div className="card-wrapper">
      
      <div className="cocoz-card">
        <div className="card-content">
          
          <h2 className="card-title">Cocoz</h2>
          
          <p className="card-location">
            Anchal & Yeroor • Kollam, Kerala
          </p>

          <div className="card-rating">
            ★★★★★
            <span className="rating-text">
              5.0 Rating • Loved by Customers
            </span>
          </div>

          <p className="card-description">
            Cocoz (often listed as Cocoz Karikkin Shake or Cocoz Cool Bar) 
            is a popular, highly-rated beverage and dessert center located 
            in the Kollam district of Kerala, India. Known for its “good vibe,” 
            it specializes in fresh tender coconut shakes, milkshakes, and 
            ice creams. Cocoz offers dine-in, take-away, and drive-through 
            services, making it a favorite hangout spot for all age groups.
          </p>

          <button className="card-btn">Visit Now</button>

        </div>
      </div>

    </div>
  )
}
