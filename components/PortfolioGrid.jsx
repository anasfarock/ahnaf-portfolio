// components/PortfolioGrid.jsx
"use client";

import AnimatedImage from "./AnimatedImage";
import { portfolioImages } from "@/data/portfolio";

export default function PortfolioGrid({ onImageClick }) {
  const leftColumn = portfolioImages.filter((_, i) => i < 3);
  const rightColumn = portfolioImages.filter((_, i) => i >= 3 && i < 8);
  const leftColumn2 = portfolioImages.filter((_, i) => i >= 8 && i < 13);
  const rightColumn2 = portfolioImages.filter((_, i) => i >= 13);

  const ImageTile = ({ image, index }) => (
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
}
