import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.contenedorButton}>
        <button
          className={styles.buttonClick}
          onClick={() => props.onClose(props.id)}
        >
          X
        </button>
      </div>

      <div className={styles.containerImage}>
        <img src={props.image} alt="" />
        <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
      </div>

      <div className={styles.containerDates}>
        <h2>{props.gender}</h2>
        <h2>{props.species}</h2>
      </div>
    </div>
  );
}
