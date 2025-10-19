import React, { useState } from "react";
import "./RealEstateDeals.css";

interface Property {
    id: number;
    image: string;
    title?: string;
    category: string;
}

interface RealEstateDealsProps {
    properties: Property[];
}

const categories = [
    "Residential Property",
    "Commercial Property",
    "Agriculture Property",
    "Industrial Property",
];

const RealEstateDeals: React.FC<RealEstateDealsProps> = ({ properties }) => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProperties = properties.filter(
        (property) => property.category === activeCategory
    );
    return (
        <section className="deals-section">
            <div className="deals-content">
                <div className="deals-header">
                    <h2 className="deals-title">Best Real Estate Deals</h2>
                    <p className="deals-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
                <div className="deals-tabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`tab-button ${activeCategory === category ? "active" : ""
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="deals-grid">
                    {filteredProperties.map((property) => (
                        <div key={property.id} className="deal-card">
                            <div className="card-image-wrapper">
                                <img src={property.image} alt={property.title || "Property"} />
                                <div className="card-badges">
                                    <span className="badge">Featured</span>
                                    <span className="badge">3D</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealEstateDeals;
