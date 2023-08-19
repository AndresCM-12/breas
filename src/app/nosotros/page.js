"use client";
import styles from "./nosotros.module.css";
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
          Nosotros
        </motion.h1>
      </section>
      <section className={styles.main}>
        <div className={styles.texto}>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            En Breas somos una empresa comprometidos con la innovación de
            productos para el cuidado y belleza del cabello, seleccionamos los
            mejores ingredientes para satisfacer las necesidades actuales de tu
            estilo de vida actual.
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Estamos comprometidos con el trabajo profesional de los estilistas
            contamos con líneas especializadas para cuidar y mantener su trabajo
            y lograr una satisfacción total en sus clientes e impulsar al máximo
            su creatividad.
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Nuestra visión es estar constantemente innovando buscando nuevas
            tecnologías para el cuidado del cabello con productos vanguardistas,
            ingredientes naturales y siendo responsables con el medio ambiente.
          </motion.p>
        </div>
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={styles.links}
        >
          <a href="/contacto">Quiero ser distribuidor </a>
          <a href="/contacto">Quiero vender Breas en mi salón</a>
        </motion.div>
      </section>
    </>
  );
}
