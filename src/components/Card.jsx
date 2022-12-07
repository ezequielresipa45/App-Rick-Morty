import styles from "./Card.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addPersonaje, deletePersonaje } from "../redux/actions";
import gif from "../images/gifRickAndMorty.gif";

function Card(props) {
  const location = useLocation();

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deletePersonaje(props.id);
    } else {
      setIsFav(true);
      props.addPersonaje(props);
    }
  };

  return (
    <div className={styles.containerCard}>
      <div className={styles.containerImage}>
        <img src={props.image} alt="" />
      </div>

      <div className={styles.containerDates}>
        <Link to={`/detail/${props.id}`}>
          <p>{props.name}</p>
        </Link>
        <h4>
          {" "}
          <span></span> Alive - {props.species}
        </h4>

        <div className={styles.contenedorGeneroImage}>
          <div>
            <h5>Gender:</h5>
            <h4>{props.gender}</h4>
          </div>

          <img width={50} src={gif} alt="gif" />
        </div>
      </div>

      {location.pathname === "/home" ? (
        <div className={styles.contenedorButton}>
          <button
            className={styles.buttonClick}
            onClick={() => props.onClose(props.id)}
          >
            X
          </button>

          {isFav ? (
            <button className={styles.favorites} onClick={handleFavorite}>
              ❤️
            </button>
          ) : (
            <button className={styles.favorites} onClick={handleFavorite}>
              🤍
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPersonaje: (name) => {
      dispatch(addPersonaje(name));
    },
    deletePersonaje: (id) => {
      dispatch(deletePersonaje(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
