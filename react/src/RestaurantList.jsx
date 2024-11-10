import React, { useState } from 'react';
import rest1 from './assets/rest/rest1.avif';
import rest2 from './assets/rest/rest2.avif';
import rest3 from './assets/rest/rest3.avif';
import rest4 from './assets/rest/rest4.avif';
import rest5 from './assets/rest/rest5.avif';
import rest6 from './assets/rest/rest6.avif';
import rest7 from './assets/rest/rest7.avif';
import rest8 from './assets/rest/rest8.avif';
import rest9 from './assets/rest/rest9.avif';
import rest10 from './assets/rest/rest10.avif';
import rest11 from './assets/rest/rest11.avif';
import rest12 from './assets/rest/rest12.avif';
import rest13 from './assets/rest/rest13.avif';
import rest14 from './assets/rest/rest14.avif';
import rest15 from './assets/rest/rest15.avif';
import rest16 from './assets/rest/rest16.avif';
import rest17 from './assets/rest/rest17.avif';
import rest18 from './assets/rest/rest18.avif';
import rest19 from './assets/rest/rest19.avif';
import rest20 from './assets/rest/rest20.avif';
import rest21 from './assets/rest/rest21.avif';
import rest22 from './assets/rest/rest22.avif';
import rest23 from './assets/rest/rest23.avif';
import rest24 from './assets/rest/rest24.avif';
import rest25 from './assets/rest/rest25.avif';
import rest26 from './assets/rest/rest26.avif';
import rest27 from './assets/rest/rest27.avif';
import rest28 from './assets/rest/rest28.avif';
import rest29 from './assets/rest/rest29.avif';
import rest30 from './assets/rest/rest30.avif';
import rest31 from './assets/rest/rest31.avif';
import rest32 from './assets/rest/rest32.avif';
import rest33 from './assets/rest/rest33.avif';
import rest34 from './assets/rest/rest34.avif';
import rest35 from './assets/rest/rest35.avif';
import rest36 from './assets/rest/rest36.avif';
import rest37 from './assets/rest/rest37.avif';
import rest38 from './assets/rest/rest38.avif';
import rest39 from './assets/rest/rest39.avif';
import rest40 from './assets/rest/rest40.avif';
import rest41 from './assets/rest/rest41.avif';
import rest42 from './assets/rest/rest42.avif';
import rest43 from './assets/rest/rest43.avif';
import rest44 from './assets/rest/rest44.avif';
import rest45 from './assets/rest/rest45.avif';
import rest46 from './assets/rest/rest46.avif';
import rest47 from './assets/rest/rest47.avif';
import rest48 from './assets/rest/rest48.avif';
import rest49 from './assets/rest/rest49.avif';
import rest50 from './assets/rest/rest50.avif';
import rest51 from './assets/rest/rest51.avif';
import rest52 from './assets/rest/rest52.avif';
import rest53 from './assets/rest/rest53.avif';
import rest54 from './assets/rest/rest54.avif';
import rest55 from './assets/rest/rest55.avif';
import rest56 from './assets/rest/rest56.avif';


// Add more imports as necessary...

