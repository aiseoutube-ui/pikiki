
import React from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blog from './components/Blog';
import VideoSection from './components/VideoSection';
import AppShowcase from './components/AppShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Blog />
        <VideoSection />
        <AppShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
