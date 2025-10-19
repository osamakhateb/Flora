import React from 'react';
import "./NavBar.css";

interface NavBarProps {
    logo: string;
    items: string[];
    btn: string;
    burger: string;
}

const NavBar: React.FC<NavBarProps> = ({ logo, items, btn, burger }) => {
    return (
        <nav>
            <img src={logo} alt="flora logo" />
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button className="login">{btn}</button>
            <img className="burgerIcon" src={burger} alt="burger icon" />
        </nav>
    )
}

export default NavBar;