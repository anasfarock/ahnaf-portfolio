"use client";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// ============ TYPES ============
interface PortfolioImage {
  id: number;
  thumb: string;
  full: string;
  alt: string;
  col: 'full' | 'half';
}

interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
}

// ============ PORTFOLIO DATA ============
const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    thumb: 'https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    full: 'https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    alt: 'a person standing in front of a rock formation',
    col: 'half'
  },
  {
    id: 2,
    thumb: 'https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80',
    full: 'https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80',
    alt: 'a cat laying on top of a sidewalk next to the ocean',
    col: 'half'
  },
  {
    id: 3,
    thumb: 'https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80',
    full: 'https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80',
    alt: 'a man standing on a beach next to the ocean',
    col: 'full'
  },
  {
    id: 4,
    thumb: 'https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    full: 'https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'a snow covered mountain with trees on the side',
    col: 'full'
  },
  {
    id: 5,
    thumb: 'https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    full: 'https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'a branch of a plant floating in a body of water',
    col: 'half'
  },
  {
    id: 6,
    thumb: 'https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    full: 'https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'a blue sky with a lot of red and orange clouds',
    col: 'half'
  },
  {
    id: 7,
    thumb: 'https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    full: 'https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'a view of the ocean from the top of a hill',
    col: 'half'
  },
  {
    id: 8,
    thumb: 'https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80',
    full: 'https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80',
    alt: 'a pheasant flying in the sky with its wings spread',
    col: 'half'
  },
  {
    id: 9,
    thumb: 'https://images.unsplash.com/photo-1654018869756-d08407972836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2918&q=80',
    full: 'https://images.unsplash.com/photo-1654018869756-d08407972836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2918&q=80',
    alt: 'a statue of a man next to a statue of a woman',
    col: 'full'
  },
  {
    id: 10,
    thumb: 'https://images.unsplash.com/photo-1677075610184-57d21d023e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    full: 'https://images.unsplash.com/photo-1677075610184-57d21d023e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    alt: 'a city street with tall buildings in the background',
    col: 'half'
  },
  {
    id: 11,
    thumb: 'https://images.unsplash.com/photo-1558102400-72da9fdbecae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80',
    full: 'https://images.unsplash.com/photo-1558102400-72da9fdbecae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80',
    alt: '25 de abril bridge spanning over Tagus river',
    col: 'half'
  },
  {
    id: 12,
    thumb: 'https://images.unsplash.com/photo-1510673825466-302bc330ab95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
    full: 'https://images.unsplash.com/photo-1510673825466-302bc330ab95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
    alt: 'a lot of lanterns floating in the air at night',
    col: 'half'
  },
  {
    id: 13,
    thumb: 'https://images.unsplash.com/photo-1675620705848-bcab2d4d98a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    full: 'https://images.unsplash.com/photo-1675620705848-bcab2d4d98a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    alt: 'a flock of seaguls flying over a body of water',
    col: 'half'
  },
  {
    id: 14,
    thumb: 'https://images.unsplash.com/photo-1642415390616-2ac6727ac550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    full: 'https://images.unsplash.com/photo-1642415390616-2ac6727ac550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'a statue of a headless angel',
    col: 'half'
  },
  {
    id: 15,
    thumb: 'https://images.unsplash.com/photo-1551346072-8ba2706b0f36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80',
    full: 'https://images.unsplash.com/photo-1551346072-8ba2706b0f36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80',
    alt: 'Monument to the Discoveries viewed from top to bottom',
    col: 'half'
  },
  {
    id: 16,
    thumb: 'https://images.unsplash.com/photo-1624385690664-38a3af477cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    full: 'https://images.unsplash.com/photo-1624385690664-38a3af477cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'a group of people walking along the museum of art, architecture and technology of lisbon next to the Tagus river',
    col: 'full'
  }
];

