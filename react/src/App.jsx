import React from 'react';
import './index.css';  // Importing the global CSS file
import CarouselComponent from './CarouselComponent'; // Adjust the import path if needed
import CarouselWrapper from './CarouselWrapper';
import Header from './Header';
import SearchContainer from './SearchContainer';
import FoodHub from './FoodHub';
import Localities from './Localities';
import SpicyTasteContainer from './SpicyTasteContainer';
import AppSection from './AppSection';
import BusinessHowItWorks from './BusinessHowItWorks';
import AddRestaurantButton from './AddRestaurantButton';
import BrowseRestaurantsButton from './BrowseRestaurantsButton';
import HowSpicyTasteWorksForCustomers from './HowSpicyTasteWorksForCustomers';
import BusinessOpportunity from './BusinessOpportunity';
import Footer from './FOOTER.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import RestaurantList from './RestaurantList.jsx';

function App() {
  return (
    <div className="App">
      {/* Other components or content can go here */}
      
      <Header/>
      
      <CarouselWrapper/>
      <CarouselComponent />
      <ThemeToggle/>
      <SearchContainer/>
      <FoodHub/>
      <Localities/>

      <SpicyTasteContainer/>
      <AppSection/>
       <RestaurantList/>
       <br/>
       <br/>
       <br/>
      <BusinessHowItWorks/>
      
      <BrowseRestaurantsButton/>
      <HowSpicyTasteWorksForCustomers/>
      <AddRestaurantButton/>
      <BusinessOpportunity/>
      <Footer/>
      
    </div>
  );
}

export default App;
