import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState([]);

  const [nameOrigin, setnameOrigin] = useState([]); // Lo cree para poder guardar el origin, ya que no me dejaba mapear el objeto

  const { detailId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
          setnameOrigin(char.origin.name);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter([]);
  }, [detailId]);

  return (
    <div className={style.containerDetail}>
      <div className={style.containerDetailData}>
        <h1>NOMBRE: {character.name}</h1>
        <p>STATUS: {character.status}</p>
        <p>ESPECIE: {character.species}</p>
        <p>GÉNERO: {character.gender}</p>
        <p>ORIGIN: {nameOrigin}</p>
      </div>

      <img src={character.image} alt={character.name} />
    </div>
  );
}
