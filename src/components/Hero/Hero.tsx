import React from 'react';
import Cards from "../../pages/Cards/Cards";
import heroBg from "../../assets/img/hero/heroBg.png"; 
import "./Hero.css";

interface HeroProps {
    title: string;
    description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: `url(${heroBg})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
            }}
        >
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
            <Cards />
        </div>
    );
};

export default Hero;
