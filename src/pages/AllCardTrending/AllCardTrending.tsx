import React from 'react';
import CardTrending from "../CardTrending/CardTrending";
import "./AllCardTrending.css";
import trend1 from "../../assets/img/Trending/Rectangle.png";
import trend2 from "../../assets/img/Trending/Rectangle1.png";
import trend3 from "../../assets/img/Trending/Rectangle2.png";
import trend4 from "../../assets/img/Trending/Rectangle3.png";
import trend5 from "../../assets/img/Trending/Rectangle4.png";
import trend6 from "../../assets/img/Trending/Rectangle5.png";
import locationIcon from "../../assets/img/Trending/location.svg"; 

const AllCardTrending: React.FC = () => {
    return (
        <div className="cardsTrending">
            <CardTrending
                image={trend1}
                price="$300000"
                title="Luxury Apartment in California"
                icon={locationIcon}
                desc="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
            <CardTrending
                image={trend2}
                price="$300000"
                title="Luxury Apartment in California"
                icon={locationIcon}
                desc="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
            <CardTrending
                image={trend3}
                price="$300000"
                title="Luxury Apartment in California"
                icon={locationIcon}
                desc="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
            <CardTrending
                image={trend4}
                price="$300000"
                title="Luxury Apartment in California"
                icon={locationIcon}
                desc="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
            <CardTrending
                image={trend5}
                price="$300000"
                title="Luxury Apartment in California"
                icon={locationIcon}
                desc="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
            <CardTrending
                image={trend6}
                price="$300000"
                title="Luxury Apartment in California"
                icon={locationIcon}
                desc="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            />
        </div>
    );
};

export default AllCardTrending;