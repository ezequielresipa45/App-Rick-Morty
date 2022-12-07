import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={styles.contenedorNav}>
      
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/home">
        <p>Home</p>
      </Link>
      <Link to="/favorites">
        <p>Favorites</p>
      </Link>

<button className={styles.btn}  onClick={props.logout}>🔓 Salir</button>
      


      <div className={styles.contenedorOnSearch}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
