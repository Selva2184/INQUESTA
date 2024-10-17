import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css'; // Ensure this file contains your styles

const Event = () => {
  return (
    <div className="event-container">
      <h1>Event </h1>
      <div className="day-boxes">
        <Link to="/event/day/1" className="day-box">Day 1</Link>
        <div className="space"></div>
        <Link to="/event/day/2" className="day-box">Day 2</Link>
      </div>
      <div className="day-boxes">
        <Link to="/event/day/3" className="day-box">Day 3</Link>
        <div className="space"></div>
        <Link to="/event/day/4" className="day-box">Day 4</Link>
      </div>
    </div>
  );
};

export default Event;
