import styles from "./styles.module.css"
import img1 from "../../assets/icons/1.png"
import img2 from "../../assets/icons/2.png"
import img3 from "../../assets/icons/3.png"
import img4 from "../../assets/icons/4.png"

const Icons = () => {
    return (
        <section className="container" >
            <div className={styles.background}>
                <ul className={styles.unorderList}>
                    <li>
                        <img src={img1} alt="Icone de profile" />
                        <p className="afacad center">Profissionais especializados,
                            proporcionando maior qualidade
                            em menos tempo</p>
                    </li>
                    <li>
                        <img src={img2} alt="Icone de mapa" />
                        <p className="afacad center">Atendimento em Água Claras e região</p>
                    </li>
                    <li>
                        <img src={img3} alt="Icone de relógio" />
                        <p className="afacad center">Serviço rápido e eficiente.
                            Entre 1 a 2 horas dependendo da quantidade de itens.</p>
                    </li>
                    <li>
                        <img src={img4} alt="Icone formas de pagamento" />
                        <p className="afacad center">Formas de pagamento flexíveis, podendo ser por cartão de crédito, débito ou por pix.</p>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default Icons