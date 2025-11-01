// components/AnimatedImage.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  index?: number;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function AnimatedImage({
  src,
  alt,
  index = 0,
  className = "",
  fill = false,
  width = 500,
  height = 500,
}: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 4} // Prioritize loading for first few images
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={index < 4} // Prioritize loading for first few images
        />
      )}
    </div>
  );
}
