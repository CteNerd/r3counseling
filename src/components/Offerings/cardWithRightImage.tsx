import React from 'react';
import { Image, Card, Row } from 'antd';

interface CardWithRightImageProps {
    imageSrc: string;
    title: string;
    content: JSX.Element;
    heroTitle?: string;
    pngSrc?: string;
}

const CardWithRightImage: React.FC<CardWithRightImageProps> = ({ imageSrc, title, content, heroTitle, pngSrc }) => {
    return (
        <div className='card-container-right'>
            <h2 className="transition-text">{heroTitle}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            
        <Card style={{ 
            width: '55%',
            height: '75%',
            left: '10%',
            borderColor: 'rgb(224, 188, 191, 0.5)',
            borderWidth: 2,
            marginTop: '5%',
            zIndex: 1,
            // overflow: 'auto',
        }}>
            <h2 className="transition-text">{title}</h2>
            {content}
        </Card>
        <Image 
            style={{  marginLeft: 'auto'}}
            height='80%'
            width='50%'
            src={imageSrc}
            preview={false}
        />
        </div>
    </div>
    );
}

export default CardWithRightImage;