import React, { useEffect, useState, useMemo } from "react";
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

  const isExternal = useMemo(() => {
    const url = currentImage?.landingPageUrl;
    if (typeof url !== "string" || !url.trim()) {
      // landingPageUrl is missing or invalid
      return false;
    }
    try {
      // Handle protocol-relative URLs by prepending window.location.protocol
      let normalizedUrl = url;
      if (url.startsWith("//")) {
        normalizedUrl = window.location.protocol + url;
      }
      const parsed = new URL(normalizedUrl, window.location.origin);
      // Only allow http/https, and treat as external if hostname differs
      return (
        (parsed.protocol === "http:" || parsed.protocol === "https:") &&
        parsed.hostname !== window.location.hostname
      );
    } catch (err) {
      // Suppress errors for invalid URLs, but log for debugging
      console.warn("Invalid landingPageUrl in ImageCarousel:", url, err);
      return false;
    }
  }, [currentImage?.landingPageUrl]);

  const hasValidUrl =
    typeof currentImage?.landingPageUrl === "string" && currentImage.landingPageUrl.trim();

  return (
    <div>
      {hasValidUrl ? (
        isExternal ? (
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
        )
      ) : (
        <img className={className} src={currentImage.imageUrl} alt="carousel" />
      )}
    </div>
  );
};

export default ImageCarousel;
