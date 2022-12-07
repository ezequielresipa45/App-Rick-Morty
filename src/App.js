import Cards from "./components/Cards.jsx";
// import characters, { Rick } from "./data.js";
import styles from "./App.module.css";
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Favorites from "./components/Favorites.jsx";
import Forms from "./components/Forms.jsx";
import "animate.css";
import gif from "./images/gifRickAndMorty.gif";

function App() {
  const navigate = useNavigate();

  const [access, setAccess] = useState(false); // SETEA SI EL USUARIO EXISTE O NO PARA DARLE ACCESO A LA WEB
  const username = "admin@prueba.com";
  const password = "Admin123!";

  // ESTE USE EFFECTS EVITA QUE EL USUARIO NAVEGE POR LA PAGINA, HASTA QUE EL ACCESO SEA EL CORRECTO.
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  // FUNCION QUE SE PASA POR PROPS AL FORMS, CHEQUEA SI EL PASSWORD Y EL USUARIO COICIDEN CON EL USER - PASS DE LA BASE DE DATOS FICTISIA.
  function login(userData) {
    if (username === userData.username && password === userData.password) {
      setAccess(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }

  // FUNCION QUE SE LA PASO A UN BOTON EN EL NAV, QUE VA A DESLOGEAR AL USUARIO
  const logout = () => access && setAccess(false);

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

  const location = useLocation();

  // console.log(location);

  const [ingresar, setIngresar] = useState(false);

  const ingreso = () => {
    ingresar ? setIngresar(false) : setIngresar(true);
  };

  if (location.pathname === "/") {
    return (
      <div className={styles.contenedor} style={{ overflow: "auto" }}>
        <h1 className="animate__animated animate__pulse animate__infinite">
          The Rick and Morty APP
        </h1>

        <button
          className={styles.contenedorButton}
          type="button"
          onClick={ingreso}
        >
          <p>
            LOGIN <img width={20} src={gif} alt="gif" />{" "}
          </p>
        </button>

        {ingresar && (
          <div className="animate__animated animate__bounceInDown">
            <Routes>
              <Route path="/" element={<Forms login={login} />} />
            </Routes>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.contenedor}>
        <Nav onSearch={onSearch} logout={logout} />

        <Routes>
          <Route
            path="/home"
            element={
              <div className={styles.containerCards}>
                <Cards characters={character} onClose={onClose} />
              </div>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}

export default App;
