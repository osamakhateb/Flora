import React, { useState } from 'react';
import "./CardWorks.css";

interface CardWorksProps {
    icon: string;
    iconHover: string; 
    title: string;
    description: string;
}
const CardWorks: React.FC<CardWorksProps> = ({
    icon,
    iconHover,
    title,
    description
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="cardWork"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                className='omg'
                src={isHovered ? iconHover : icon}
                alt="icon"
            />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default CardWorks;