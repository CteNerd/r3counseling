import React from 'react';
import './professionalBio.css';

type InfoBoxProps = {
    content: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ content }) => {
    return (
        <div className="info-box-style">
            <p>{content}</p>
        </div>
    );
};

export default InfoBox;