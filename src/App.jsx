import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Header_Soleado from './components/Header_Soleado';
import Hero from './components/Hero';
import HeroCalidoModerno from './components/Hero_CalidoModerno';
import Hero_Soleado from './components/Hero_Soleado';
import Services from './components/Services';
import Services_Soleado from './components/Services_Soleado';
import ClientStories_Soleado from './components/ClientStories_Soleado';
import Values from './components/Values';
import Description from './components/Description';
import AppSection from './components/AppSection';
import Testimonials from './components/Testimonials';
import Recruitment from './components/Recruitment';
import Footer from './components/Footer';
import SolarProjects from './pages/SolarProjects';
import ServiceDetail from './pages/ServiceDetail';
import { LanguageProvider } from './context/LanguageContext';

// Home Page Component (Original)
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

// Modern Page Component
const HomeModern = () => (
  <>
    <Header />
    <HeroCalidoModerno />
    <Services />
    <Values />
    <Description />
    <AppSection />
    <Testimonials />
    <Recruitment />
    <Footer />
  </>
);

// Soleado Page Component
const Soleado = () => (
  <>
    <Header_Soleado />
    <Hero_Soleado />
    <Services_Soleado />
    <ClientStories_Soleado />
    <Footer />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeModern />} />
          <Route path="/calidomoderno" element={<Home />} />
          <Route path="/soleado" element={<Soleado />} />
          <Route path="/solar-projects" element={<SolarProjects />} />
          <Route path="/tjanster/:slug" element={<ServiceDetail />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
