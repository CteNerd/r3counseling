import "./about.css";
import "../../components/professionalBio/col-adjust.css";
import React, { useEffect } from "react";
import ProfessionalBio from "../../components/professionalBio/professionalBio";
import TiffanyBioContent from "../../components/professionalBio/tiffanyBioContent";
import TiffanyProfessionalJourney from "../../components/professionalBio/tiffanyProfessionalJourney";
import { Col, Row } from "antd";
import Nicole from "../../assets/images/Nicole Thoms Fuentes - Profile Photo.png";
import NicoleBioContent from "../../components/professionalBio/nicoleBioContent";
import NicoleProfessionalJourney from "../../components/professionalBio/nicoleProfesssionalJourney";
import NiyaBioContent from "../../components/professionalBio/niyaBioContent";
import NiyaProfessionalJourney from "../../components/professionalBio/niyaProfessionalJourney";
import Niya from "../../assets/images/Niya-headShot.png";
import TiffanyCookKing from "../../assets/images/tiffany-cook-king-profile-photo.png";
import TiffanyCookKingBioContent from "../../components/professionalBio/tiffanyCookKingBioContent";
import TiffanyCookKingProfessionalJourney from "../../components/professionalBio/tiffanyCookKingProfessionalJourney";
import { MEDIA } from "../../constants/media";

export default function AboutMe() {
  // Schema markup for therapists
  useEffect(() => {
    // Add structured data for therapists
    const therapistSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Release Restore Redefine Counseling",
      "url": "https://r3counseling.com/about",
      "logo": MEDIA.logoSocial,
      "sameAs": [
        "https://www.linkedin.com/in/tiffany-luke-lpc-cpcs-certified-emdr-holistic-therapist-29683119",
        "https://www.instagram.com/r3counseling"
      ],
      "availableService": [{
        "@type": "MedicalTherapy",
        "name": "Virtual Therapy Sessions",
        "description": "Online mental health counseling and EMDR therapy available for Marietta residents in zip codes 30144 and 30066",
        "serviceType": "Telehealth",
        "areaServed": {
          "@type": "City",
          "name": "Marietta",
          "postalCode": ["30144", "30066"],
          "addressRegion": "GA"
        }
      }],
      "employee": [
        {
          "@type": "Person",
          "name": "Tiffany Luke",
          "jobTitle": "Licensed Professional Counselor, EMDR Certified Therapist",
          "description": "Founder & Therapist specializing in EMDR and holistic therapy approaches with virtual sessions available",
          "image": MEDIA.tiffanyProfile
        },
        {
          "@type": "Person",
          "name": "Nicole Thoms Fuentes",
          "jobTitle": "Pre-Licensed Therapist",
          "description": "Accepting new clients under clinical supervision of Tiffany Luke"
        },
        {
          "@type": "Person",
          "name": "Niya Burnette",
          "jobTitle": "Licensed Clinical Social Worker",
          "description": "Virtual therapy sessions available"
        },
        {
          "@type": "Person",
          "name": "Tiffany Cook-King",
          "jobTitle": "Licensed Master Social Worker",
          "description": "Accepting new clients under the clinical supervision of Dr. Kendra Roberson"
        }
      ]
    };
    
    // Create and append the script element to the document head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(therapistSchema);
    document.head.appendChild(script);
    
    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div style={{ width: "100%", paddingTop: "20px" }}>
      <h1>About</h1>

      <Row gutter={[24, 16]} justify="center" align="stretch">
        <Col className="gutter-row" xs={24} sm={12} lg={6} style={{ display: "flex" }}>
          <ProfessionalBio
            title="Tiffany Luke"
            description={
              <>
                LPC, CPCS, EMDR Certified Therapist, Certified Holistic
                Therapist, IFS Level Two Trained, TCYM, <br />
                CYT-300 <br />
                <br />
                Founder & Therapist <br />
                <br />
                <strong>
                  (ONLY ACCEPTING EMDR INTENSIVE CLIENTS & GEORGIA SUPERVISEES)
                </strong>
              </>
            }
            imageSrc={MEDIA.tiffanyProfile}
            content={TiffanyBioContent}
            content2={TiffanyProfessionalJourney}
          />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={6} style={{ display: "flex" }}>
          <ProfessionalBio
            title="Nicole Thoms Fuentes"
            description={
              <>
                Licensed Associate Professional Counselor under the clinical supervision of Tiffany Luke, LPC, CPCS <br />
                <br />
                <strong>(ACCEPTING NEW CLIENTS)</strong>
              </>
            }
            imageSrc={Nicole}
            imagePosition="center 60%"
            content={NicoleBioContent}
            content2={NicoleProfessionalJourney}
          />
        </Col>
        <Col className="gutter-row col-adjust" xs={24} sm={12} lg={6} style={{ display: "flex" }}>
          <ProfessionalBio
            title="Niya Burnette"
            description={
              <>
                LCSW <br />
                <br />
                Therapist <br />
                <br />
                <strong>(ACCEPTING NEW CLIENTS-VIRTUAL ONLY)</strong>
              </>
            }
            imageSrc={Niya}
            content={NiyaBioContent}
            content2={NiyaProfessionalJourney}
          />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} lg={6} style={{ display: "flex" }}>
          <ProfessionalBio
            title="Tiffany Cook-King"
            description={
              <>
                Licensed Master Social Worker under the clinical supervision of
                Dr. Kendra Roberson <br />
                <br />
                <strong>(ACCEPTING NEW CLIENTS)</strong>
              </>
            }
            imageSrc={TiffanyCookKing}
            content={TiffanyCookKingBioContent}
            content2={TiffanyCookKingProfessionalJourney}
          />
        </Col>
      </Row>
    </div>
  );
}
