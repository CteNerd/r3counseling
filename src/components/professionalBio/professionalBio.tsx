import React, { useState } from "react";
import "./professionalBio.css";
import { Card, Col, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import "../professionalBio/professionalBio.css";

interface ProfessionalBioProps {
  title: string;
  description: JSX.Element;
  imageSrc: string;
  content: JSX.Element;
  content2: JSX.Element;
}

const ProfessionalBio: React.FC<ProfessionalBioProps> = ({
  title,
  description,
  imageSrc,
  content,
  content2,
}) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <Row justify="center">
      <Col>
        <Card
          onMouseEnter={() => setShowBio(true)}
          onMouseLeave={() => setShowBio(false)}
          headStyle={{ fontWeight: "bold", textAlign: "center" }}
          bodyStyle={{ textAlign: "center" }}
          hoverable
          style={{ maxWidth: 350, backgroundColor: "#e4b099" }}
          cover={
            <div className="bio-image-container">
              <img 
                alt={`Professional photo of ${title}, therapist at R3 Counseling`} 
                src={imageSrc} 
                className="bio-image"
                loading="lazy" 
              />
              {showBio && (
                <div className="bio-content-overlay" role="region" aria-label={`${title}'s biography`}>
                  {content}
                </div>
              )}
            </div>
          }
        >
          <Meta
            title={<span style={{ fontWeight: "bold" }}>{title}</span>}
            description={description}
            className="custom-meta"
          />
        </Card>
      </Col>
      <Col>
        {/*<h4>Professional Journey at a Glance</h4>*/}
        <Card
          style={{
            maxWidth: 400,
            height: "100%",
            backgroundColor: "rgb(255, 255, 255, 0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {content2}
        </Card>
      </Col>
    </Row>
  );
};

export default ProfessionalBio;
