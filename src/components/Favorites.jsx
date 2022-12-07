import React from "react";
import { connect } from "react-redux";
import styles from "./Favorites.module.css";
import { filterCards } from "../redux/actions";

const Favorites = (props) => {
  


  const handleSelect = (e) => {

    const value = e.target.value;

    props.filterCards(value)

  }

if(props.allCharacters.length === 0){
  return (
    <div className = {styles.containerPadre}>

      <select onChange={handleSelect} name="select"  >
      <option selected hidden>Elije un género</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">unknown</option>
        <option value="Genderless">Genderless</option>
      </select>

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


}else{
  return (
    <div className = {styles.containerPadre}>

      <select onChange={handleSelect} name="select"  >
        <option value="Male" >Male</option>
        <option value="Female" >Female</option>
        <option value="unknown">unknown</option>
        <option value="Genderless">Genderless</option>
      </select>

      {props.allCharacters.map((favorito) => (
        <div key={favorito.id} className = {styles.container}>
          <h2>{favorito.name}</h2>
          <p>{favorito.species}</p>
          <p>{favorito.gender}</p>
          <img src={favorito.image} alt={favorito.id} />
        </div>
      ))}

    </div>
  );
}


};


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters
  };
};

const mapDispatchToProps = (dispatch)=>{
return{
  filterCards: (status)=>{dispatch(filterCards(status))}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
