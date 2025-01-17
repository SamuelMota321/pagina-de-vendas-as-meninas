import check from "../../assets/icons/Check.png"
import sofa from "../../assets/sofa.png"
import styles from "./styles.module.css"

const Clean = () => {
    return (
        <section className={`container ${styles.section}`}>
                <h1 className="cinzel-decorative-bold center">
                    Porque fazer uma limpeza profissional?
                </h1>   
            <div>
                <img src={sofa} alt="Imagem de um sofá limpo" />
                <div className={styles.divUl}>
                    <ul className={styles.ul}>
                        <li>
                            <img src={check} alt="Icone de ok" />
                            <p className="be-vietnam-pro">Remoção de manchas e odores desagradáveis</p>
                        </li>
                        <li>
                            <img src={check} alt="Icone de ok" />
                            <p className="be-vietnam-pro">Remoção de Ácaros, Fungos e Bactérias</p>
                        </li>
                        <li>
                            <img src={check} alt="Icone de ok" />
                            <p className="be-vietnam-pro">Restaura a beleza e a higiene  da sua casa</p>
                        </li>
                        <li>
                            <img src={check} alt="Icone de ok" />
                            <p className="be-vietnam-pro">Ambiente mais limpo e confortável</p>
                        </li>
                        <li>
                            <img src={check} alt="Icone de ok" />
                            <p className="be-vietnam-pro">Escovação manual do estofado e aspiração completa sem dinificar o tecido</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Clean