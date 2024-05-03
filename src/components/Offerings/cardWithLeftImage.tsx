import React from 'react';
import { Image, Card, Row } from 'antd';
import '../../pages/offerings/offerings.css'

interface CardWithLeftImageProps {
    imageSrc: string;
    title: string;
    content: JSX.Element;
}

const CardWithLeftImage: React.FC<CardWithLeftImageProps> = ({ imageSrc, title, content }) => {
    return (
        <div style={{ position: 'relative' }}>
            <Row>
                <Image 
                    height={723}
                    width={614}
                    src={imageSrc}
                    preview={false}
                />
                <Card style={{ 
                    width: 600,
                    position: 'absolute',
                    top: '60%',
                    left: '70%',
                    transform: 'translate(-50%, -50%)',
                    borderColor: 'rgb(224, 188, 191, 0.5)',
                    borderWidth: 2,
                }}>
                    <h2 className="transition-text">{title}</h2>
                    {content}
                </Card>
            </Row>
        </div>
    );
}

export default CardWithLeftImage;