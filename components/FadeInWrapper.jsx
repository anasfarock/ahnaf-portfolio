// components/FadeInWrapper.jsx
"use client";

import { useState, useEffect, createContext, useContext } from "react";

const ImageOpacityContext = createContext({
  imageOpacities: {},
  handleImageLoad: () => {},
});

export function useImageOpacity() {
  return useContext(ImageOpacityContext);
}

export default function FadeInWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [imageOpacities, setImageOpacities] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageLoad = (index) => {
    setTimeout(() => {
      setImageOpacities((prev) => ({ ...prev, [index]: true }));
    }, index * 100);
  };

  return (
    <ImageOpacityContext.Provider value={{ imageOpacities, handleImageLoad }}>
      <div
        className={`transition duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </ImageOpacityContext.Provider>
  );
}
