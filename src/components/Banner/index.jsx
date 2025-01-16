import asMeninas from "../../assets/Logo - as meninas branco.png"
import sofa from "../../assets/sofa-banner.png"
import seta from "../../assets/seta.png"
import styles from "./styles.module.css"

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.box1}>
        <img src={sofa} alt="Sofá antes e depois" />
      </div>
      <div className={styles.box2}>
        <img src={asMeninas} alt="Logo da empresa de limpeza e higienização de estofado As Meninas" />
        <h1 className={`cinzel-decorative-bold ${styles.title}`} >Lavagem a seco em casa</h1>
        <div className={styles.bannerBar}></div>
        <h2 className={`be-vietnam-pro-bold secodary-font-color ${styles.subtitle}`}>A limpeza profissional no conforto do seu lar!</h2>
        <button className={`${styles.bannerButton} be-vietnam-pro-bold`}>Solicitar Orçamento</button>
      </div>
      <div className={styles.bannerArrow}>
        <img src={seta} alt="Seta apontada para baixo" />
      </div>
    </section>
  );
}

export default Banner; 