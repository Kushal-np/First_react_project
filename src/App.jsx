// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeScreen from './Pages/Homescreen';
import About from './Pages/About/About';
// import other pages as needed...

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/about" element={<About />} />
      {/* Add more routes here like /features, /contact, etc. */}
    </Routes>
  );
};

export default App;
