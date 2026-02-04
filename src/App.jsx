import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Description from './components/Description';
import AppSection from './components/AppSection';
import Testimonials from './components/Testimonials';
import Recruitment from './components/Recruitment';
import Footer from './components/Footer';
import SolarProjects from './pages/SolarProjects';
import { LanguageProvider } from './context/LanguageContext';

// Home Page Component
const Home = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <Values />
    <Description />
    <AppSection />
    <Testimonials />
    <Recruitment />
    <Footer />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar-projects" element={<SolarProjects />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
