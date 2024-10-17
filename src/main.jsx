import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './index.css'; // Your CSS styles

// Render the App component within StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Only render App here */}
  </StrictMode>
);
