import React from 'react';
import './WebTeam.css'; // Importing CSS for styling

// Sample data for web developers
const webDevelopers = [
  {
    name: "Alice Johnson",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/alice-johnson"
  },
  {
    name: "Bob Smith",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/bob-smith"
  },
  {
    name: "Charlie Brown",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/charlie-brown"
  },
  {
    name: "Diana Prince",
    photo: "https://via.placeholder.com/150", // Replace with actual photo URL
    linkedin: "https://www.linkedin.com/in/diana-prince"
  },
];

const WebTeam = () => {
  return (
    <div className="web-team-container">
      <h1>WEB TEAM</h1>
      <div className="developer-grid">
        {webDevelopers.map((developer, index) => (
          <div className="developer-card" key={index}>
            <img src={developer.photo} alt={developer.name} />
            <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
              <p>{developer.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebTeam;
