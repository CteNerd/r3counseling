import "./about.css";
import ProfessionalBio from "../../components/professionalBio/professionalBio";
import TiffanyBioContent from "../../components/professionalBio/tiffanyBioContent";


export default function AboutMe() {
  return (
    <div>
      <h1>About</h1>
      
      <ProfessionalBio
      title="Tiffany Luke"
      description={(
        <>
            LPC, CPCS, EMDR Certified Therapist,
            Certified Holistic Therapist,EMDR, TCYM,  <br />
            CYT-300  <br /><br />
            Founder & Therapist  <br /><br />
            (Only Accepting EMDR Intensive Clients & Georgia Supervisees)
        </>
    )}
    imageSrc='https://wellcall-app-cdk.s3.amazonaws.com/r3counseling/tiff-profile.jpeg'
    content={TiffanyBioContent}
      />
      </div>
  );
}
