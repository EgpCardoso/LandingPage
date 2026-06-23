import Check from "../assets/check.svg";
import Button from "./Button";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  highlight?: boolean;
  bonus?: string; 
}

export default function PricingCard({
  title,
  description,
  price,
  features,
  highlight = false,
  bonus,
}: PricingCardProps) {
  return (
    <div className={`pricing-card ${highlight ? "premium" : ""}`}>
      {bonus && (
        <span className="bonus">
          <p>{bonus}</p>
        </span>
      )}

      <span className="plan">
        <h3>{title}</h3>
        <p>{description}</p>
      </span>

      <span className="price">
        <h2>{price}</h2>
        {price !== "Grátis" && <p>/mês</p>}
      </span>

      <Button
        text="Pedir agora"
        key={title}
        secondary={!highlight} // botão branco se não for premium
      />

      <span className="hr" />

      {features.map((feature, index) => (
        <span className="features" key={index}>
          <img src={Check} alt="ícone check" width={24} height={24} />
          <p>{feature}</p>
        </span>
      ))}
    </div>
  );
}
