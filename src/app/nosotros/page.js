import styles from "./nosotros.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.header}>
        <h1>Nosotros</h1>
      </section>
      <section className={styles.main}>
      <div className={styles.texto}>
          <p>
            En Breas somos una empresa comprometidos con la innovación de
            productos para el cuidado y belleza del cabello, seleccionamos los
            mejores ingredientes para satisfacer las necesidades actuales de tu
            estilo de vida actual.
          </p>
          <p>
            Estamos comprometidos con el trabajo profesional de los estilistas
            contamos con líneas especializadas para cuidar y mantener su trabajo
            y lograr una satisfacción total en sus clientes e impulsar al máximo
            su creatividad.
          </p>
          <p>
            Nuestra visión es estar constantemente innovando buscando nuevas
            tecnologías para el cuidado del cabello con productos vanguardistas,
            ingredientes naturales y siendo responsables con el medio ambiente.
          </p>
        </div>
        <div className={styles.links}>
          <a href="">Quiero ser distribuidor </a>
          <a href="">Quiero vender Breas en mi salón</a>
        </div>
      </section>
    </>
  );
}
