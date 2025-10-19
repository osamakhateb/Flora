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