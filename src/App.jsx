import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ContentProvider, useContent } from './context/ContentContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Careers from './pages/Careers';
import ServicesPage from './pages/ServicesPage';
import LiveStream from './pages/services/LiveStream';
import Crypto from './pages/services/Crypto';
import Games from './pages/services/Games';
import VoiceChat from './pages/services/VoiceChat';
import TextChat from './pages/services/TextChat';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Admin from './pages/Admin';
import './App.css';

const AppLayout = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const { content } = useContent();

  useEffect(() => {
    if (content?.general?.siteTitle) {
      document.title = content.general.siteTitle;
    }
  }, [content?.general?.siteTitle]);

  return (
    <div className="app-container">
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Kurumsal */}
          <Route path="/hakkimizda" element={<AboutUs />} />
          <Route path="/ekibimiz" element={<Team />} />
          <Route path="/kariyer" element={<Careers />} />
          
          {/* Hizmetlerimiz */}
          <Route path="/hizmetlerimiz" element={<ServicesPage />} />
          <Route path="/hizmetler/canli-yayin" element={<LiveStream />} />
          <Route path="/hizmetler/kripto" element={<Crypto />} />
          <Route path="/hizmetler/oyun" element={<Games />} />
          <Route path="/hizmetler/sesli-sohbet" element={<VoiceChat />} />
          <Route path="/hizmetler/chat" element={<TextChat />} />
          
          {/* Diğer */}
          <Route path="/projelerimiz" element={<Projects />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/yasal/:slug" element={<Legal />} />

          {/* Admin Paneli */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

function App() {
  return (
    <ContentProvider>
      <Router>
        <AppLayout />
      </Router>
    </ContentProvider>
  );
}

export default App;

