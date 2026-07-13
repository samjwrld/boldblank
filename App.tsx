import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import FluidBackground from './components/FluidBackground';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Process from './pages/Process';
import Contact from './pages/Contact';

// SEO Service Pages
import Branding from './pages/services/Branding';
import WebDesign from './pages/services/WebDesign';
import UiUxDesign from './pages/services/UiUxDesign';
import DigitalMarketing from './pages/services/DigitalMarketing';
import AiConsultancy from './pages/services/AiConsultancy';

import Insights from './pages/Insights';
import Article from './pages/insights/Article';
import ProjectDetail from './pages/work/ProjectDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/branding-agency-india" element={<Branding />} />
        <Route path="/website-design-agency" element={<WebDesign />} />
        <Route path="/ui-ux-design-agency" element={<UiUxDesign />} />
        <Route path="/digital-marketing-agency-india" element={<DigitalMarketing />} />
        <Route path="/ai-consultancy-india" element={<AiConsultancy />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<Article />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CustomCursor />
        <FluidBackground />
        <div className="flex flex-col min-h-screen font-sans text-light antialiased selection:bg-accent selection:text-black cursor-none relative z-10">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;