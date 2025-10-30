// components/AnimatedImage.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useImageOpacity } from "./FadeInWrapper";

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
  const { imageOpacities, handleImageLoad } = useImageOpacity();
  const isVisible = imageOpacities[index] || false;

  useEffect(() => {
    handleImageLoad(index);
  }, [index, handleImageLoad]);

  return (
    <div
      className={`transition duration-500 ${
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
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      )}
    </div>
  );
}
