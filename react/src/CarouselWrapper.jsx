import React from 'react';
import './index.css'; // Assuming the styles are in CarouselWrapper.css, or you can use index.css

// Import images
import food1 from './assets/food/FOOD1(3).jpeg';
import food2 from './assets/food/FOOD1(3).jpeg';
import food3 from './assets/food/FOOD1(4).jpeg'; // Duplicate food image for this example
import food4 from './assets/food/FOOD1(5).jpeg';
import food5 from './assets/food/FOOD1(6).jpeg';

const CarouselWrapper = () => {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img src={food1} alt="Food 1" />
                </div>
                <div className="carousel-item">
                    <img src={food2} alt="Food 2" />
                </div>
                <div className="carousel-item">
                    <img src={food3} alt="Food 3" />
                </div>
                <div className="carousel-item">
                    <img src={food4} alt="Food 4" />
                </div>
                <div className="carousel-item">
                    <img src={food5} alt="Food 5" />
                </div>
            </div>
        </div>
    );
};

export default CarouselWrapper;
