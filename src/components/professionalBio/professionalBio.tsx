import React from 'react';
import './professionalBio.css';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import "../professionalBio/professionalBio.css";


interface ProfessionalBioProps {
    title: string;
    description: JSX.Element;
    imageSrc: string;
    content: JSX.Element;
}

const ProfessionalBio: React.FC<ProfessionalBioProps> = ({ title, description, imageSrc, content }) => {
    return (
        <Row justify='center'>
            <Col>
            <Card
             onMouseEnter={() => {
                const element = document.querySelector('.info-box-style') as HTMLElement;
                if (element) {
                    element.style.display = 'block';
                    element.style.opacity = '1';
                }
            }}
            onMouseLeave={() => {
                const element = document.querySelector('.info-box-style') as HTMLElement;
                if (element) {
                    element.style.display = 'none';
                    element.style.opacity = '0';
                }
            }}
            headStyle={{ fontWeight: 'bold', textAlign: 'center'}}
            bodyStyle={{ textAlign: 'center'}}
            hoverable
            style={{ maxWidth:350, backgroundColor:'#e4b099'  }}
            cover={<img alt={title} src={imageSrc} height={'500px'} />}
            >
                <Meta 
                title={title} 
                description={description}
                />
                {content}
            </Card>
            </Col>
            <Col span={12}>
            <h4>Professional Journey at a Glance</h4>
          {/* <div className="professional-accolades-list"> */}
            <ul>
              <li>
                Licensed Professional Counselor: Georgia Composite Board of
                Professional Counselors, Social Workers, and Marriage &amp;
                Family Therapist
              </li>
              <li>
                Certified Professional Clinical Supervisor: LPCGA
                <li>EMDRIA Certified and EMDR provider</li>
                <li>Certified Holistic Healer</li>
                <li>CYT 300, Certified Yoga Therapist</li>
                <li>Certified, Trauma Conscious Yoga Method</li>
                <li>IFS Level One Trained Therapist</li>
                <li>
                  Master of Science concentration Community Counseling: Columbus
                  State University
                </li>
                <li>
                  Bachelor of Science concentration Psychology-Wesleyan College
                </li>
                
              </li>
             
            </ul>
            {/* </div> */}
            </Col>
        </Row>
    );
};

export default ProfessionalBio;