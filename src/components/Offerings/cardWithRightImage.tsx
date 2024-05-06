import React from 'react';
import { Image, Card, Row } from 'antd';

interface CardWithRightImageProps {
    imageSrc: string;
    title: string;
    content: JSX.Element;
    heroTitle?: string;
}

const CardWithRightImage: React.FC<CardWithRightImageProps> = ({ imageSrc, title, content, heroTitle }) => {
    return (
        <div style={{ position: 'relative' }}>
            <h2 className="transition-text">{heroTitle}</h2>
        <Card style={{ 
            width: 600,
            position: 'absolute',
            top: '55%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            borderColor: 'rgb(224, 188, 191, 0.5)',
            borderWidth: 2,
            marginRight: '20px',
            zIndex: 1,
        }}>
            <h2 className="transition-text">{title}</h2>
            {content}
        </Card>
        <Image 
            height={623}
            width={544}
            src={imageSrc}
            preview={false}
            style={{ marginLeft: '80%' }}
        />
    </div>
    );
}

export default CardWithRightImage;