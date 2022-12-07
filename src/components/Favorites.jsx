import React from "react";
import { connect } from "react-redux";
import styles from "./Favorites.module.css";
import { filterCards } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Card from "./Card";

const Favorites = (props) => {
  console.log(props.myFavorites.length);

  let navigate = useNavigate();

  const handleSelect = (e) => {
    const value = e.target.value;

    props.filterCards(value);
  };

  useEffect(() => {
    if (props.myFavorites.length === 0) {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [navigate, props.myFavorites]);

  if (props.myFavorites.length === 0) {
    return (
      <p className={styles.sinResultados}>
        No hay Favoritos agregados aún.. 🤔
      </p>
    );
  }

  if (props.allCharacters.length === 0) {
    return (
      <div className={styles.containerPadre}>
        <select onChange={handleSelect} name="select">
          <option selected hidden>
            Elije un género
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">unknown</option>
          <option value="Genderless">Genderless</option>
        </select>

        {props.myFavorites.map((favorito) => (
          // <div key={favorito.id} className={styles.container}>
          //   <h2>{favorito.name}</h2>
          //   <p>{favorito.species}</p>
          //   <p>{favorito.gender}</p>
          //   <img src={favorito.image} alt={favorito.id} />
          // </div>
          <Card
            key={favorito.name}
            name={favorito.name}
            species={favorito.species}
            gender={favorito.gender}
            image={favorito.image}
            id={favorito.id}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={styles.containerPadre}>
        <select onChange={handleSelect} name="select">
          <option selected hidden>
            Elije un género
          </option>
          <option value="Male">Male 👨</option>
          <option value="Female">Female 👩</option>
          <option value="unknown">unknown 👾</option>
          <option value="Genderless">Genderless 🥨</option>
        </select>

        {props.allCharacters.map((favorito) => (
          // <div key={favorito.id} className={styles.container}>
          //   <h2>{favorito.name}</h2>
          //   <p>{favorito.species}</p>
          //   <p>{favorito.gender}</p>
          //   <img src={favorito.image} alt={favorito.id} />
          // </div>
          <Card
            key={favorito.name}
            name={favorito.name}
            species={favorito.species}
            gender={favorito.gender}
            image={favorito.image}
            id={favorito.id}
          />
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCards: (status) => {
      dispatch(filterCards(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
