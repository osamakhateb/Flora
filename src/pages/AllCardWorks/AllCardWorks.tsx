import React from 'react';
import CardWorks from "../../pages/CardWorks/CardWorks";
import "./AllCardWorks.css";

import searchIcon from "../../assets/img/Works/Frame.svg";
import selectIcon from "../../assets/img/Works/Frame2.svg";
import confirmIcon from "../../assets/img/Works/Frame.svg";

import searchIconHover from "../../assets/img/Works/Group.svg";


const AllCardWorks: React.FC = () => {
    return (
        <div className="allCardsWork">
            <CardWorks
                icon={searchIcon}
                iconHover={searchIconHover}
                title="Search Apartment"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
            />
            <CardWorks
                icon={selectIcon}
                iconHover={searchIconHover}
                title="Select Apartment"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
            />
            <CardWorks
                icon={confirmIcon}
                iconHover={searchIconHover}
                title="Confirm Apartment"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
            />
        </div>
    )
}

export default AllCardWorks;