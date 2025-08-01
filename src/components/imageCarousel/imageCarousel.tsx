import React, { useEffect, useState } from "react";
import { ImageMeta } from "../../types/models";
import { Link } from "react-router-dom";

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
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  const currentImage = images[currentIndex];

  const isExternal = currentImage.landingPageUrl.startsWith("http");

  return (
    <div>
      {isExternal ? (
        <a
          href={currentImage.landingPageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={className} src={currentImage.imageUrl} alt="carousel" />
        </a>
      ) : (
        <Link to={currentImage.landingPageUrl}>
          <img className={className} src={currentImage.imageUrl} alt="carousel" />
        </Link>
      )}
    </div>
  );
};

export default ImageCarousel;
