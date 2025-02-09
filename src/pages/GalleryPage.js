import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './GalleryPage.css';

function GalleryPage() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  // Stop confetti after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  // Update window size on mount and resize events
  useEffect(() => {
    const updateSize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleGoToItinerary = () => {
    navigate('/itinerary');  // Navigates to the Itinerary page
  };

  return (
    <div className="gallery-container">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={300}
        />
      )}
      <div className="text-container">
        <h1>Yayy! I love you. I have a fun day planned! ❤️</h1>
        <button className="btn-go-itinerary" onClick={handleGoToItinerary}>
          See Our Itinerary
        </button>
      </div>
    </div>
  );
}

export default GalleryPage;
