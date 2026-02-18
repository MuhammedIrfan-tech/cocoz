import React from 'react';
import '../css/location.css';

export default function Location() {
  return (
     <div className="location-section" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-right" data-aos-delay="100">
        Find Us
      </h2>

      <iframe
        title="Cocoz Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6010574568033!2d76.6056174758964!3d9.06684179098803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b064b14ab3b529d%3A0xf2c5e4c8e3ef84da!2sKollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1697104873541!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        data-aos="zoom-in"
        data-aos-delay="200"
      ></iframe>

      <div className="map-info" data-aos="fade-left" data-aos-delay="300">
        📍 Cocoz Karikkin Shake, Kollam, Kerala <br />
        🕒 Open: 9:00 AM - 10:00 PM <br />
      </div>
    </div>
  );
}
