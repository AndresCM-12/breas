import styles from "./contacto.module.css";

import Form from "../components/form/Form";
export default function Home() {
  return (
    <>
      <section className={styles.header}></section>
      <Form showImg={false} />
    </>
  );
}
