import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.containerAbout}>
      <img src="" alt="" />
      <p>
        Hola soy Ezequiel, tengo 27 años soy de Bs As Argentina. Y esta es mi
        app de Rick y Morty, desarrolada con React. Utilize la API de Rick y
        Morty y la consumi a travez de Axios. Trabaje con estados (Hooks),
        (useEffects), (useState), (useParams), (react-router-dom).
      </p>
    </div>
  );
}
