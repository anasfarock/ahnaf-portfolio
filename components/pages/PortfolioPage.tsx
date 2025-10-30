// components/pages/PortfolioPage.jsx
"use client";

import { useState } from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import FadeInWrapper from "../FadeInWrapper";
import PortfolioGrid from "../PortfolioGrid";
import Lightbox from "../Lightbox";
import { portfolioImages } from "@/data/portfolio";

export default function PortfolioPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, currentIndex: 0 });

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % portfolioImages.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex - 1 + portfolioImages.length) %
        portfolioImages.length,
    }));
  };

  return (
    <FadeInWrapper>
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
    </FadeInWrapper>
  );
}
