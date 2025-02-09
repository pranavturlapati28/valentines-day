import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ItineraryPage from './pages/ItineraryPage';

function App() {
  return (
    <Router basename="/valentines-day">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
