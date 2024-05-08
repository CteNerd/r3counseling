import { Row } from "antd";
import Arrow from '../../assets/images/Arrow.svg'

const ClinicalConsultCorner = (
    <div>
        <p>Are you ready to continue to enhance 
your skills, while growing professionally. R3’s group clinical supervision
is here to prepare you for private practice or agency work, while 
supporting you as you develop your therapeutic toolbox, and build 
confidence in your unique approach. As a CPCS, I am here to support 
and guide you on becoming a Georgia Licensed Professional Counselor.<br /><br />
<strong style={{ color: '#839abf' }}>Duration: 1 Hour; Fee: $75 Group Setting</strong>
<br /><br />
<Row>
<h2>Insight Moment</h2>
<img 
        src={Arrow} 
        style={{ 
            marginLeft: '10px', 
            width: '50px', 
            height: '100px', 
        }} 
        alt="Arrow" 
    />
</Row>
Are you a clinician seeking guidance on case consultations, starting a private
practice, or maybe have questions related to integrating other modalities 
into your therapy space? I invite you to pick my brain, for personalized 
feedback to meet your professional needs.<br /><br /> 
<strong style={{ color: '#839abf' }}>Duration: 1 Hour; Fee: $85</strong>
</p>
    </div>
)

export default ClinicalConsultCorner;