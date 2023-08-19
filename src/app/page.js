"use client";
import Image from "next/image";
import styles from "./page.module.css";

import mainBanner from "../../public/inicio/mainImage.png";
import contactoImg from "../../public/inicio/conocenos.png";

import tijerasImg from "../../public/inicio/tijeras.png";
import shampooImg from "../../public/inicio/shampoo.png";
import coverImg from "../../public/inicio/cover.png";
import Form from "./components/form/Form";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.homeBanner}>
        <Image src={mainBanner} alt="main banner" />
        <div className={styles.shadow}></div>
        <div className={styles.primaryContainer}>
          <motion.h1
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            shampoo matizador
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Shampo Matizador color violeta neutraliza los tonos amarillos, ideal
            para cabellos decolorados, canosos y rubios claros. Evita la
            oxidación de tu cabello.
          </motion.p>
          <motion.a
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            href="/productos"
          >
            CONOCE NUESTRO SHAMPOO
          </motion.a>
        </div>
      </section>

      <section className={styles.homeProducts}>
        <div>
          <motion.h2
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Nuestros productos
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo
          </motion.p>
        </div>
        <div className={styles.products}>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className={styles.product}
          >
            <Image src={tijerasImg} alt="tijeras" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className={styles.product}
          >
            <Image src={shampooImg} alt="shampoo" />
            <a href="/productos">ver todo</a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className={styles.product}
          >
            <Image src={coverImg} alt="cover" />
          </motion.div>
        </div>
      </section>

      <section className={styles.contact}>
        <Image src={contactoImg} alt="contacto banner" />
        <div>
          <motion.h2
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            ¿Conócenos?
          </motion.h2>
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
          <a href="/contacto">conocenos</a>
        </div>
      </section>

      <section className={styles.links}>
        <motion.a
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          href="/contacto"
        >
          Quiero ser distribuidor{" "}
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          href="/contacto"
        >
          Quiero vender Breas en mi salón
        </motion.a>
      </section>

      <Form showImg={true} />
    </main>
  );
}
