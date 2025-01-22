import styles from "./styles.module.css";

const Card = ({ title, description, image, alter, style }) => {
    const handleButtonClick = () => {
        window.location.href = "https://wa.me/556181412454?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento...";
    };

    return (
        <div className={style}>
            <img src={image} alt={alter} />
            <h2 className="be-vietnam-pro-bold">{title}</h2>
            <span className={styles.span}></span>
            <p className="afacad">{description}</p>
            <button onClick={handleButtonClick} className="be-vietnam-pro-bold">
                Solicitar Orçamento
            </button>
        </div>
    );
};

export default Card;
