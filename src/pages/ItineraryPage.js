import React, { useState } from 'react';
import './ItineraryPage.css';

// Import images
import WalkingTourImage from '../assets/images/mansionholiday (1).jpeg';
import DessertImage from '../assets/images/images.jpeg';

function ItineraryPage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  const handleRestaurantSelection = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className="itinerary-container">
      <h1>Your Valentine’s Day Itinerary ❤️</h1>

      {/* Restaurant Selection */}
      <div className="card restaurant-selection">
        <h2>Step 1: Choose a Restaurant for Dunch</h2>
        <div className="button-group">
          <button
            className={`btn ${selectedRestaurant === 'Ajumma' ? 'btn-selected' : ''}`}
            onClick={() => handleRestaurantSelection('Ajumma')}
          >
            Ajumma in Cary (3:30 PM)
          </button>
          <a
            href="https://order.toasttab.com/online/ajumma-2055-renaissance-park-place"
            className="restaurant-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Ajumma Website
          </a>

          <button
            className={`btn ${selectedRestaurant === 'Tapei 101' ? 'btn-selected' : ''}`}
            onClick={() => handleRestaurantSelection('Tapei 101')}
          >
            Tapei 101 in Cary (3:30 PM)
          </button>
          <a
            href="https://www.ezordernow.com/taipei101"
            className="restaurant-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Tapei 101 Website
          </a>
        </div>

        {selectedRestaurant && (
          <p className="selected-message">You selected: {selectedRestaurant}</p>
        )}
      </div>

      {/* Activity Details */}
      <div className="card activity-details">
        <h2>Step 2: Love Stories & Broken Hearts Walking Tour</h2>
        <p>5:00 - 6:15 PM</p>
        <img src={WalkingTourImage} alt="Walking Tour" className="itinerary-image" />
      </div>

      <div className="card activity-details">
        <h2>Step 3: Desserts at Dorothy Dix Park</h2>
        <p>6:30 PM</p>
        <img src={DessertImage} alt="Desserts" className="itinerary-image" />
      </div>
    </div>
  );
}

export default ItineraryPage;
