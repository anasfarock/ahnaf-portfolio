'use client';

import AnimatedImage from './AnimatedImage';
import { PortfolioImage } from '@/data/portfolio';

interface ImageTileProps {
  image: PortfolioImage;
  index: number;
  onImageClick: (index: number) => void;
}

export default function ImageTile({ image, index, onImageClick }: ImageTileProps) {
  return (
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
          width={400}
          height={400}
          className="block h-full w-full object-cover object-center transform scale-100 hover:scale-110 transition duration-300 smooth-edges cursor-pointer"
        />
      </button>
    </div>
  );
}