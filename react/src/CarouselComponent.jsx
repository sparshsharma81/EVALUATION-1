import React from 'react';
import "./index.css";

// Import images from the assets folder
import Eat1 from './assets/eat/eat-(1).avif';
import Eat2 from './assets/eat/eat-(2).avif';
import Eat3 from './assets/eat/eat-(3).avif';
import Eat4 from './assets/eat/eat-(4).avif';
import Eat5 from './assets/eat/eat-(5).avif';
import Eat6 from './assets/eat/eat-(6).avif';
import Eat7 from './assets/eat/eat-(7).avif';
import Eat8 from './assets/eat/eat-(8).avif';
import Eat9 from './assets/eat/eat-(9).avif';
import Eat10 from './assets/eat/eat-(10).avif';
import Eat11 from './assets/eat/eat-(11).avif';
import Eat12 from './assets/eat/eat-(12).avif';
import Eat13 from './assets/eat/eat-(13).avif';
import Eat14 from './assets/eat/eat-(14).avif';
import Eat15 from './assets/eat/eat-(15).avif';
import Eat16 from './assets/eat/eat-(16).avif';
import Eat17 from './assets/eat/eat-(17).avif';
import Eat18 from './assets/eat/eat-(18).avif';
import Eat19 from './assets/eat/eat-(19).avif';

const CarouselComponent = () => {
  return (
    <div className="mind">
      <p className="what">WHAT'S on your mind?</p>
      <div className="unique-carousel-container">
        <div className="unique-carousel-track">
          <a href="delivery.html">
            <img src={Eat1} className="unique-carousel-item-pic" alt="Eat 1" />
          </a>
          <a href="delivery.html">
            <img src={Eat2} className="unique-carousel-item-pic" alt="Eat 2" />
          </a>
          <a href="delivery.html">
            <img src={Eat3} className="unique-carousel-item-pic" alt="Eat 3" />
          </a>
          <a href="delivery.html">
            <img src={Eat4} className="unique-carousel-item-pic" alt="Eat 4" />
          </a>
          <a href="delivery.html">
            <img src={Eat5} className="unique-carousel-item-pic" alt="Eat 5" />
          </a>
          <a href="delivery.html">
            <img src={Eat6} className="unique-carousel-item-pic" alt="Eat 6" />
          </a>
          <a href="delivery.html">
            <img src={Eat7} className="unique-carousel-item-pic" alt="Eat 7" />
          </a>
          <a href="delivery.html">
            <img src={Eat8} className="unique-carousel-item-pic" alt="Eat 8" />
          </a>
          <a href="delivery.html">
            <img src={Eat9} className="unique-carousel-item-pic" alt="Eat 9" />
          </a>
          <a href="delivery.html">
            <img src={Eat10} className="unique-carousel-item-pic" alt="Eat 10" />
          </a>
          <a href="delivery.html">
            <img src={Eat11} className="unique-carousel-item-pic" alt="Eat 11" />
          </a>
          <a href="delivery.html">
            <img src={Eat12} className="unique-carousel-item-pic" alt="Eat 12" />
          </a>
          <a href="delivery.html">
            <img src={Eat13} className="unique-carousel-item-pic" alt="Eat 13" />
          </a>
          <a href="delivery.html">
            <img src={Eat14} className="unique-carousel-item-pic" alt="Eat 14" />
          </a>
          <a href="delivery.html">
            <img src={Eat15} className="unique-carousel-item-pic" alt="Eat 15" />
          </a>
          <a href="delivery.html">
            <img src={Eat16} className="unique-carousel-item-pic" alt="Eat 16" />
          </a>
          <a href="delivery.html">
            <img src={Eat17} className="unique-carousel-item-pic" alt="Eat 17" />
          </a>
          <a href="delivery.html">
            <img src={Eat18} className="unique-carousel-item-pic" alt="Eat 18" />
          </a>
          <a href="delivery.html">
            <img src={Eat19} className="unique-carousel-item-pic" alt="Eat 19" />
          </a>
        </div>
        <button className="unique-carousel-arrow unique-carousel-arrow-left" disabled>&lt;</button>
        <button className="unique-carousel-arrow unique-carousel-arrow-right">&gt;</button>
      </div>
    </div>
  );
};

export default CarouselComponent;
