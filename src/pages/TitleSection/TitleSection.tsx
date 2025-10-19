import React from 'react';
import "./TitleSection.css";

interface TitleSectionProps {
    title: string;
    description: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, description }) => {
    return (
        <>
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
        </>
    )
}

export default TitleSection;