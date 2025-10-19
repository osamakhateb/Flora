/* import React from 'react';
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./Header.css";
import logo from "../../assets/img/hero/logo.png";
import burgerIcon from "../../assets/img/hero/burger.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <NavBar
                logo={logo}
                items={["Home", "About", "Services", "New Property", "Contact"]}
                btn="Login"
                burger={burgerIcon}
            />
            <Hero
                title="Discover a place you will love to live"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
            />
        </header>
    )
}

export default Header; */
import React from 'react';
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import "./Header.css";

interface HeaderProps {
    logo: string;
    burger: string;
    heroTitle: string;
    heroDescription: string;
}

const Header: React.FC<HeaderProps> = ({ logo, burger, heroTitle, heroDescription }) => {
    return (
        <header className="header">
            <NavBar
                logo={logo}
                items={["Home", "About", "Services", "New Property", "Contact"]}
                btn="Login"
                burger={burger}
            />
            <Hero
                title={heroTitle}
                description={heroDescription}
            />
        </header>
    );
};

export default Header;
