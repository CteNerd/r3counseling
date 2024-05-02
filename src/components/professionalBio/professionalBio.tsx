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
    content2: JSX.Element;
}

const ProfessionalBio: React.FC<ProfessionalBioProps> = ({ title, description, imageSrc, content, content2 }) => {
    const uniqueId = 'id' + Math.random().toString(36).substring(2, 15); // Generate a unique ID for each card

    return (
        <Row justify='center'>
            <Col>
            <Card
             onMouseEnter={() => {
                const element = document.querySelector(`#${uniqueId}`) as HTMLElement;
                if (element) {
                    element.style.display = 'block';
                    element.style.opacity = '1';
                }
                //console.log('Mouse entered', title, content,description);
            }}
            onMouseLeave={() => {
                const element = document.querySelector(`#${uniqueId}`) as HTMLElement;
                if (element) {
                    element.style.display = 'none';
                    element.style.opacity = '0';
                }
                //console.log('Mouse left', title, content, description);
            }}
            headStyle={{ fontWeight: 'bold', textAlign: 'center'}}
            bodyStyle={{ textAlign: 'center'}}
            hoverable
            style={{ maxWidth:350, backgroundColor:'#e4b099'  }}
            cover={<img alt={title} src={imageSrc} height={'500px'} />}
            >
                <Meta 
                title={<span style={{ fontWeight: 'bold' }}>{title}</span>} 
                description={description}
                />
                <div id={uniqueId} className="info-box-style" style={{ display: 'none', opacity: '0' }}>
                  {content}
                </div>
            </Card>
            </Col>
            <Col span={12}>
            {/*<h4>Professional Journey at a Glance</h4>*/}
            <Card style={{ 
                maxWidth: 400, 
                height: '100%', 
                backgroundColor:'rgb(255, 255, 255, 0.4)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' 
                }}>
                {content2}
            </Card>
          
            </Col>
        </Row>
    );
};

export default ProfessionalBio;