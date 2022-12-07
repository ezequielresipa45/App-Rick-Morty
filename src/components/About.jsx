import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.containerAbout}>
      <img src="" alt="" />
      <p>
        Hola 👋 soy Ezequiel Resipa, tengo 27 años soy de Bs As Argentina. Y esta es mi
        app de Rick y Morty, desarrolada con React. Utilize la API de Rick y
        Morty y la consumi a travez de Axios. Trabaje con estados (Hooks),
        (useEffects), (useState), (useParams), (react-router-dom para enlazar las rutas), y utilize el podoroso Redux para facilitarme poder trabar con estados, en esta App encontraras desde su pagina principal un botón donde podrás logearte para poder ingresar, luego vas a poder buscar tarjetas a travez de un input en donde ingresaras un numero ID al azar y la App te mostrará un personaje de la serie.
        También contarás con la posibilidad de eliminar este personaje de tu lista y/o poder agregarlo a favoritos, en donde también tendras la posibilidad de filtrar por género. Esta App fue desarrollada a partir del módulo II Soy Henry. Muchas gracias!!! 
      </p>
    </div>
  );
}
