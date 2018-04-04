import React from 'react';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Skills from './components/skills.jsx';
import Routes from './routes';

const Application = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default Application;
