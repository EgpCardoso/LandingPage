import "../styles/solution.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <span>
        <img src={icon} alt="ícone campeão" width={64} height={64} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
      </div>
    </div>
  );
};

export default Card;