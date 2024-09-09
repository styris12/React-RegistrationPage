import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
