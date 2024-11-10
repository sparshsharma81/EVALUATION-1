import React from 'react';
import top1_1 from './assets/top/top1-1.jpeg'; // Adjust the path to your image folder
import top1_2 from './assets/top/top1-2.png';
import top1_3 from './assets/top/top1-3.avif';

const HowSpicyTasteWorksForCustomers = () => {
  return (
    <div className="top-1">
      <div className="head-top-1">How SPICYTASTE Works for Customers</div>
      <div className="boxes-3">
        
        <a href="find-a-business.html" className="box-3">
          <img src={top1_1} alt="Find a Business Image" />
          <div className="top1-1">Find A Business</div>
          <div className="top1-1-1">
            Find Restaurants, Cafés, bars, and many other businesses which you’d like to visit or like to order from!
          </div>
        </a>

        <a href="connect.html" className="box-3">
          <img src={top1_2} alt="Connect Image" />
          <br />
          <br />
          <div className="top-2-2">Connect</div>
          <div className="top-2-2-2">
            We connect you with the business owners. You can place an order, book a table, or order a delivery directly.
          </div>
        </a>

        <a href="order-your-food.html" className="box-3">
          <img src={top1_3} alt="Order Your Food Image" />
          <div className="top3-3">Order Your Food</div>
          <div className="top3-3-3">
            Order Online, Book A Table, Grab A Coupon, or order a delivery if the restaurant is offering.
          </div>
        </a>
        
      </div>
    </div>
  );
};

export default HowSpicyTasteWorksForCustomers;
