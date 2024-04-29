import React from 'react';
import './miniCard.css';

type MiniCardProps = {
    name: string;
    licenses: string;
    title: string;
    clientStatus: string;
};

const MiniCard: React.FC<MiniCardProps> = ({ name, licenses, title, clientStatus }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{name}</h2>
            </div>
            <div className="card-body">
                <p>{licenses}</p>
            </div>
            <div className="card-body">
                <p>{title}</p>
            </div>
            <div className="card-body">
                <p>{clientStatus}</p>
            </div>
        </div>
    );
};

export default MiniCard;