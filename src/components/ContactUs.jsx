import React from 'react';
import './ContactUs.css'; // Importing CSS for styling

// Sample data for coordinators
const staffCoordinators = [
  {
    name: "Dr.N.Sivagami",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/john-smith"
  },
];

const studentCoordinators = [
  {
    name: "Vishwa",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/alice-brown"
  },
  {
    name: "Roshini",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/bob-johnson"
  },
  {
    name: "Praveen",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/alice-brown"
  },
  {
    name: "Mahathi",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/bob-johnson"
  },
];

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <h2>Staff Coordinator</h2>
      <div className="coordinator-grid">
        {staffCoordinators.map((coordinator, index) => (
          <div className="coordinator-card" key={index}>
            <img src={coordinator.photo} alt={coordinator.name} />
            <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer">
              <p>{coordinator.name}</p>
            </a>
          </div>
        ))}
      </div>

      <h2>Student Coordinators</h2>
      <div className="coordinator-grid">
        {studentCoordinators.map((coordinator, index) => (
          <div className="coordinator-card" key={index}>
            <img src={coordinator.photo} alt={coordinator.name} />
            <a href={coordinator.linkedin} target="_blank" rel="noopener noreferrer">
              <p>{coordinator.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
