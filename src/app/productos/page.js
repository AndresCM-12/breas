import styles from "./productos.module.css";
import Image from "next/image";

import coverImg from "../../../public/productos/mainBanner.png";
import acondicionadorImg from "../../../public/productos/acondicionador.png";
import capaImg from "../../../public/productos/capa.png";
import shampooImg from "../../../public/productos/shampoo.png";
import tcorteImg from "../../../public/productos/tcorte.png";
import tEntresacarImg from "../../../public/productos/tentresacar.png";
import catalogImg from "../../../public/productos/catalogo.png";

export default function Home() {
  return (
    <>
      <section className={styles.header}>
        <h1>Productos</h1>
        <Image src={coverImg} alt="cover image" />
      </section>
      <section className={styles.main}>
        <div className={styles.product}>
          <Image src={acondicionadorImg} alt="product" />
          <div className={styles.floatingText}>
            <h2>Acondicionador Aceite de Argán</h2>
            <p>
              Reparador intensivo, aporta hidratación gracias a su componente
              activo de argán. Devuelve elasticidad y repara el cabello dañado
              por agentes externos.
            </p>
          </div>
        </div>
        <div className={`${styles.product} ${styles.inverted}`}>
          <div></div>
          <Image src={shampooImg} alt="product" />
          <div className={styles.floatingText}>
            <h2>Shampoo Matizador</h2>
            <p>
              Shampo Matizador color violeta neutraliza los tonos amarillos,
              ideal para cabellos decolorados, canosos y rubios claros. Evita la
              oxidación de tu cabello.
            </p>
          </div>
        </div>
        <div className={styles.product}>
          <Image src={tcorteImg} alt="product" />
          <div
            className={styles.floatingText}
            style={{ backgroundColor: "#F2F2F2;" }}
          >
            <h2 className={styles.black} style={{ color: "#000000" }}>
              Tijeras de Corte.
            </h2>
            <p style={{ color: "#000000" }}>
              Tijeras de corte de cabello de uso profesional de 6 pulgadas
              fabricadas en acero inoxidable, diseño ergonómico, ligeras y que
              garantiza un corte perfecto ya que evita daños o quiebres. Esta
              diseñada para cortes en cabellos húmedos o secos.
            </p>
          </div>
        </div>
        <div className={`${styles.product} ${styles.inverted}`}>
          <div></div>
          <Image src={tEntresacarImg} alt="product" />
          <div
            className={styles.floatingText}
            style={{ backgroundColor: "#F2F2F2;" }}
          >
            <h2 className={styles.black} style={{ color: "#000000" }}>
              Tijera de Entresacar.
            </h2>
            <p style={{ color: "#000000" }}>
              Tijera de entresacar de 6 pulgadas, descarga el volumen sin perder
              el largo del cabello ideales para texturizar y lograr diferentes
              estilos. Diseño ergonómico y ligero.
            </p>
          </div>
        </div>
        <div className={styles.product}>
          <Image src={capaImg} alt="product" />
          <div
            className={styles.floatingText}
            style={{ backgroundColor: "#F2F2F2;" }}
          >
            <h2 className={styles.black} style={{ color: "#000000" }}>
              Capa Impermeable.
            </h2>
            <p style={{ color: "#000000" }}>
              Diseñada para uso en corte o tinte. Gracias a sus características
              la hacen un producto útil para el trabajo diario del salón, es
              resistente al agua, a manchas, antiestática ligera y suave.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.moreProducts}>
        <h1>proxímamente más productos</h1>
      </section>
      <section className={styles.links}>
        <a href="#">Quiero ser distribuidor </a>
        <a href="#">Quiero vender Breas en mi salón</a>
      </section>
      <section className={styles.catalog}>
        <div>
          <h1>Descarga nuesto catÁlogo digital</h1>
          <p>
            <a href="">DescARGAR CATÁLOGO</a>
          </p>
        </div>
        <Image src={catalogImg} alt="catalog" />
      </section>
    </>
  );
}
