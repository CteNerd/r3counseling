import React, { useEffect, useState } from "react";
import { ImageMeta } from "../../types/models";

// Define a type for the props
type ImageCarouselProps = {
  images: ImageMeta[];
  className: string;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div>
      <a href={images[currentIndex].landingPageUrl} target="_blank">
        <img
          className={className}
          src={images[currentIndex].imageUrl}
          alt="carousel"
        />
      </a>
    </div>
  );
};

export default ImageCarousel;
