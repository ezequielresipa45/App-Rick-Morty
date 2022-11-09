import Cards from "./components/Cards.jsx";
// import characters, { Rick } from "./data.js";
import styles from "./App.module.css";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";

function App() {
  const [character, setCharacters] = useState([]);

  const onSearch = (personaje) => {
    fetch(`https://rickandmortyapi.com/api/character/${personaje}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          // console.log(data)
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  // console.log(character)

  const onClose = (personajeId) => {
    console.log(personajeId);

    let filtroArreglo = character.filter(function (i) {
      return i.id !== personajeId;
    }); // filtramos

    console.log(filtroArreglo);

    setCharacters(filtroArreglo);
  };

  return (
    <div className={styles.contenedor}>
      <Nav onSearch={onSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.containerCards}>
              <Cards characters={character} onClose={onClose} />
            </div>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
