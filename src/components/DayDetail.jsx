import React from 'react';
import { useParams } from 'react-router-dom';

// Sample poster URLs (replace with your actual image URLs)
const dayPosters = {
  1: "https://via.placeholder.com/600x300?text=Day+1+Poster", // Replace with actual image URL
  2: "https://via.placeholder.com/600x300?text=Day+2+Poster", // Replace with actual image URL
  3: "https://via.placeholder.com/600x300?text=Day+3+Poster", // Replace with actual image URL
  4: "https://via.placeholder.com/600x300?text=Day+4+Poster"  // Replace with actual image URL
};

const DayDetail = () => {
  const { dayId } = useParams();

  const dayDetails = {
    1: {
      description: "Detailed description for Day 1 events. Here you can provide more information.",
      poster: dayPosters[1]
    },
    2: {
      description: "Detailed description for Day 2 events. Include schedules and speakers.",
      poster: dayPosters[2]
    },
    3: {
      description: "Detailed description for Day 3 events. Highlight special activities.",
      poster: dayPosters[3]
    },
    4: {
      description: "Detailed description for Day 4 events. Wrap up the event with keynotes.",
      poster: dayPosters[4]
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Details for Day {dayId}</h1>
      <img src={dayDetails[dayId].poster} alt={`Day ${dayId} Poster`} style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>{dayDetails[dayId].description}</p>
    </div>
  );
};

export default DayDetail;
