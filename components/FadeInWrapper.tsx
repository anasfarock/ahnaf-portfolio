// components/FadeInWrapper.tsx
'use client';

import { useState, ReactNode, createContext, useContext } from 'react';

interface ImageOpacityContextType {
  imageOpacities: Record<number, boolean>;
  handleImageLoad: (index: number) => void;
}

const ImageOpacityContext = createContext<ImageOpacityContextType>({
  imageOpacities: {},
  handleImageLoad: () => {},
});

export function useImageOpacity() {
  return useContext(ImageOpacityContext);
}

export default function FadeInWrapper({ children }: { children: ReactNode }) {
  const [imageOpacities, setImageOpacities] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setTimeout(() => {
      setImageOpacities((prev) => ({ ...prev, [index]: true }));
    }, index * 100);
  };

  return (
    <ImageOpacityContext.Provider value={{ imageOpacities, handleImageLoad }}>
      <div className="transition-opacity duration-500 opacity-100">
        {children}
      </div>
    </ImageOpacityContext.Provider>
  );
}
