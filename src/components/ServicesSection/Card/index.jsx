import styles from "./styles.module.css"

const Card = ({ title, description, image, alter, style }) => {
    return (
        <div className={style}>
            <img src={image} alt={alter} />
            <h2 className="be-vietnam-pro-bold">{title}</h2>
            <span className={styles.span}></span>
            <p className="afacad">{description}</p>
            <button className="be-vietnam-pro-bold">Solicitar Orçamento</button>
        </div>
    )
}

export default Card