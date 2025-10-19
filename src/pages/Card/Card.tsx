import React from 'react';
import "./Card.css";

interface CardProps {
    icon: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="card">
            <div className="img">
                <img src={icon} alt="icon" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;