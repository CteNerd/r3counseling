import React, { useEffect, useMemo, useState } from "react";
import { Image, Card } from "antd";
import "../../pages/offerings/offerings.css";
import "./cardWithLeftImage.css";

interface CardWithLeftImageProps {
  heroTitle?: string;
  imageSrc: string;
  rotatingImageSources?: string[];
  rotateIntervalMs?: number;
  title?: string;
  content: JSX.Element;
  className?: string;
}

const CardWithLeftImage: React.FC<CardWithLeftImageProps> = ({
  imageSrc,
  rotatingImageSources,
  rotateIntervalMs = 5000,
  title,
  content,
  heroTitle,
}) => {
  const images = useMemo(() => {
    if (!rotatingImageSources || rotatingImageSources.length === 0) {
      return [imageSrc];
    }

    return rotatingImageSources;
  }, [imageSrc, rotatingImageSources]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, rotateIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [images, rotateIntervalMs]);

  const safeImageIndex = Math.max(0, Math.min(activeImageIndex, images.length - 1));

  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 className="transition-text heading">{heroTitle}</h2>
      <div className="flex-container">
        <Image
          style={{ objectFit: "cover" }}
          height="auto"
          width="50%"
          src={images[safeImageIndex]}
          fallback={imageSrc}
          preview={false}
        />
        <Card className="image-card">
          <h2 className="transition-text">{title}</h2>
          {content}
        </Card>
      </div>
    </div>
  );
};

export default CardWithLeftImage;
