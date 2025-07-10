// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeScreen from './Pages/Homescreen';
import About from './Pages/About/About';
import FeaturesPage from './Pages/Features';
import ContactUs from './Pages/ContactUs';
import LoginForm from './Pages/Login';
import SignUpForm from './Pages/SignUp';
// import other pages as needed...

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/about" element={<About />} />
      <Route path="features" element={<FeaturesPage />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="signup" element={<SignUpForm />} />


      {/* Add more routes here like /features, /contact, etc. */}
    </Routes>
  );
};

export default App;
