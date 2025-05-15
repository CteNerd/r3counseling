import "./about.css";
import "../../components/professionalBio/col-adjust.css";
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

export default function AboutMe() {
  return (
    <div style={{ width: "100%", paddingTop: "20px" }}>
      <h1>About</h1>
      <Row gutter={[24, 16]} justify="center">
        <Col className="gutter-row" xs={24} md={8}>
          <ProfessionalBio
            title="Tiffany Luke"
            description={
              <>
                LPC, CPCS, EMDR Certified Therapist, Certified Holistic
                Therapist,EMDR, TCYM, <br />
                CYT-300 <br />
                <br />
                Founder & Therapist <br />
                <br />
                <strong>
                  (ONLY ACCEPTING EMDR INTENSIVE CLIENTS & GEORGIA SUPERVISEES)
                </strong>
              </>
            }
            imageSrc="https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/tiff-profile.jpeg"
            content={TiffanyBioContent}
            content2={TiffanyProfessionalJourney}
          />
        </Col>
        <Col className="gutter-row" xs={24} md={8}>
          <ProfessionalBio
            title="Nicole Thoms Fuentes"
            description={
              <>
                Pre-Licensed Therapist under the clinical supervision of Tiffany Luke, LPC, CPCS <br />
                <br />
                <strong>(ACCEPTING NEW CLIENTS)</strong>
              </>
            }
            imageSrc={Nicole}
            content={NicoleBioContent}
            content2={NicoleProfessionalJourney}
          />
        </Col>
        <Col className="gutter-row col-adjust" xs={24} md={8}>
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
      </Row>
    </div>
  );
}
