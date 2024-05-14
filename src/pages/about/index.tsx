import "./about.css";
import ProfessionalBio from "../../components/professionalBio/professionalBio";
import TiffanyBioContent from "../../components/professionalBio/tiffanyBioContent";
import TiffanyProfessionalJourney from "../../components/professionalBio/tiffanyProfessionalJourney";
import { Col, Row } from "antd";
import imageSrc from '../../assets/images/Nicole Thoms Fuentes - Profile Photo.png'
import NicoleBioContent from "../../components/professionalBio/nicoleBioContent";
import NicoleProfessionalJourney from "../../components/professionalBio/nicoleProfesssionalJourney";


export default function AboutMe() {
  return (
    <div style={{ width: '100%' }}>
      <h1>About</h1>
      <Row gutter={[24, 16]} justify='center'>
        <Col className='gutter-row' xs={24} md={8} >
      <ProfessionalBio
      
      title="Tiffany Luke"
      description={(
        <>
            LPC, CPCS, EMDR Certified Therapist,
            Certified Holistic Therapist,EMDR, TCYM,  <br />
            CYT-300  <br /><br />
            Founder & Therapist  <br /><br />
            <strong>(ONLY ACCEPTING EMDR INTENSIVE CLIENTS & GEORGIA SUPERVISEES)</strong>
        </>
    )}
    imageSrc='https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/tiff-profile.jpeg'
    content={TiffanyBioContent}
    content2={TiffanyProfessionalJourney}
      />
      </Col>
      <Col className='gutter-row' xs={24} md={8}>
        <ProfessionalBio 
       
        title="Nicole Thoms Fuentes"
        description={(
          <>
            LPC, CPCS <br />
            Graduate Therapist Intern under the Supervision of Tiffany Luke,  <br /><br />
            <strong>(ACCEPTING NEW CLIENTS)</strong>
          </>
        )}
        imageSrc={imageSrc}
        content={NicoleBioContent}
        content2={NicoleProfessionalJourney}
        />
      </Col>
      </Row>
      </div>
  );
}
