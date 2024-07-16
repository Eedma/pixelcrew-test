import Image from "next/image";
import "./header.scss";

const links = [
    {
        label: "azienda agricola",
        target: "#",
    },
    {
        label: "fattoria didattica",
        target: "#",
    },
    {
        label: "agriturismo",
        target: "#",
    },
    {
        label: "bio e sostenibilità",
        target: "#",
    },
    {
        label: "turismo e territorio",
        target: "#",
    },
    {
        label: "dove siamo",
        target: "#",
    },
];

const Header = () => {
    return (
        <div className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <Image
                        alt="soul farm logo"
                        src="/assets/soulfarm-logo.png"
                        width={67}
                        height={40}
                    />
                </div>

                <div className="nav-links">
                    {links.map((el) => (
                        <div key={el.label} className="nav-link-item">
                            {el.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
