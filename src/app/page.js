"use client";
import Image from "next/image";
import styles from "./page.module.css";

import mainBanner from "../../public/inicio/mainImage.png";
import secondBanner from "../../public/inicio/secondImage.png";
import thirdBanner from "../../public/inicio/thirdImage.png";

import contactoImg from "../../public/inicio/conocenos.png";
import coomingSoonImg from "../../public/inicio/coomingsoon.png";

import tijerasImg from "../../public/inicio/tijeras.png";
import shampooImg from "../../public/inicio/shampoo.png";
import coverImg from "../../public/inicio/cover.png";
import Form from "./components/form/Form";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

export default function Home() {
  var slides = [
    {
      title: "Shampoo Matizador",
      text: "Shampo Matizador color violeta neutraliza los tonos amarillos, ideal para cabellos decolorados, canosos y rubios claros. Evita la oxidación de tu cabello.",
      cta: "CONOCE NUESTRO SHAMPOO",
      img: mainBanner,
      bc: "#361C7A",
    },
    {
      title: "TRULY BIPHASE",
      text: "Acondicionar capilar sin enjuague que hidrata y repara cabellos, facilitando su peinado. Truly Biphase acondicionador instantáneo está diseñado con siliconas cosméticas e ingredientes de altísima calidad que lo convierten a una formula nutritiva y ligera que no engrasa el cabello, también está diseñado para todo tipo de cabellos.",
      cta: "cONOCE NUESTRO ACONDICIONADOR CAPILAR",
      img: secondBanner,
      bc: "#9F0E34",
    },
    {
      title: "CONOCE NUESTROS PRODUCTOS",
      text: "",
      cta: "CONOCE NUESTRO SHAMPOO",
      img: thirdBanner,
      bc: "#8F8F8F",
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <main className={styles.main}>
      <section className={styles.homeBanner}>
        <Swiper
          onSlideChangeTransitionEnd={(index) =>
            setCurrentSlideIndex(index.realIndex)
          }
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          pagination={{
            type: "progressbar",
          }}
          speed={1000}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          style={{ width: "100%", height: "100%" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={"swiperslide" + index}>
              <Image src={slide.img} alt="main banner" />
              <div className={styles.shadow}></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.div
          className={styles.primaryContainer}
          style={{ backgroundColor: slides[currentSlideIndex].bc, zIndex: 10, transition: "background-color 500ms ease" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {slides[currentSlideIndex].title}
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {slides[currentSlideIndex].text}
          </motion.p>
          <a href="/productos">{slides[currentSlideIndex].cta}</a>
        </motion.div>
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
            En breas estamos comprometidos con la creación de productos de
            vanguardia para dar una solución integral a tu estilo y cuidado de
            tu cabello, elaborados con la mejor selección de ingredientes
            proporcionándote una garantía de calidad. Para nosotros es de suma
            importancia el cuidado personal es por eso que nuestros productos
            son de alta gama siendo recomendados por los mejores estilistas.
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

      <section className={styles.contact}>
        <Image src={coomingSoonImg} alt="contacto banner" />
        <div>
          <motion.h2
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Coming soon
          </motion.h2>
        </div>
      </section>
    </main>
  );
}
