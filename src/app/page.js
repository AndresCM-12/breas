import Image from "next/image";
import styles from "./page.module.css";

import mainBanner from "../../public/inicio/mainImage.png";
import contactoImg from "../../public/inicio/conocenos.png";

import tijerasImg from "../../public/inicio/tijeras.png";
import shampooImg from "../../public/inicio/shampoo.png";
import coverImg from "../../public/inicio/cover.png";
import Form from "./components/form/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.homeBanner}>
        <Image src={mainBanner} alt="main banner" />
        <div className={styles.shadow}></div>
        <div className={styles.primaryContainer}>
          <h1>shampoo matizador</h1>
          <p>
            Shampo Matizador color violeta neutraliza los tonos amarillos, ideal
            para cabellos decolorados, canosos y rubios claros. Evita la
            oxidación de tu cabello.
          </p>
          <a href="/productos">CONOCE NUESTRO SHAMPOO</a>
        </div>
      </section>

      <section className={styles.homeProducts}>
        <div>
          <h2>Nuestros productos</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo
          </p>
        </div>
        <div className={styles.products}>
          <div className={styles.product}>
            <Image src={tijerasImg} alt="tijeras" />
          </div>
          <div className={styles.product}>
            <Image src={shampooImg} alt="shampoo" />
            <a href="/productos">ver todo</a>
          </div>
          <div className={styles.product}>
            <Image src={coverImg} alt="cover" />
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <Image src={contactoImg} alt="contacto banner" />
        <div>
          <h2>¿Conócenos?</h2>
          <p>
            En Breas somos una empresa comprometidos con la innovación de
            productos para el cuidado y belleza del cabello, seleccionamos los
            mejores ingredientes para satisfacer las necesidades actuales de tu
            estilo de vida actual.
          </p>
          <a href="/contacto">conocenos</a>
        </div>
      </section>

      <section className={styles.links}>
        <a href="/contacto">Quiero ser distribuidor </a>
        <a href="/contacto">Quiero vender Breas en mi salón</a>
      </section>

      <Form showImg={true} />
    </main>
  );
}
