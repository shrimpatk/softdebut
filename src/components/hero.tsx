// components/home/HeroSection.tsx
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi"; // Make sure to install react-icons
import heroImg01 from "../assets/hero/SOne_index_banner.jpg";
import heroImg02 from "../assets/hero/banner_promotion_01.jpg";
import heroImg03 from "../assets/hero/banner_promotion_02.jpg";

interface HeroImage {
  id: number;
  src: string;
  alt: string;
}

export default function HeroSection() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images: HeroImage[] = [
    { id: 1, src: heroImg01, alt: "S-ONE Store" },
    { id: 2, src: heroImg02, alt: "S-ONE Store" },
    { id: 3, src: heroImg03, alt: "S-ONE Store" },
  ];

  const nextSlide = () => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[16/7] overflow-hidden">
      <img
        src={images[currentImgIndex].src}
        alt={images[currentImgIndex].alt}
        className="w-full h-full object-fill"
      />
      {/* Navigation Controls */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2 bg-black/20">
        <button
          type="button"
          title="Previos Slide"
          aria-label="Previous slide"
          onClick={prevSlide}
          className="mx-auto p-1 rounded text-white"
        >
          <FiChevronUp size={24} />
        </button>

        <div className="flex flex-col gap-2 overflow-y-auto max-h-[50vh]">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentImgIndex(index)}
              className={`w-20 md:w-36 overflow-hidden rounded border-white border-solid border-2 ${
                index === currentImgIndex ? "ring-2 ring-primary" : ""
              }`}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                aria-label="Next slide"
                className={`w-full h-full object-fill aspect-[16/7] ${
                  index !== currentImgIndex
                    ? "[filter:grayscale(100%)]"
                    : "[filter:grayscale(0%)]"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          title="Next Slide"
          onClick={nextSlide}
          className="mx-auto p-1 rounded text-white"
        >
          <FiChevronDown size={24} />
        </button>
      </div>
    </div>
  );
}
