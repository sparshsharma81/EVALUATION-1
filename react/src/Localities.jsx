import React, { useState } from 'react';
import './index.css'; // Assuming the styles are in index.css

const Localities = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="container">
      <h1>Popular Localities in and around Chandigarh</h1>
      <div className="locality-container">
        <div className="locality-box"><a href="rest.html">Kharar Road<br />653 places</a></div>
        <div className="locality-box"><a href="rest.html">Phase 3, Mohali<br />115 places</a></div>
        <div className="locality-box"><a href="rest.html">Sector 17, Chandigarh<br />44 places</a></div>
        <div className="locality-box"><a href="rest.html">Sector 34, Chandigarh<br />50 places</a></div>
        <div className="locality-box"><a href="rest.html">Phase 10, Mohali<br />84 places</a></div>
      </div>

      {/* Toggle checkbox for expanding */}
      <input 
        type="checkbox" 
        id="toggle-checkbox" 
        checked={isExpanded} 
        onChange={toggleContent}
        style={{ display: 'none' }} // Hide the checkbox, style it with label instead
      />
      
      <div className={`more-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="locality-container">
          <div className="locality-box"><a href="rest.html">Kharar Road<br />653 places</a></div>
          <div className="locality-box"><a href="rest.html">Phase 3, Mohali<br />115 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 17, Chandigarh<br />44 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 34, Chandigarh<br />50 places</a></div>
          <div className="locality-box"><a href="rest.html">Phase 10, Mohali<br />84 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 10, Chandigarh<br />32 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 22, Chandigarh<br />81 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 5, Panchkula<br />78 places</a></div>
          <div className="locality-box"><a href="rest.html">Phase 7, Mohali<br />85 places</a></div>
          <div className="locality-box"><a href="rest.html">Ambala Road<br />219 places</a></div>
          <div className="locality-box"><a href="rest.html">VIP Road<br />410 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 70, Mohali<br />209 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 2, Panchkula<br />31 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 20, Panchkula<br />107 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 15, Chandigarh<br />50 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 32, Chandigarh<br />43 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 16, Panchkula<br />29 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 67, Mohali<br />188 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 11, Panchkula<br />33 places</a></div>
          <div className="locality-box"><a href="rest.html">Sector 46, Chandigarh<br />68 places</a></div>
          <div className="locality-box"><a href="rest.html">IT Park<br />22 places</a></div>
        </div>
      </div>

      {/* Toggle label */}
      <div className="toggle-container">
        <label htmlFor="toggle-checkbox">{isExpanded ? '' : ''}</label>
      </div>
    </div>
  );
};

export default Localities;
