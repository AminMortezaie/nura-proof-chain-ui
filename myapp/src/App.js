import './App.css';
// import Example from './components/navbar';
import React from 'react';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import Home from './components/Fields';

function App() {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <Home/>
    </div>
  );
}

export default App;