// ============ NAVIGATION COMPONENT ============
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="flex w-full overflow-hidden pt-10 pb-1">
      <nav className="w-full">
        <div className="container mx-auto flex flex-wrap items-center md:flex-nowrap">
          <div className="mr-4 md:mr-8">
            <Link to="/" className="text-2xl font-signika font-bold">
              SOPHIA WILLIAMS
            </Link>
          </div>

          <div className="ml-auto md:hidden flex items-center justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    isOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            className={`w-full md:w-auto md:flex-grow md:flex md:items-center overflow-hidden transition-all ease-out duration-500 ${
              isOpen ? 'h-32' : 'h-0'
            } md:h-auto`}
          >
            <ul className="flex flex-col duration-300 ease-out md:space-x-5 sm:transition-none mt-5 md:flex-row md:items-center md:ml-auto md:mt-0 md:pt-0 md:border-0">
              <li className="group transition duration-300">
                <Link to="/" className="font-signika text-2xl tap-highlight-transparent" onClick={() => setIsOpen(false)}>
                  PORTFOLIO
                  <span className="hidden md:block h-0.5 bg-black dark:bg-white" />
                </Link>
              </li>
              <li className="group transition duration-300">
                <Link to="/about" className="font-signika text-2xl tap-highlight-transparent" onClick={() => setIsOpen(false)}>
                  ABOUT ME
                  <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white" />
                </Link>
              </li>
              <li className="group transition duration-300">
                <Link to="/contact" className="font-signika text-2xl tap-highlight-transparent" onClick={() => setIsOpen(false)}>
                  CONTACT
                  <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

// ============ FOOTER COMPONENT ============
const Footer = () => (
  <footer>
    <div className="max-w-screen-xl py-16 mx-auto">
      <div className="grid grid-cols-1 gap-8 text-center mx-auto">
        <div>
          <p className="font-signika"><b>SOPHIA WILLIAMS</b></p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            929 Sycamore Street San Francisco CA<br />(415) 208-2116
          </p>
          <div className="flex mx-auto">
            <div className="mx-auto space-x-6 flex mt-8 text-gray-600 dark:text-gray-300">
              {[
                { href: 'https://www.facebook.com', label: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { href: 'https://www.instagram.com', label: 'Instagram', path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                { href: 'https://twitter.com', label: 'Twitter', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                { href: 'https://www.linkedin.com', label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' }
              ].map(({ href, label, path }) => (
                <a key={label} className="transition duration-300 hover:opacity-75" href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">
        © 2023 Developed and Designed by
        <a href="https://www.linkedin.com/in/joão-franco-452161195/" className="underline ml-1">
          João Franco
        </a>
      </p>
    </div>
  </footer>
);

// ============ LIGHTBOX COMPONENT ============
const Lightbox = ({ images, isOpen, currentIndex, onClose, onNext, onPrev }: {
  images: PortfolioImage[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={onClose}>
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:opacity-75 z-10 text-2xl"
          aria-label="Close lightbox"
        >
          ✕
        </button>

        <img
          src={images[currentIndex].full}
          alt={images[currentIndex].alt}
          className="max-w-4xl max-h-screen object-contain"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 text-white hover:opacity-75 text-3xl"
          aria-label="Previous image"
        >
          &#10094;
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 text-white hover:opacity-75 text-3xl"
          aria-label="Next image"
        >
          &#10095;
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

// ============ FADE IN WRAPPER ============
const FadeInWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageOpacities, setImageOpacities] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageLoad = (index: number) => {
    setTimeout(() => {
      setImageOpacities((prev) => ({ ...prev, [index]: true }));
    }, index * 100);
  };

  return (
    <ImageOpacityContext.Provider value={{ imageOpacities, handleImageLoad }}>
      <div className={`transition duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </ImageOpacityContext.Provider>
  );
};

const ImageOpacityContext = React.createContext<{
  imageOpacities: Record<number, boolean>;
  handleImageLoad: (index: number) => void;
}>({ imageOpacities: {}, handleImageLoad: () => {} });

