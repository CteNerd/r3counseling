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

  const isExternal = (() => {
    try {
      // Handle protocol-relative URLs by prepending window.location.protocol
      let url = currentImage.landingPageUrl;
      if (url.startsWith("//")) {
        url = window.location.protocol + url;
      }
      const parsed = new URL(url, window.location.origin);
      // Only allow http/https, and treat as external if hostname differs
      return (
        (parsed.protocol === "http:" || parsed.protocol === "https:") &&
        parsed.hostname !== window.location.hostname
      );
    } catch {
      // Invalid URL, treat as internal for safety
      return false;
    }
  })();

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
