import React, { useState } from "react";
import { ImageMeta } from "../../types/models";

// Define a type for the props
type ImageCarouselProps = {
  images: ImageMeta[];
  className: string;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <button onClick={goToPrevious}>Previous</button>
      <a href={images[currentIndex].landingPageUrl} target="_blank">
        <img
          className={className}
          src={images[currentIndex].imageUrl}
          alt="carousel"
        />
      </a>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default ImageCarousel;
