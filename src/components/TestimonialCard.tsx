import "../styles/testimonials.css";
import Star from "../assets/star.svg";

type TestimonialCardProps = {
  profileImage: string;
  testimonyText: string;
  stars: number;
  name: string;
  role: string;
};

function TestimonialCard({
  profileImage,
  testimonyText,
  stars,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={profileImage} alt={`Foto de ${name}`} />

      <p className="testimony">{testimonyText}</p>

      <div className="rating">
        {Array.from({ length: stars }).map((_, index) => (
          <img
            key={index}
            src={Star}
            alt="ícone estrela"
            width={22}
            height={20}
          />
        ))}
      </div>

      <div className="names">
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;