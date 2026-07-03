import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import SpecTabs from './components/SpecTabs';
import Colorways from './components/Colorways';
import Gallery from './components/Gallery';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

export default function App() {

  const [activeColor, setActiveColor] = useState('legend');

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero activeColor={activeColor} />
        <Ticker />
        <SpecTabs />
        <Colorways activeColor={activeColor} onChange={setActiveColor} />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
