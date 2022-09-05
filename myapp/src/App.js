import './App.css';
// import Example from './components/navbar';
import React from 'react';
import Header from './components/Header';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import Form from './components/Form';
import TestComp from './components/TestComp';
import Home from './components/Fields';
function App() {
  return (
    <div>
      <HeroSection/>
      <Home/>
      {/* <CTASection/> */}
      <FeatureSection/>
    </div>
  );
}

export default App;
