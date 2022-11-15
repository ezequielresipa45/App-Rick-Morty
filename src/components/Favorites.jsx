import React from "react";
import { connect } from "react-redux";
import styles from "./Favorites.module.css";

const Favorites = (props) => {
  return (
    <div className = {styles.containerPadre}>
      

      {props.myFavorites.map((favorito) => (
        <div key={favorito.id} className = {styles.container}>
          <h2>{favorito.name}</h2>
          <p>{favorito.species}</p>
          <p>{favorito.gender}</p>
          <img src={favorito.image} alt={favorito.id} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
