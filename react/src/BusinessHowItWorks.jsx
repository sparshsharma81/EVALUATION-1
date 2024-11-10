import React from 'react';

// Importing images
import top2_1 from './assets/top/top2-1.jpeg';
import top2_2 from './assets/top/top2-2.png';
import top2_3 from './assets/top/top2-3.jpg';

const BusinessHowItWorks = () => {
  return (
    <div className="top-1">
      <div className="head-top-1">How SPICYTASTE Works for Businesses</div>
      <div className="boxes-3">
        <a href="addbussiness.html" className="box-3">
          <img src={top2_1} alt="Find a Business Image" />
          <div className="top1-1">Add Your Business For Free</div>
          <div className="top1-1-1">
            Grow Your Restaurant Business With Powerful Marketing and Ordering System by SPICYTASTE.
          </div>
        </a>

        <a href="activatebussiness.html" className="box-3">
          <img src={top2_2} alt="Connect Image" />
          <div className="top-2-2">Activate & Setup</div>
          <div className="top-2-2-2">
            Grow Your Restaurant Business With Powerful Marketing and Ordering System by SPICYTASTE.
          </div>
        </a>

        <a href="promotebussiness.html" className="box-3">
          <img src={top2_3} alt="Order Your Food Image" />
          <div className="top3-3">Promote with Zero Cost</div>
          <div className="top3-3-3">
            Order Online, Book A Table, Grab A Coupon or order a delivery if restaurant is offering.
          </div>
        </a>
      </div>
    </div>
  );
};

export default BusinessHowItWorks;
