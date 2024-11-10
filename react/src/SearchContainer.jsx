import React, { useState } from 'react';
import './index.css';  // Assuming you have the CSS

const SearchContainer = () => {
  const [location, setLocation] = useState("");
  const [restaurantSearch, setRestaurantSearch] = useState("");

  // Handle change in location select
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handle change in restaurant search input
  const handleRestaurantSearchChange = (e) => {
    setRestaurantSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <select
          id="location"
          name="location"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">Select a location...</option>
          <option value="andhra_pradesh">Andhra Pradesh</option>
          <option value="arunachal_pradesh">Arunachal Pradesh</option>
          <option value="assam">Assam</option>
          <option value="bihar">Bihar</option>
          <option value="chandigarh">Chandigarh</option>
          <option value="chhattisgarh">Chhattisgarh</option>
          <option value="daman_and_diu">Daman and Diu</option>
          <option value="delhi">Delhi</option>
          <option value="goa">Goa</option>
          <option value="gujarat">Gujarat</option>
          <option value="haryana">Haryana</option>
          <option value="himachal_pradesh">Himachal Pradesh</option>
          <option value="jammu_kashmir">Jammu and Kashmir</option>
          <option value="jharkhand">Jharkhand</option>
          <option value="karnataka">Karnataka</option>
          <option value="kerala">Kerala</option>
          <option value="laddakh">Ladakh</option>
          <option value="lakshadweep">Lakshadweep</option>
          <option value="ladakh">Ladakh</option>
          <option value="madhya_pradesh">Madhya Pradesh</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="manipur">Manipur</option>
          <option value="meghalaya">Meghalaya</option>
          <option value="mizoram">Mizoram</option>
          <option value="nagaland">Nagaland</option>
          <option value="odisha">Odisha</option>
          <option value="puducherry">Puducherry</option>
          <option value="punjab">Punjab</option>
          <option value="rajasthan">Rajasthan</option>
          <option value="sikkim">Sikkim</option>
          <option value="tamil_nadu">Tamil Nadu</option>
          <option value="telangana">Telangana</option>
          <option value="tripura">Tripura</option>
          <option value="uttar_pradesh">Uttar Pradesh</option>
          <option value="uttarakhand">Uttarakhand</option>
          <option value="west_bengal">West Bengal</option>
        </select>
        
        <input
          type="text"
          id="restaurant-search"
          value={restaurantSearch}
          onChange={handleRestaurantSearchChange}
          placeholder="Search for a restaurant..."
        />
        
        <button type="button" className="search-button-11">
          <a href="rest.html" style={{ color: 'white', textDecoration: 'none' }}>
            Search
          </a>
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
