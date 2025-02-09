import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/gallery');  // Navigate to the gallery page
  };

  const handleNoClick = () => {
    alert("Even if you say no, you're still the best. ❤️");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Hi My Love ♥! Maybe, perhaps, Will You Be My Valentine?</h1>
        <div className="button-group">
          <button className="btn btn-success" onClick={handleYesClick}>Yes!</button>
          <button className="btn btn-danger" onClick={handleNoClick}>No... 😢</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