const AnimatedImage = ({ src, alt, index = 0, ...props }: any) => {
  const { imageOpacities, handleImageLoad } = React.useContext(ImageOpacityContext);
  const isVisible = imageOpacities[index] || false;

  useEffect(() => {
    handleImageLoad(index);
  }, [index, handleImageLoad]);

  return (
    <img
      src={src}
      alt={alt}
      className={`transition duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      {...props}
    />
  );
};

// ============ PORTFOLIO GRID COMPONENT ============
const PortfolioGrid = ({ onImageClick }: { onImageClick: (index: number) => void }) => {
  const leftColumn = portfolioImages.filter((_, i) => i < 3);
  const rightColumn = portfolioImages.filter((_, i) => i >= 3 && i < 8);
  const leftColumn2 = portfolioImages.filter((_, i) => i >= 8 && i < 13);
  const rightColumn2 = portfolioImages.filter((_, i) => i >= 13);

  const ImageTile = ({ image, index }: { image: PortfolioImage; index: number }) => (
    <div className="p-1 overflow-hidden h-full w-full">
      <button
        onClick={() => onImageClick(index)}
        className="overflow-hidden h-full w-full block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
        aria-label={`View ${image.alt}`}
      >
        <AnimatedImage
          src={image.thumb}
          alt={image.alt}
          index={index}
          className="block h-full w-full object-cover object-center transform scale-100 hover:scale-110 transition duration-300 smooth-edges cursor-pointer"
        />
      </button>
    </div>
  );

  return (
    <section className="text-neutral-700">
      <div className="container w-full">
        <div className="flex flex-wrap w-full">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full md:w-1/2">
              <ImageTile image={leftColumn[0]} index={0} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={leftColumn[1]} index={1} />
            </div>
            <div className="w-full">
              <ImageTile image={leftColumn[2]} index={2} />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full">
              <ImageTile image={rightColumn[0]} index={3} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={rightColumn[1]} index={4} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={rightColumn[2]} index={5} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={rightColumn[3]} index={6} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={rightColumn[4]} index={7} />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full">
              <ImageTile image={leftColumn2[0]} index={8} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={leftColumn2[1]} index={9} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={leftColumn2[2]} index={10} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={leftColumn2[3]} index={11} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={leftColumn2[4]} index={12} />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full md:w-1/2">
              <ImageTile image={rightColumn2[0]} index={13} />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile image={rightColumn2[1]} index={14} />
            </div>
            <div className="w-full">
              <ImageTile image={rightColumn2[2]} index={15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ PORTFOLIO PAGE ============
const PortfolioPage = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({ isOpen: false, currentIndex: 0 });

  const openLightbox = (index: number) => {
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
      currentIndex: (prev.currentIndex - 1 + portfolioImages.length) % portfolioImages.length,
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
};

// ============ ABOUT PAGE ============
const AboutPage = () => (
  <FadeInWrapper>
    <div className="dark:bg-black bg-white text-black dark:text-white px-5 md:px-20 min-h-screen">
      <Navigation />
      <div className="container mx-auto">
        <h1 className="text-4xl pt-10 pb-8"><b>ABOUT ME</b></h1>
        <div className="grid grid-cols-2 gap-14 md:gap-20 pb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white dark:bg-neutral-900 p-5 pb-28 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 -rotate-6 relative">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Profile"
                index={0}
                className="flex flex-col w-full aspect-square object-cover h-auto smooth-edges"
              />
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <p className="text-gray-800 dark:text-slate-200 pb-7 h-full text-6xl font-nothingyoucoulddo">
                  me
                </p>
              </div>
            </div>
          </div>
          <section className="font-normal text-center text-base md:text-start mx-3 col-span-2 md:col-span-1 my-auto">
            <div className="block md:hidden">
              <p className="text-3xl font-serif font-bold mb-1">Hello there,</p>
              <p className="text-3xl font-serif font-bold mb-6">
                I'm Sophia <span className="animate-wave">👋</span>
              </p>
            </div>
            <p className="hidden md:block text-3xl font-serif font-bold mb-6">
              Hello there, I'm Sophia <span className="animate-wave">👋</span>
            </p>
            <p className="mb-4">
              I'm a San Francisco-based photographer with over 6 years of experience in capturing
              unforgettable moments. I specialize in creating images that are both visually striking and
              emotionally impactful, and I have developed a signature style that blends natural beauty with
              vibrant colors and bold compositions.
            </p>
            <p className="mb-4">
              When I'm not behind the camera, you can find me exploring the city's diverse neighborhoods,
              trying out new restaurants, or spending time with my family and friends. I believe that every
              moment is an opportunity to experience something new and to create memories that will last a
              lifetime.
            </p>
            <p>
              Thank you for taking the time to learn a little bit about me and my work. If you're interested
              in collaborating or would like to see more of my portfolio, please don't hesitate to get in
              touch. Let's work together to bring your vision to life!
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  </FadeInWrapper>
);

// ============ CONTACT PAGE ============
const ContactPage = () => {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    window.location.href = `mailto:info@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <FadeInWrapper>
      <div className="dark:bg-black bg-white text-black dark:text-white px-5 md:px-20 min-h-screen">
        <Navigation />
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-16 pb-20">
            <section className="col-span-2 md:col-span-1">
              <div className="max-w-screen-md">
                <h1 className="text-4xl pt-10 pb-8"><b>CONTACT</b></h1>

                <div className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Let me know how I can help you"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Leave a comment..."
                      required
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="py-3 px-5 text-sm font-medium text-center bg-black dark:bg-white text-white dark:text-black rounded-lg sm:w-fit hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </section>
            <div className="col-span-2 md:col-span-1 flex relative">
              <div className="bg-white dark:bg-neutral-900 p-5 pb-20 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 rotate-6 relative">
                <AnimatedImage
                  src="https://images.unsplash.com/reserve/yZfr4jmxQyuaE132MWZm_stagnes.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"
                  alt="Contact"
                  index={0}
                  className="flex flex-col aspect-square w-full object-cover h-auto max-h-full smooth-edges"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </FadeInWrapper>
  );
};

// ============ MAIN APP ============
export default function App() {
  return (
    <Router>
      <div className="scroll-smooth dark:bg-black bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}