function RestaurantList() {
    const [showMore, setShowMore] = useState(false); // State to toggle between showing more or fewer items
    const [filterValue, setFilterValue] = useState(null); // Holds the selected filter value
    const [searchQuery, setSearchQuery] = useState(''); // Holds the search query

    // List of all restaurants to be shown
    const restaurants = [
        {
            image: rest1,
            name: 'Shree Naivedyam',
            offer: '10% OFF UPTO ₹40',
            rating: 4.3,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, Chinese, South Indian, Pizzas, Beverages',
            location: 'Chandigarh City',
            price: 300,
            isVeg: false,
            index: 1,
        },
        {
            image: rest2,
            name: 'The Fusion Lounge',
            offer: '10% OFF UPTO ₹40',
            rating: 4.2,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts',
            location: 'Railway Station',
            price: 500,
            isVeg: false,
            index: 2,
        },
        {
            image: rest3,
            name: 'Wok & Roll',
            offer: '15% OFF ON ORDERS ABOVE ₹300',
            rating: 4.2,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Asian Fusion, Noodles, Stir Fry',
            location: 'Sector 17, Chandigarh',
            price: 0, // Add appropriate price if available
            isVeg: false, // Add appropriate value based on the restaurant's offerings
            index: 3,
        },
        {
            image: rest4,
            name: 'Magic Momo',
            rating: 4.1,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'Momos, Chinese',
            location: 'Prasia Road',
            price: 0, // Add appropriate price if available
            isVeg: false, // Add appropriate value based on the restaurant's offerings
            index: 4,
        },
        {
            image: rest5,
            name: 'Rangla Panjab',
            rating: 4.2,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts',
            location: 'Prasia Road',
            price: 0, // Add appropriate price if available
            isVeg: false, // Add appropriate value based on the restaurant's offerings
            index: 5,
        },
        {
            image: rest6,
            name: '28 Spice Club',
            rating: 4.3,
            deliveryTime: 'Delivery in 55-60 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts',
            location: 'Chandigarh City',
            price: 0, // Add appropriate price if available
            isVeg: false, // Add appropriate value based on the restaurant's offerings
            index: 6,
        },
        {
            image: rest7,
            name: 'Apni Chopati',
            rating: 4.5,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'Snacks, Burgers, Pizzas, Fast Food',
            location: 'Rautha Wada',
            price: 0, // Add appropriate price if available
            isVeg: false, // Add appropriate value based on the restaurant's offerings
            index: 7,
        },
        {
            image: rest8,
            name: 'Sanju Ka Dhaba',
            rating: 4.3,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, South Indian, Chinese',
            location: 'Prasia Road',
            price: 0, // Add appropriate price if available
            isVeg: false, // Add appropriate value based on the restaurant's offerings
            index: 8,
        },
        {
            image: rest9,
            name: 'Raimens Cafe 79',
            rating: 4.4,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'Bakery, Pizzas, Snacks, Beverages',
            location: 'VIP Road',
            price: 500, // You can adjust the price as needed
            isVeg: false,
            index: 9,
        },
        {
            image: rest10,
            name: 'Chaska Cafe',
            rating: 3.6,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'Cafe, Italian, Chinese',
            location: 'Chandigarh Locality',
            price: 600,
            isVeg: false,
            index: 10,
        },
        {
            image: rest11,
            name: 'The Veg Legacy',
            rating: 4.0,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian',
            location: 'Chandigarh City',
            price: 350,
            isVeg: true,
            index: 11,
        },
        {
            image: rest12,
            name: 'Bharat Mewad Ice Cream',
            rating: 4.5,
            deliveryTime: 'Delivery in 40-45 mins',
            cuisine: 'Ice Cream, Desserts, Beverages',
            location: 'Chandigarh Locality',
            price: 250, // Adjust price as needed
            isVeg: true,
            index: 12,
        },
        {
            image: rest13,
            name: 'Spice Junction',
            rating: 4.6,
            deliveryTime: 'Delivery in 40-45 mins',
            cuisine: 'Authentic North Indian, Dosas, Biryani',
            location: 'Sector 17, Chandigarh',
            price: 500,
            isVeg: false,
            index: 13,
        },
        {
            image: rest14,
            name: 'The Fusion Lounge',
            rating: 4.2,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts',
            location: 'Railway Station',
            price: 400,
            isVeg: false,
            index: 14,
        },
        {
            image: rest15,
            name: 'Spice Route',
            rating: 4.5,
            deliveryTime: 'Delivery in 30-35 mins',
            cuisine: 'Indian, Thai, Fusion',
            location: 'Sector 22, Chandigarh',
            price: 450,
            isVeg: false,
            index: 15,
        },
        {
            image: rest16,
            name: 'Momo Delight',
            rating: 4.5,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Tibetan Momos, Noodles, Soups',
            location: 'Sector 22, Chandigarh',
            price: 350,
            isVeg: true,
            index: 16,
        },
        {
            image: rest17,
            name: 'Rangla Panjab',
            rating: 4.2,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts',
            location: 'Prasia Road',
            price: 500,
            isVeg: false,
            index: 17,
        },
        {
            image: rest18,
            name: '28 Spice Club',
            rating: 4.3,
            deliveryTime: 'Delivery in 55-60 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts',
            location: 'Chandigarh City',
            price: 550,
            isVeg: false,
            index: 18,
        },
        {
            image: rest19,
            name: 'Apni Chopati',
            rating: 4.5,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'Snacks, Burgers, Pizzas, Fast Food',
            location: 'Rautha Wada',
            price: 500, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 19
        },
        {
            image: rest20,
            name: 'Sanju Ka Dhaba',
            rating: 4.3,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, South Indian, Chinese',
            location: 'Prasia Road',
            price: 450, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 20
        },
        {
            image: rest21,
            name: 'Raimens Cafe 79',
            rating: 4.4,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'Bakery, Pizzas, Snacks, Beverages',
            location: 'VIP Road',
            price: 400, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 21
        },
        {
            image: rest22,
            name: 'Chaska Cafe',
            rating: 3.6,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'Cafe, Italian, Chinese',
            location: 'Chandigarh Locality',
            price: 350, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 22
        },
        {
            image: rest23,
            name: 'The Veg Legacy',
            rating: 4.0,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian',
            location: 'Chandigarh City',
            price: 400, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 23
        },
        {
            image: rest24,
            name: 'Bharat Mewad Ice Cream',
            rating: 4.5,
            deliveryTime: 'Delivery in 40-45 mins',
            cuisine: 'Ice Cream, Desserts, Beverages',
            location: 'Chandigarh Locality',
            price: 300, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 24
        },
        {
            image: rest25,
            name: "Annu's Kitchen's Queen Of Paratha",
            rating: 4.6,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts',
            location: 'Chandigarh City',
            price: 550, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 25
        },
        {
            image: rest26,
            name: 'Urban Cafe',
            rating: 4.2,
            deliveryTime: 'Delivery in 50-55 mins',
            cuisine: 'Snacks, Pizzas, Pastas, Fast Food, Burgers, Cafe',
            location: 'Chandigarh City',
            price: 500, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 26
        },
        {
            image: rest27,
            name: 'The Party Hub',
            rating: 4.2,
            deliveryTime: 'Delivery in 55-60 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food',
            location: 'Chandigarh City',
            price: 550, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 27
        },
        {
            image: rest28,
            name: 'India Gate Restaurant',
            rating: 4.3,
            deliveryTime: 'Delivery in 45-50 mins',
            cuisine: 'North Indian, South Indian, Chinese, Beverages, Fast Food',
            location: 'Chandigarh City',
            price: 600, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 28
        },
        {
            image: rest29,
            name: 'The Gourmet Spot',
            rating: 4.6,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'European, Italian, Seafood',
            location: 'Chandigarh Central',
            price: 700, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 29
        },
        {
            image: rest30,
            name: 'Royal Curry House',
            rating: 4.4,
            deliveryTime: 'Delivery in 40-50 mins',
            cuisine: 'Indian, Punjabi, Mughlai',
            location: 'Chandigarh East',
            price: 650, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 30
        },
        {
            image: rest31,
            name: 'Sushi Haven',
            rating: 4.7,
            deliveryTime: 'Delivery in 25-35 mins',
            cuisine: 'Japanese, Sushi, Ramen',
            location: 'Chandigarh South',
            price: 800, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 31
        },
        {
            image: rest32,
            name: 'Burger Junction',
            rating: 4.2,
            deliveryTime: 'Delivery in 20-30 mins',
            cuisine: 'American, Burgers, Fries',
            location: 'Chandigarh West',
            price: 400, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 32
        },
        {
            image: rest33,
            name: 'Veggie Delight',
            rating: 4.5,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Vegetarian, Vegan, Salads',
            location: 'Chandigarh North',
            price: 350, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 33
        },
        {
            image: rest34,
            name: 'Pasta Paradise',
            rating: 4.8,
            deliveryTime: 'Delivery in 35-45 mins',
            cuisine: 'Italian, Pasta, Pizza',
            location: 'Chandigarh West',
            price: 700, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 34
        },
        {
            image: rest35,
            name: 'Sweet Treats Cafe',
            rating: 4.6,
            deliveryTime: 'Delivery in 25-35 mins',
            cuisine: 'Desserts, Cakes, Pastries',
            location: 'Chandigarh Central',
            price: 500, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 35
        },
        {
            image: rest36,
            name: 'Spice Affair',
            rating: 4.1,
            deliveryTime: 'Delivery in 40-50 mins',
            cuisine: 'Indian, Spicy, Tandoori',
            location: 'Chandigarh North',
            price: 600, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 36
        },
        {
            image: rest37,
            name: 'The Vegan Bowl',
            rating: 4.5,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Vegan, Vegetarian, Healthy',
            location: 'Chandigarh South',
            price: 400, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 37
        },
        {
            image: rest38,
            name: 'Momo Mania',
            rating: 4.2,
            deliveryTime: 'Delivery in 20-30 mins',
            cuisine: 'Chinese, Momos, Noodles',
            location: 'Chandigarh East',
            price: 350, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 38
        },
        {
            image: rest39,
            name: 'Seafood Haven',
            rating: 4.7,
            deliveryTime: 'Delivery in 35-45 mins',
            cuisine: 'Seafood, Fish, Prawns',
            location: 'Chandigarh Central',
            price: 750, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 39
        },
        {
            image: rest40,
            name: 'Burger Bonanza',
            rating: 4.3,
            deliveryTime: 'Delivery in 25-35 mins',
            cuisine: 'American, Burgers, Fries',
            location: 'Chandigarh West',
            price: 500, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 40
        },
        {
            image: rest41,
            name: 'Tandoori Nights',
            rating: 4.6,
            deliveryTime: 'Delivery in 40-50 mins',
            cuisine: 'Indian, Tandoori, Grills',
            location: 'Chandigarh City',
            price: 600, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 41
        },
        {
            image: rest42,
            name: 'Pizza Palace',
            rating: 4.4,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Italian, Pizza, Pasta',
            location: 'Chandigarh Central',
            price: 700, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 42
        },
        {
            image: rest43,
            name: 'Healthy Eats',
            rating: 4.3,
            deliveryTime: 'Delivery in 25-35 mins',
            cuisine: 'Healthy, Organic, Salads',
            location: 'Chandigarh North',
            price: 450, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 43
        },
        {
            image: rest44,
            name: 'Fusion Feast',
            rating: 4.6,
            deliveryTime: 'Delivery in 35-45 mins',
            cuisine: 'Fusion, International, Innovative',
            location: 'Chandigarh East',
            price: 750, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 44
        },
        {
            image: rest45,
            name: 'Sweet Tooth',
            rating: 4.7,
            deliveryTime: 'Delivery in 20-30 mins',
            cuisine: 'Desserts, Cakes, Pastries',
            location: 'Chandigarh South',
            price: 500, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 45
        },
        {
            image: rest46,
            name: 'Barbecue Bliss',
            rating: 4.5,
            deliveryTime: 'Delivery in 40-50 mins',
            cuisine: 'Barbecue, Grills, American',
            location: 'Chandigarh West',
            price: 650, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 46
        },
        {
            image: rest47,
            name: 'Dim Sum Delight',
            rating: 4.4,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Chinese, Dim Sum, Noodles',
            location: 'Chandigarh Central',
            price: 500, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 47
        },
        {
            image: rest48,
            name: 'Cafe Delight',
            rating: 4.2,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Cafe, Coffee, Light Snacks',
            location: 'Chandigarh North',
            price: 400, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 48
        },
        {
            image: rest49,
            name: 'Gourmet Garden',
            rating: 4.6,
            deliveryTime: 'Delivery in 35-45 mins',
            cuisine: 'Gourmet, International, Organic',
            location: 'Chandigarh South',
            price: 750, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 49
        },
        {
            image: rest50,
            name: 'Sushi Spot',
            rating: 4.4,
            deliveryTime: 'Delivery in 25-35 mins',
            cuisine: 'Japanese, Sushi, Asian',
            location: 'Chandigarh East',
            price: 700, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 50
        },
        {
            image: rest51,
            name: 'Curry Junction',
            rating: 4.3,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Indian, Curries, Vegetarian',
            location: 'Chandigarh Central',
            price: 600, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 51
        },
        {
            image: rest52,
            name: 'Pasta Palace',
            rating: 4.5,
            deliveryTime: 'Delivery in 20-30 mins',
            cuisine: 'Italian, Pasta, Pizza',
            location: 'Chandigarh West',
            price: 650, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 52
        },
        {
            image: rest53,
            name: 'Burger Bistro',
            rating: 4.2,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Burgers, Fast Food, American',
            location: 'Chandigarh South',
            price: 500, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 53
        },
        {
            image: rest54,
            name: 'Noodle Nook',
            rating: 4.6,
            deliveryTime: 'Delivery in 25-35 mins',
            cuisine: 'Chinese, Noodles, Asian',
            location: 'Chandigarh Central',
            price: 550, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 54
        },
        {
            image: rest55,
            name: 'Royal Curry House',
            rating: 4.4,
            deliveryTime: 'Delivery in 40-50 mins',
            cuisine: 'Indian, Punjabi, Mughlai',
            location: 'Chandigarh East',
            price: 650, // Adjust the price as needed
            isVeg: false, // Change to true if the restaurant is vegetarian
            index: 55
        },
        {
            image: rest56,
            name: 'Bakery Bliss',
            rating: 4.4,
            deliveryTime: 'Delivery in 30-40 mins',
            cuisine: 'Bakery, Pastries, Desserts',
            location: 'Chandigarh North',
            price: 450, // Adjust the price as needed
            isVeg: true, // Change to false if the restaurant serves non-vegetarian
            index: 56
        },
        
        
        
        
        // Add more restaurants as needed...
    ];

    // Filter the restaurant list based on active filters and search query
    const filteredRestaurants = restaurants
        .filter((restaurant) => {
            // Filter based on search query
            if (searchQuery && !restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Filter based on selected filter
            if (filterValue === 4 && restaurant.deliveryTime === 'Delivery in 45-50 mins') { // Fast Delivery filter
                return true;
            }
            if (filterValue === 9 && restaurant.rating >= 4.0) { // Ratings 4.0+ filter
                return true;
            }
            if (filterValue === 15 && restaurant.isVeg) { // Pure Veg filter
                return true;
            }
            if (filterValue === 12 && restaurant.offer) { // Offers filter
                return true;
            }
            if (filterValue === 3 && restaurant.price >= 300 && restaurant.price <= 600) { // Rs. 300-Rs. 600 filter
                return true;
            }
            if (filterValue === 2 && restaurant.price < 300) { // Less than Rs. 300 filter
                return true;
            }

            // If no filter is selected, return true (show all restaurants)
            return !filterValue;
        });

    // Show more / show less functionality
    const visibleRestaurants = showMore ? filteredRestaurants : filteredRestaurants.slice(0, 16);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilterClick = (filterValue) => {
        setFilterValue(filterValue);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div>
            {/* Filter Section */}
            <div className="filter-section">
                <div onClick={() => handleFilterClick(4)} className="orange-button">Fast Delivery</div>
                <div onClick={() => handleFilterClick(9)} className="orange-button">Ratings 4.0+</div>
                <div onClick={() => handleFilterClick(15)} className="orange-button">Pure Veg</div>
                <div onClick={() => handleFilterClick(12)} className="orange-button">Offers</div>
                <div onClick={() => handleFilterClick(3)} className="orange-button">Rs. 300-Rs. 600</div>
                <div onClick={() => handleFilterClick(2)} className="orange-button">Less than Rs. 300</div>
            </div>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for restaurant and food"
                    className="search-bar-1"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="button">Search</button>
            </div>

            {/* Restaurant Cards */}
            <div className="restaurant-list">
                {visibleRestaurants.map((restaurant, index) => (
                    <div key={index} className="restaurant-card" data-index={restaurant.index}>
                        <a href="delivery.html">
                            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                        </a>
                        <div className="restaurant-info">
                            <h3>{restaurant.name}</h3>
                            {restaurant.offer && <p className="offer">{restaurant.offer}</p>}
                            <p className="rating">{restaurant.rating}</p>
                            <p className="delivery-time">{restaurant.deliveryTime}</p>
                            <p>Cuisine: {restaurant.cuisine}</p>
                            <p>Location: {restaurant.location}</p>
                        </div>
                    </div>
                ))}

                {/* Show More / Show Less Button */}
                <button className="more-rest" onClick={toggleShowMore}>
                    {showMore ? 'SHOW LESS' : 'SHOW MORE'}
                </button>
            </div>
        </div>
    );
}

export default RestaurantList;
