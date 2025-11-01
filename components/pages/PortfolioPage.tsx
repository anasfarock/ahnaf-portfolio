"use client";

import { useState, useEffect, useCallback } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import PortfolioGrid from "../PortfolioGrid";
import Lightbox from "../Lightbox";
import { portfolioImages } from "@/data/portfolio";

interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
}

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, currentIndex: 0 });

  const closeLightbox = useCallback(() => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
    document.body.style.overflow = 'auto';
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightbox({ isOpen: true, currentIndex: index });
    document.body.style.overflow = 'hidden';
  }, []);

  const nextImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % portfolioImages.length,
    }));
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + portfolioImages.length) % portfolioImages.length,
    }));
  }, []);

  // Handle cleanup and scroll management
  useEffect(() => {
    const cleanup = () => {
      document.body.style.overflow = 'auto';
      if (lightbox.isOpen) {
        closeLightbox();
      }
    };

    // Handle navigation events
    const handleRouteChange = () => {
      cleanup();
    };

    window.addEventListener('popstate', handleRouteChange);
    
    // Clean up on unmount
    return () => {
      cleanup();
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [lightbox.isOpen, closeLightbox]);

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white px-5 md:px-20 min-h-screen">
      <Navigation />
      <div className="container mx-auto">
        <h1 className="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
        <PortfolioGrid onImageClick={openLightbox} />
      </div>
      <Footer />
      <Lightbox
        images={portfolioImages}
        isOpen={lightbox.isOpen}
        currentIndex={lightbox.currentIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}