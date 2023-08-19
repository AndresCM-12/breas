"use client";
import Image from "next/image";
import styles from "./contacto.module.css";
import imgMap from "../../../../public/contact/map.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Form({ showImg }) {
  return (
    <section className={styles.main}>
      <motion.div
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className={styles.left}
      >
        <div className={styles.form}>
          <h1>Contactanos</h1>
          <form action="https://formsubmit.co/contacto@breas.com" method="POST">
            <input
              type="text"
              placeholder="Nombre"
              name="Nombre"
              required
            ></input>
            <input
              type="email"
              placeholder="Correo"
              name="Correo"
              required
            ></input>
            <input
              type="text"
              placeholder="Asunto"
              name="Asunto"
              required
            ></input>
            <textarea placeholder="Mensaje" name="Mensaje"></textarea>
            <div className={styles.send}>
              <button type="submit">
                <h3>Enviar</h3>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path d="M1 1L6 6L1 11" stroke="black" />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div
          style={{
            right: showImg ? "-560px" : "0px",
          }}
          className={styles.info}
        >
          <div className={styles.text}>
            <div className={styles.direccion}>
              <p>
                Calle Séptima y Media 3214, Santa Rosa,<br></br>31050 Chihuahua,
                Chih.
              </p>
              <svg
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.375 15.6875C0.8125 9.125 0 8.4375 0 6C0 2.6875 2.65625 0 6 0C9.3125 0 12 2.6875 12 6C12 8.4375 11.1562 9.125 6.59375 15.6875C6.3125 16.125 5.65625 16.125 5.375 15.6875ZM6 8.5C7.375 8.5 8.5 7.40625 8.5 6C8.5 4.625 7.375 3.5 6 3.5C4.59375 3.5 3.5 4.625 3.5 6C3.5 7.40625 4.59375 8.5 6 8.5Z"
                  fill="#361C7A"
                />
              </svg>
            </div>

            <p>
              (614)123-5660{" "}
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4062 1.78125C16.75 1.875 17 2.15625 17 2.5C17 10.5312 10.5 17 2.5 17C2.125 17 1.84375 16.7812 1.75 16.4375L1 13.1875C0.9375 12.8438 1.09375 12.4688 1.4375 12.3125L4.9375 10.8125C5.25 10.6875 5.59375 10.7812 5.8125 11.0312L7.375 12.9375C9.8125 11.7812 11.7812 9.78125 12.9062 7.40625L11 5.84375C10.75 5.625 10.6562 5.28125 10.7812 4.96875L12.2812 1.46875C12.4375 1.125 12.8125 0.9375 13.1562 1.03125L16.4062 1.78125Z"
                  fill="#361C7A"
                />
              </svg>
            </p>
            <p>
              contacto@breas.com{" "}
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6875 3.96875C15.8125 3.875 16 3.96875 16 4.125V10.5C16 11.3438 15.3125 12 14.5 12H1.5C0.65625 12 0 11.3438 0 10.5V4.125C0 3.96875 0.15625 3.875 0.28125 3.96875C1 4.53125 1.90625 5.21875 5.09375 7.53125C5.75 8 6.875 9.03125 8 9.03125C9.09375 9.03125 10.25 8 10.875 7.53125C14.0625 5.21875 14.9688 4.53125 15.6875 3.96875ZM8 8C7.25 8.03125 6.21875 7.09375 5.6875 6.71875C1.53125 3.71875 1.21875 3.4375 0.28125 2.6875C0.09375 2.5625 0 2.34375 0 2.09375V1.5C0 0.6875 0.65625 0 1.5 0H14.5C15.3125 0 16 0.6875 16 1.5V2.09375C16 2.34375 15.875 2.5625 15.6875 2.6875C14.75 3.4375 14.4375 3.71875 10.2812 6.71875C9.75 7.09375 8.71875 8.03125 8 8Z"
                  fill="#361C7A"
                />
              </svg>
            </p>
          </div>

          <div
            style={{
              display: showImg ? "flex" : "none",
            }}
            className={styles.image}
          ></div>
        </div>
      </motion.div>
      <div
        className={styles.right}
        style={{
          paddingBlockStart: !showImg ? "0px" : "48px",
        }}
      >
        <Image
          src={imgMap}
          alt={"Mapa"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
