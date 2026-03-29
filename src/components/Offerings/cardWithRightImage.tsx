import React from "react";
import { Image, Card } from "antd";
import "../../pages/offerings/offerings.css";
import "./cardWithRightImage.css";

interface CardWithRightImageProps {
  imageSrc: string;
  title: string;
  content: JSX.Element;
  heroTitle?: string;
  pngSrc?: string;
}

const CardWithRightImage: React.FC<CardWithRightImageProps> = ({
  imageSrc,
  title,
  content,
  heroTitle,
  pngSrc,
}) => {
  const imageAltText = title || heroTitle || "Release Restore Redefine Counseling offering";

  return (
    <div
      className="card-container-right"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 className="transition-text heading">{heroTitle}</h2>
      <div className="offerings-card-layout offerings-card-layout-right">
        <Card className="image-card-right">
          <h2 className="transition-text">{title}</h2>
          {content}
        </Card>
        <div className="offerings-card-media offerings-card-media-right">
          <Image
            className="offerings-card-image"
            style={{ objectFit: "cover" }}
            width="100%"
            src={imageSrc}
            alt={imageAltText}
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CardWithRightImage;
