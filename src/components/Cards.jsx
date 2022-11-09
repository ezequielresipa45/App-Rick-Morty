import Card from "./Card";

import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.contenedorCards}>
      {props.characters.map((card) => (
        <Card
          key={card.name}
          name={card.name}
          species={card.species}
          gender={card.gender}
          image={card.image}
          onClose={props.onClose}
          id={card.id}
        />
      ))}
    </div>
  );
}
