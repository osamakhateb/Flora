/* import React from 'react';
import "./Cards.css";
import Card from "../../pages/Card/Card";

const Cards: React.FC = () => {
    return (
        <div className="cards">
            <Card
                icon="/flora/assets/img/location.svg"
                title="Location"
                description="Ahmedabad, India"
            />
            <Card
                icon="/flora/assets/img/dollar-circle.svg"
                title="Price"
                description="$1000 - $10,000"
            />
            <Card
                icon="/flora/assets/img/house.svg"
                title="Type of Property"
                description="Apartment"
            />
        </div>
    )
}

export default Cards; */

import React from 'react';
import "./Cards.css";
import Card from "../Card/Card";
import locationIcon from "../../assets/img/hero/location.svg";
import dollarIcon from "../../assets/img/hero/dollar-circle.svg";
import houseIcon from "../../assets/img/hero/house.svg";;

const Cards: React.FC = () => {
    return (
        <div className="cards">
            <Card
                icon={locationIcon}
                title="Location"
                description="Ahmedabad, India"
            />
            <Card
                icon={dollarIcon}
                title="Price"
                description="$1000 - $10,000"
            />
            <Card
                icon={houseIcon}
                title="Type of Property"
                description="Apartment"
            />
        </div>
    )
}

export default Cards;