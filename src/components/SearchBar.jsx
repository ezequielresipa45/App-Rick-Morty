import styles from "./Search.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [character, setcharacter] = useState("");

  const handleNames = (e) => setcharacter(e.target.value);

  return (
    <div className={styles.conteinerSearch}>
      <input type="search" onChange={handleNames} />
      <button onClick={() => props.onSearch(character)}>Agregar</button>
    </div>
  );
}
