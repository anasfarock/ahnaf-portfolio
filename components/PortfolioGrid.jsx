"use client";

import ImageTile from "./ImageTile";
import { portfolioImages } from "@/data/portfolio";

export default function PortfolioGrid({ onImageClick }) {
  const leftColumn = portfolioImages.filter((_, i) => i < 3);
  const rightColumn = portfolioImages.filter((_, i) => i >= 3 && i < 8);
  const leftColumn2 = portfolioImages.filter((_, i) => i >= 8 && i < 13);
  const rightColumn2 = portfolioImages.filter((_, i) => i >= 13);

  return (
    <section className="text-neutral-700">
      <div className="container w-full">
        <div className="flex flex-wrap w-full">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full md:w-1/2">
              <ImageTile
                image={leftColumn[0]}
                index={0}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={leftColumn[1]}
                index={1}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full">
              <ImageTile
                image={leftColumn[2]}
                index={2}
                onImageClick={onImageClick}
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full">
              <ImageTile
                image={rightColumn[0]}
                index={3}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={rightColumn[1]}
                index={4}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={rightColumn[2]}
                index={5}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={rightColumn[3]}
                index={6}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={rightColumn[4]}
                index={7}
                onImageClick={onImageClick}
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full">
              <ImageTile
                image={leftColumn2[0]}
                index={8}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={leftColumn2[1]}
                index={9}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={leftColumn2[2]}
                index={10}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={leftColumn2[3]}
                index={11}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={leftColumn2[4]}
                index={12}
                onImageClick={onImageClick}
              />
            </div>
          </div>

          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full md:w-1/2">
              <ImageTile
                image={rightColumn2[0]}
                index={13}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageTile
                image={rightColumn2[1]}
                index={14}
                onImageClick={onImageClick}
              />
            </div>
            <div className="w-full">
              <ImageTile
                image={rightColumn2[2]}
                index={15}
                onImageClick={onImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
