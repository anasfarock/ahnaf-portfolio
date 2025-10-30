// components/AnimatedImage.jsx
"use client";

import { useEffect } from "react";
import { useImageOpacity } from "./FadeInWrapper";

export default function AnimatedImage({ src, alt, index = 0, ...props }) {
  const { imageOpacities, handleImageLoad } = useImageOpacity();
  const isVisible = imageOpacities[index] || false;

  useEffect(() => {
    handleImageLoad(index);
  }, [index, handleImageLoad]);

  return (
    <img
      src={src}
      alt={alt}
      className={`transition duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      {...props}
    />
  );
}
