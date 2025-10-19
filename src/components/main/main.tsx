import React from 'react';
import AllCardWorks from "../../pages/AllCardWorks/AllCardWorks";
import DreamHome from "../../pages/DreamHome/DreamHome";
import TitleSection from "../../pages/TitleSection/TitleSection";
import AllCardTrending from "../../pages/AllCardTrending/AllCardTrending";
import RealEstateDeals from "../../pages/RealEstateDeals/RealEstateDeals";
import dreamHomeBg from "../../assets/img/home/Rectangle.png";
import house1 from "../../assets/img/Best/Card.png";
import house2 from "../../assets/img/Best/Card1.png";
import house3 from "../../assets/img/Best/Card2.png";
import office1 from "../../assets/img/Best/Card.png";
import office2 from "../../assets/img/Best/Card1.png";
import farm1 from "../../assets/img/Best/Card2.png";
import "./main.css";

const Main: React.FC = () => {
    const properties = [
        { id: 1, image: house1, category: "Residential Property" },
        { id: 2, image: house2, category: "Residential Property" },
        { id: 3, image: house3, category: "Residential Property" },
        { id: 4, image: office1, category: "Commercial Property" },
        { id: 5, image: office2, category: "Commercial Property" },
        { id: 6, image: farm1, category: "Agriculture Property" },
    ];
    return (
        <main>
            <section className="workSection">
                <TitleSection
                    title="How it Works"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
                <AllCardWorks />
            </section>
            <section
                className="dreamHome"
                style={{ backgroundImage: `url(${dreamHomeBg})` }}
            >
                <DreamHome
                    title="Find Dream Home"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
            </section>
            <section className="tranding">
                <TitleSection
                    title="Most Trending"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
                <AllCardTrending />
            </section>
            <section className="realEstateDeals">
                <RealEstateDeals properties={properties} />
            </section>
        </main>
    );
};

export default Main;
