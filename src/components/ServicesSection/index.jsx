import Card from "./Card"
import img1 from "../../assets/icons/1(1).png"
import img2 from "../../assets/icons/2(1).png"
import img3 from "../../assets/icons/3(1).png"
import img4 from "../../assets/icons/4(1).png"
import img5 from "../../assets/icons/5(1).png"
import img6 from "../../assets/icons/6(1).png"
import styles from "./styles.module.css"

const Services = () => {
    return (
        <section className="container">
            <h1 className={`${styles.h1} cinzel-decorative-bold center` }>Serviços prestados</h1>
            <div className={styles.grid}>
                <Card
                    style={styles.grid1}
                    image={img2}
                    title={"Sofás e Estofados"}
                    description={"Restauramos a beleza e a higiene dos seus sofás, eliminando sujeira, manchas e odores, para que você possa relaxar com tranquilidade."}
                />
                <Card
                    style={styles.grid2}
                    image={img5}
                    title={"Cortinas"}
                    description={"Fazemos uma higienização profunda para que suas cortinas fiquem, livres de poeira e ácaros, proporcionando um ambiente saudável e acolhedor."}
                />
                <Card
                    style={styles.grid3}
                    image={img1}
                    title={"Colchões"}
                    description={"Oferecemos uma higienização profunda que elimina ácaros, fungos e bactérias, proporcionando noites de sono mais saudáveis e revigorantes."}
                />
                <Card
                    style={styles.grid4}
                    image={img3}
                    title={"Poltronas"}
                    description={"Renove e revitalize sua poltrona, eliminando sujeira, manchas e odores, para um ambiente confortável e livre de impurezas."}
                />
                <Card
                    style={styles.grid5}
                    image={img4}
                    title={"Tapetes e Carpetes"}
                    description={"Fazemos uma limpeza profunda, removemos impurezas e alérgenos, preservando a beleza e a durabilidade desses elementos decorativos."}
                />
                <Card
                    style={styles.grid6}
                    image={img6}
                    title={"Cama de pet"}
                    description={"Nosso cuidado também se estende aos nossos queridos companheiros de quatro patas, oferecendo higienização completa das caminhas."}
                />
            </div>


        </section>
    )
}

export default Services