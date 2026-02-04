import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Description from './components/Description';
import AppSection from './components/AppSection';
import Testimonials from './components/Testimonials';
import Recruitment from './components/Recruitment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Values />
      <Description />
      <AppSection />
      <Testimonials />
      <Recruitment />
      <Footer />
    </div>
  );
}

export default App;
