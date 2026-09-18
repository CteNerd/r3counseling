import React, { useState } from "react";
import "./professionalBio.css";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "../professionalBio/professionalBio.css";

interface ProfessionalBioProps {
  title: string;
  description: JSX.Element;
  imageSrc: string;
  imagePosition?: string;
  content: JSX.Element;
  content2: JSX.Element;
}

const ProfessionalBio: React.FC<ProfessionalBioProps> = ({
  title,
  description,
  imageSrc,
  imagePosition,
  content,
  content2,
}) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Card
        headStyle={{ fontWeight: "bold", textAlign: "center" }}
        bodyStyle={{
          textAlign: "center",
          minHeight: 240,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        hoverable
        style={{ width: "100%", backgroundColor: "#e4b099" }}
        cover={
          <div
            className="bio-image-container"
            role="button"
            tabIndex={0}
            aria-label={`Show biography for ${title}`}
            aria-expanded={showBio}
            onClick={() => setShowBio((prev) => !prev)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setShowBio(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setShowBio((prev) => !prev);
              }
            }}
          >
            <img
              alt={`${title}, therapist at R3 Counseling`}
              src={imageSrc}
              className="bio-image"
              style={imagePosition ? { objectPosition: imagePosition } : undefined}
              loading="lazy"
            />
            <div
              className={`bio-content-overlay${showBio ? " is-visible" : ""}`}
              aria-hidden={!showBio}
              role="region"
              aria-label={`${title}'s biography`}
            >
              {content}
            </div>
          </div>
        }
      >
        <Meta
          title={<span style={{ fontWeight: "bold" }}>{title}</span>}
          description={description}
          className="custom-meta"
        />
      </Card>
      {/*<h4>Professional Journey at a Glance</h4>*/}
      <Card
        style={{
          width: "100%",
          marginTop: 16,
          flex: 1,
          backgroundColor: "rgb(255, 255, 255, 0.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {content2}
      </Card>
    </div>
  );
};

export default ProfessionalBio;
