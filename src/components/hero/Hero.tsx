import Image from "next/image";
import "./hero.scss";
const Hero = () => {
    return (
        <div className="background-image">
            <div className="overlay-text">
                <h1>
                    <span>Soulfarm</span>
                </h1>
                <h1>Agricoltura</h1>
                <h1>Familiare</h1>
                <p>
                    L{"'"}azienda è certificata biologica ed è composta da orto,
                    frutteto e pascolo
                </p>
            </div>
        </div>
    );
};

export default Hero;
