import img1 from "../../assets/antes-depois-1.png"
import img2 from "../../assets/antes-depois-2.png"
import styles from "./styles.module.css"

const After = () => {
    return (
        <section className="container">
            <h1 className={`${styles.h1} cinzel-decorative-bold center`}>Antes e Depois</h1>
            <div className={styles.flex}>
                <img src={img1} alt="Antes e depois da limpeza" />
                <img src={img2} alt="Antes e depois da limpeza" />
                <button onClick={window.location.href = "https://wa.me/556181412454?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento..."} className="be-vietnam-pro-bold">Soliciar Orçamento </button>
            </div>
        </section>
    )
}

export default After