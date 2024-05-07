import React from 'react';
import { Image, Card, Row } from 'antd';
import '../../pages/offerings/offerings.css'
import './cardWithLeftImage.css'

interface CardWithLeftImageProps {
    heroTitle?: string;
    imageSrc: string;
    title: string;
    content: JSX.Element;
}

const CardWithLeftImage: React.FC<CardWithLeftImageProps> = ({ imageSrc, title, content, heroTitle }) => {
    return (
        <div className='card-container'>
            <h2 className="transition-text">{heroTitle}</h2>
            <div style={{ display: 'flex', position: 'relative' }}>
                <Image 
                    style={{ objectFit: 'cover'}}
                    height='auto'
                    width='60%'
                    src={imageSrc}
                    preview={false}
                />
                <Card bodyStyle={{ padding: 2 }} className='image-card'>
                    <h2 className="transition-text">{title}</h2>
                    {content}
                </Card>
            </div>
        </div>
    );
}

export default CardWithLeftImage;