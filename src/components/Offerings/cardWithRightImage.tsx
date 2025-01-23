import React from "react";
import { Image, Card, Row } from "antd";
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
      <div className="flex-container">
        <Card className="image-card-right">
          <h2 className="transition-text">{title}</h2>
          {content}
        </Card>
        <Image
          style={{ objectFit: "cover" }}
          height="80%"
          width="50%"
          src={imageSrc}
          preview={false}
        />
      </div>
    </div>
  );
};

export default CardWithRightImage;
