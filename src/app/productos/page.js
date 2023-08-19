"use client";
import styles from "./productos.module.css";
import Image from "next/image";

import coverImg from "../../../public/productos/mainBanner.png";
import acondicionadorImg from "../../../public/productos/acondicionador.png";
import capaImg from "../../../public/productos/capa.png";
import shampooImg from "../../../public/productos/shampoo.png";
import tcorteImg from "../../../public/productos/tcorte.png";
import tEntresacarImg from "../../../public/productos/tentresacar.png";
import catalogImg from "../../../public/productos/catalogo.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <section className={styles.header}>
        <motion.h1
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          Productos
        </motion.h1>
        <Image src={coverImg} alt="cover image" />
      </section>
      <section className={styles.main}>
        <div className={styles.product}>
          <Image src={acondicionadorImg} alt="product" />
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.floatingText}
          >
            <h2>Acondicionador Aceite de Argán</h2>
            <p>
              Reparador intensivo, aporta hidratación gracias a su componente
              activo de argán. Devuelve elasticidad y repara el cabello dañado
              por agentes externos.
            </p>
          </motion.div>
        </div>
        <div className={`${styles.product} ${styles.inverted}`}>
          <article>
            <motion.div
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className={styles.floatingTextInverted}
            >
              <h2>Shampoo Matizador</h2>
              <p>
                Shampo Matizador color violeta neutraliza los tonos amarillos,
                ideal para cabellos decolorados, canosos y rubios claros. Evita
                la oxidación de tu cabello.
              </p>
            </motion.div>
          </article>
          <Image src={shampooImg} alt="product" />
        </div>
        <div className={styles.product}>
          <Image src={tcorteImg} alt="product" />
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
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
          </motion.div>
        </div>
        <div className={`${styles.product} ${styles.inverted}`}>
          <article>
            <motion.div
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{ backgroundColor: "#F2F2F2" }}
              className={styles.floatingTextInverted}
            >
              <h2 className={styles.black} style={{ color: "#000000" }}>
                Tijera de Entresacar.
              </h2>
              <p style={{ color: "#000000" }}>
                Tijera de entresacar de 6 pulgadas, descarga el volumen sin
                perder el largo del cabello ideales para texturizar y lograr
                diferentes estilos. Diseño ergonómico y ligero.
              </p>
            </motion.div>
          </article>
          <Image src={tEntresacarImg} alt="product" />
        </div>
        <div className={styles.product}>
          <Image src={capaImg} alt="product" />
          <motion.div
            style={{ backgroundColor: "#F2F2F2;" }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.floatingText}
          >
            <h2 className={styles.black} style={{ color: "#000000" }}>
              Capa Impermeable.
            </h2>
            <p style={{ color: "#000000" }}>
              Diseñada para uso en corte o tinte. Gracias a sus características
              la hacen un producto útil para el trabajo diario del salón, es
              resistente al agua, a manchas, antiestática ligera y suave.
            </p>
          </motion.div>
        </div>
      </section>
      <section className={styles.moreProducts}>
        <motion.h1
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          proxímamente más productos
        </motion.h1>
      </section>
      <section className={styles.links}>
        <a href="/contacto">Quiero ser distribuidor </a>
        <a href="/contacto">Quiero vender Breas en mi salón</a>
      </section>
      <section className={styles.catalog}>
        <div>
          <motion.h1
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Descarga nuesto catÁlogo digital
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <a href="./Breas_catálogo.pdf" download>
              DescARGAR CATÁLOGO
            </a>
          </motion.p>
        </div>
        <Image src={catalogImg} alt="catalog" />
      </section>
    </>
  );
}
