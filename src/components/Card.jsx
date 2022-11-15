import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addPersonaje, deletePersonaje} from '../redux/actions';

function Card(props) {


  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);





const [isFav, setIsFav] = useState(false);


const handleFavorite = ()=>{

if(isFav){
  setIsFav(false);
  props.deletePersonaje(props.id)
}else{
  setIsFav(true);
  props.addPersonaje(props)
}




}

  return (
    <div className={styles.containerCard}>

    {
      isFav ? (<button onClick = {handleFavorite}>❤️</button>) : (
        <button onClick = {handleFavorite}>🤍</button>
      )
    }





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


const mapDispatchToProps = (dispatch) => {

return{

  addPersonaje: (name)=> { dispatch(addPersonaje(name))},
  deletePersonaje: (id)=> { dispatch(deletePersonaje(id))}

}
}


const mapStateToProps = (state)=>{
return{

  myFavorites : state.myFavorites

}

}



export default connect(mapStateToProps, mapDispatchToProps)(Card)