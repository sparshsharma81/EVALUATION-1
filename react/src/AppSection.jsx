import React, { useState } from 'react';
import './index.css'; // Assuming the styles are in index.css

// Import images
import appImage from './assets/food/app.avif';
import playImage from './assets/food/play.webp';
import appStoreImage from './assets/food/ap.webp';

const AppSection = () => {
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`App link will be sent to: ${email}`);
  };

  return (
    <div className="app-section">
      <div className="app-container">
        <img
          src={appImage} // Use imported image here
          alt="FOODHUB App"
          className="app-image"
        />
        <div className="app-content">
          <h2>Get the Spicytaste App</h2>
          <p>We will send you a link, open it on your phone to download the app.</p>
          <form className="app-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Share App Link</button>
          </form>
          <div className="download-links">
            <p>Download the app from:</p>
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="app-link">
              <img
                src={playImage} // Use imported image here
                alt="Google Play"
                className="play"
              />
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="app-link">
              <img
                src={appStoreImage} // Use imported image here
                alt="App Store"
                className="play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
