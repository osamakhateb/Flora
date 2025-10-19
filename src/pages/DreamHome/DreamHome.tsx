import "./DreamHome.css";

interface DreamHomeProps {
    title: string;
    description: string;
}

const DreamHome: React.FC<DreamHomeProps> = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default DreamHome;