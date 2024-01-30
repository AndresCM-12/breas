"use client";
import styles from "./productos.module.css";
import Image from "next/image";

import coverImg from "../../../public/productos/mainBanner.png";
import acondicionadorImg from "../../../public/productos/acondicionador.png";
import capaImg from "../../../public/productos/capa.png";
import shampooImg from "../../../public/productos/shampoo.png";
import shampoo1Img from "../../../public/productos/shampoo1.png";
import tcorteImg from "../../../public/productos/tcorte.png";
import tcorte1Img from "../../../public/productos/tcorte1.png";
import tcorte2Img from "../../../public/productos/tcorte2.png";
import tEntresacarImg from "../../../public/productos/tentresacar.png";
import catalogImg from "../../../public/productos/catalogo.png";
import shampooAraganImg from "../../../public/productos/shampooaragan.png";
import shampooAragan1Img from "../../../public/productos/shampooaragan1.png";
import shampooAragan2Img from "../../../public/productos/shampooaragan2.png";
import shampooAragan3Img from "../../../public/productos/shampooaragan3.png";
import trulyBiphaseImg from "../../../public/productos/trulybiphase.png";
import trulyBiphase1Img from "../../../public/productos/trulybiphase1.png";
import trulyBenefitsImg from "../../../public/productos/trulybenefits.png";
import trulyBenefits1Img from "../../../public/productos/trulybenefits1.png";
import trulyProtectingImg from "../../../public/productos/trulyprotecting.png";
import trulyProtecting1Img from "../../../public/productos/trulyprotecting1.png";
import ganPureoilImg from "../../../public/productos/granpureoil.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import "swiper/css/navigation";
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
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <Image src={acondicionadorImg} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={shampooAragan2Img} alt="product" />
            </SwiperSlide>
          </Swiper>
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
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <Image src={shampooImg} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={shampoo1Img} alt="product" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.product}>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <Image src={shampooAraganImg} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={shampooAragan1Img} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={shampooAragan3Img} alt="product" />
            </SwiperSlide>
          </Swiper>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.floatingText}
          >
            <h2>SHAMPOO Aceite de Argán</h2>
            <p>
              Shampoo de hidratación intensiva, dirigido para aquellos cabellos
              secos, castigados y débiles. El argan oil shampoo tiene una
              formula concentrada a base de aceite de argán y aguacate, ricos en
              vitamina E y antioxidantes que gracias a ellos aportan brillo y
              suavidad. Su función es limpiar e hidratar en profundidad para así
              dar volumen, brillo, suavidad y elasticidad.
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
              style={{ backgroundColor: "#9F0E34;" }}
            >
              <h2>TRULY BIPHASE</h2>
              <p>
                Acondicionar capilar sin enjuague que hidrata y repara cabellos,
                facilitando su peinado. Truly Biphase acondicionador instantáneo
                está diseñado con siliconas cosméticas e ingredientes de
                altísima calidad que lo convierten a una formula nutritiva y
                ligera que no engrasa el cabello, también está diseñado para
                todo tipo de cabellos.
              </p>
            </motion.div>
          </article>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <Image src={trulyBiphaseImg} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={trulyBiphase1Img} alt="product" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.product}>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <Image src={trulyBenefitsImg} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={trulyBenefits1Img} alt="product" />
            </SwiperSlide>
          </Swiper>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.floatingText}
            style={{ backgroundColor: "#9F0E34;" }}
          >
            <h2>TRULY 10 BENEFITS</h2>
            <p>
              Excelente tratamiento en crema, ideal para todo tipo de cabello,
              gracias a sus 10 beneficios, lo hace un tratamiento que consigue
              un cabello sano desde su primera puesta
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
              style={{ backgroundColor: "#9F0E34;" }}
            >
              <h2>TRULY PROTECTING HEAT</h2>
              <p>
                Spray protector de calor. El Truly Protecting Heat es un Serum
                térmico que crea una capaprotectora en el cabello protegiendo
                del calor de las secadoras y planchas. Es un producto que evita
                que las puntas se abran, y es recomendado su uso antes del
                secado y de cualquier técnica de alisado.
              </p>
            </motion.div>
          </article>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <Image src={trulyProtectingImg} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={trulyProtecting1Img} alt="product" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.product}>
          <Image src={ganPureoilImg} alt="product" />
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.floatingText}
            style={{ backgroundColor: "#DC9C46;" }}
          >
            <h2>GAN PURE OIL</h2>
            <p>
              Un aceite que nos ayuda a hidratar, suavizar, y reparar cabellos,
              sus ingredientes activos el Argan, el Abyssinian, el Aguacate, y
              la Vitamina E, son ideales para lograr un brillo intenso a los
              cabellos, a fortalecerlos y a dejarlos ligeros y suaves con una
              textura de seda.
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
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            style={{ width: "100%", height: "100%" }}
          >
            <SwiperSlide>
              <Image src={tcorteImg} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={tcorte1Img} alt="product" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={tcorte2Img} alt="product" />
            </SwiperSlide>
          </Swiper>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ backgroundColor: "#F2F2F2" }}
            className={styles.floatingText}
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
                Capa Impermeable.
              </h2>
              <p style={{ color: "#000000" }}>
                Diseñada para uso en corte o tinte. Gracias a sus
                características la hacen un producto útil para el trabajo diario
                del salón, es resistente al agua, a manchas, antiestática ligera
                y suave.
              </p>
            </motion.div>
          </article>
          <Image src={capaImg} alt="product" />
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
