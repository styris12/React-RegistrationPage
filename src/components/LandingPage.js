import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Registration Page</h1>
      <p>Click below to register:</p>
      <Link to="/register">
        <button className="register-btn">Go to Registration</button>
      </Link>
      </div>
  );
};

export default LandingPage;
