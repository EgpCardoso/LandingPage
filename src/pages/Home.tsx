import { useState, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PricingCard from "../components/pricingCard";
import TestimonialCard from "../components/TestimonialCard";
import { cardsData } from "../components/cardsData";
import Logo from "../assets/alkteiTech.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Champion from "../assets/champion.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import ProfileImageOne from "../assets/images/profile1.jpg";
import ProfileImageTwo from "../assets/images/profile2.jpg";
import ProfileImageThree from "../assets/images/profile3.jpg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/testimonials.css"
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const closeMobileMenu = () => setShowMobileMenu(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">

                <nav className="flex items-center justify-between">

                    <img src={Logo} alt="Logo alkteiTech" width={220} height={80} />

                    <div className="desktop-only">

                        <ul className="flex gap-1">
                            <li>
                                <a href="#hero">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>

                        </ul>

                    </div>

                    <div className="desktop-only auth-links">
                        <a className="reverse-color" href="#">Login</a>
                        <Button text="Cadastre-se →" />
                    </div>

                        <div className="mobile-menu">
                            {showMobileMenu ?
                                <div className="mobile-menu-content">
                                    <div className="container flex">
                                        <ul>
                                            <li>
                                                <a href="#hero" onClick={closeMobileMenu}>Home</a>
                                            </li>
                                            <li>
                                                <a href="#solution" onClick={closeMobileMenu}>Soluções</a>
                                            </li>
                                            <li>
                                                <a href="#testimonials" onClick={closeMobileMenu}>Depoimentos</a>
                                            </li>
                                            <li>
                                                <a href="#pricing" onClick={closeMobileMenu}>Preços</a>
                                            </li>
                                            <li>
                                                <a href="#contact" onClick={closeMobileMenu}>Contato</a>
                                            </li>
                                            <li>
                                                <a className="reverse-color" href="#">Login</a>
                                            </li>
                                        </ul>
                                        <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                            <img src={Close} alt="Botão close" />
                                        </span>
                                    </div>
                                </div>
                                :
                                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                    <img src={Menu} alt="Botão menu" />
                                </span>
                            }
                        </div>


                </nav>
            </header>

            <section id="hero">

                <span className="desktop-only">

                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>

                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                    </p>
                    <h1>Transforme ideias em resultados digitais.</h1>
                    <p>Acreditamos que tecnologia deve ser simples, acessível e capaz de impulsionar pessoas e negócios.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Comece agora" /></span>
                        <span className="desktop-only">
                            <Button text="Saiba mais" secondary />
                        </span>

                    </div>

                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <h2>Nossas soluções inteligentes</h2>
                    <p>
                        Inovação é com a gente! A <strong>AlkTeiTech</strong> cria
                        ferramentas digitais que ajudam você a crescer com inovação e
                        praticidade.
                    </p>
                </header>

                <section className="even-columns">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            icon={Champion}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </section>
            </section>
            <section id="testimonials">
                <header>
                    <h2>Histórias de sucesso!</h2>
                    <p>Clientes que já transformaram seus negócios com nossas soluções.</p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            profileImage={ProfileImageOne}
                            testimonyText="Com a AlkteiTech consegui automatizar meu fluxo de vendas e ganhar tempo para focar nos clientes."
                            stars={4}
                            name="Maria Silva"
                            role="Empreendedora"
                        />

                        <TestimonialCard
                            profileImage={ProfileImageTwo}
                            testimonyText="A integração digital facilitou muito o trabalho da equipe, agora tudo está conectado."
                            stars={5}
                            name="João Pereira"
                            role="Analista de TI"
                        />
                        <TestimonialCard
                            profileImage={ProfileImageThree}
                            testimonyText="Com as soluções da AlkteiTech conseguimos integrar nossos sistemas e reduzir falhas operacionais. Hoje a equipe trabalha com muito mais eficiência."
                            stars={5}
                            name="Carlos Andrade"
                            role="Professor Universitário"
                        />
                    </div>
                </section>
            </section>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <PricingCard
                        title="Básico"
                        description="Ideal para pequenas empresas que querem iniciar sua transformação digital."
                        price="Grátis"
                        features={["Acesso limitado às ferramentas", "Suporte básico"]}
                    />

                    <PricingCard
                        title="Premium"
                        description="Para empresas que precisam de soluções completas e integração digital."
                        price="R$ 89,90"
                        features={[
                            "Integração de sistemas",
                            "Automação de processos",
                            "Suporte dedicado",
                        ]}
                        highlight={true}
                        bonus="1º MÊS GRÁTIS"
                    />

                    <PricingCard
                        title="Empresarial"
                        description="Soluções avançadas para grandes negócios com alta demanda."
                        price="R$ 199,90"
                        features={[
                            "Consultoria personalizada",
                            "Infraestrutura escalável",
                            "Treinamento da equipe",
                        ]}
                    />
                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <h2>Entre em contato</h2>
                    <p>A <strong>AlkTeiTech</strong> está pronta pronta para ouvir você.
                        Envie sua mensagem e nossa equipe retornará o mais rápido possível.</p>
                </header>

                <form className="contact-form">
                    <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required />

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Conte um pouco sobre sua necessidade"
                        required
                    />
                    {/*Recaptcha */}
                    <Button text="Enviar" />
                </form>
            </section>

            <footer id="footer" className="container">
                <section className="footer-columns">
                    <div className="footer-col">
                        <img src={Logo} alt="Logo alkteiTech" width={220} height={80} />
                        <div className="social-icons">
                            <a href="#"><img src="instagram.svg" alt="Instagram" /></a>
                            <a href="#"><img src="linkedin.svg" alt="LinkedIn" /></a>
                            <a href="#"><img src="facebook.svg" alt="Facebook" /></a>
                            <a href="#"><img src="youtube.svg" alt="YouTube" /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Empresa</h3>
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Carreiras</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Teste e Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                        </ul>
                    </div>
                </section>

                <p className="footer-bottom">
                    Feito com amor na aula de Programação Web💙 ©2024 AlkTeiTech - Todos os direitos reservados. - Todos os direitos reservados.
                </p>

            </footer>
        </>
    );
}
