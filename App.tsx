import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsPage from './components/AboutUsPage';
import SignatureDishesSection from './components/SignatureDishesSection';
import MenuSection from './components/MenuSection';
import TestimonialsSection from './components/TestimonialsSection';
import AwardsSection from './components/AwardsSection';
import LocationsSection from './components/LocationsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import NewsletterPopup from './components/NewsletterPopup';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsFadingOut(true);
      // Remove loading screen from DOM after fade out
      setTimeout(() => setIsLoading(false), 700);
    }, 2000);

    // Show newsletter popup after a delay
    const popupTimer = setTimeout(() => {
      // Don't show popup if it was already closed/seen in this session
      if (!sessionStorage.getItem('newsletter_popup_seen')) {
        setIsPopupOpen(true);
      }
    }, 8000); // Show after 8 seconds

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(popupTimer);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [isLoading]);
  
  const handlePopupClose = () => {
    setIsPopupOpen(false);
    sessionStorage.setItem('newsletter_popup_seen', 'true');
  }

  return (
    <>
      {isLoading && <LoadingScreen isFadingOut={isFadingOut} />}
      <div className={`bg-white font-sans ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <Header />
        <main>
          <HeroSection />
          <AboutUsPage />
          <SignatureDishesSection />
          <MenuSection />
          <TestimonialsSection />
          <AwardsSection />
          <LocationsSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
        <NewsletterPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
      </div>
    </>
  );
}

export default App;
