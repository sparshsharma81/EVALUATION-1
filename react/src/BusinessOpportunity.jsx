import React from 'react';
import promotionImage from './assets/top/promotion.jpeg'; // Adjust the path to your image folder

const BusinessOpportunity = () => {
  return (
    <div className="business-opportunity">
      <div className="text">
        <h1>Start Your Own Food Ordering Business in CHANDIGARH</h1>
        <p>
          SPICYTASTE Online Business Opportunity in CHANDIGARH allows anyone to start a home-based internet
          business without any risk. Check our partners across the world who have benefited from SPICYTASTE's
          unique partner success program.
        </p>
        <p>
          SPICYTASTE provides a white label software reseller program in CHANDIGARH, franchise opportunities in
          CHANDIGARH, and exclusive business opportunities in CHANDIGARH.
        </p>
        <a href="started.html" className="button">Get Started</a>
      </div>
      <div className="image">
        <img src={promotionImage} alt="Food Business Image" />
      </div>
    </div>
  );
};

export default BusinessOpportunity;
