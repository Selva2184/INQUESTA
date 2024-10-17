import React, { useState, useEffect, useRef } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import './App.css';
import Event from './Event';
import WebTeam from './WebTeam';
import About from './about'; 
import ContactUs from './ContactUs'; 
import DayDetail from './DayDetail';

function Home({ aboutRef, contactRef }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const eventDate = new Date("2024-11-25T00:00:00").getTime(); 

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      if (timeLeft > 0) {
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ message: "Event has started!" });
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>SRI SAIRAM ENGINEERING COLLEGE</h1>
      <h2>&</h2>
      <h1>NDLI CLUB</h1>
      <h2>Present</h2>
      <h1>INQUESTA</h1>
      <div className="timer">
        {timeLeft.message ? (
          <p>{timeLeft.message}</p>
        ) : (
          <p>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        )}
      </div>
    </div>
  );
}

const App = () => {
  const aboutRef = useRef(null); // Create a ref for the About section
  const contactRef = useRef(null); // Create a ref for the Contact Us section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const handleScrollToAbout = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to About section smoothly
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to Contact Us section smoothly
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <Router>
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776; {/* This represents the hamburger icon */}
      </div>

      {/* Menu Links */}
      {isMenuOpen && (
        <nav className="menu">
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/event" onClick={() => setIsMenuOpen(false)}>Event</Link></li>
            <li><Link to="#" onClick={handleScrollToContact}>Contact Us</Link></li>
            <li><Link to="/web-team" onClick={() => setIsMenuOpen(false)}>Web Team</Link></li>
            <li><Link to="#" onClick={handleScrollToAbout}>About</Link></li>
          </ul>
        </nav>
      )}

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home aboutRef={aboutRef} contactRef={contactRef} />
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={contactRef}>
                <ContactUs />
              </div>
            </>
          } 
        />
        <Route path="/event" element={<Event />} />
        <Route path="/web-team" element={<WebTeam />} />
        <Route path="/event/day/:dayId" element={<DayDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
