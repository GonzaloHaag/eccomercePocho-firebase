import { React } from "react";
import styles from "../hojas_css/home.module.css";

import TextoLineaMedio from './TextoLineaMedio';

import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from "./CarouselHome";
import ItemListContainer from "./ItemListContainer";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
        <CarouselHome />

      <div className={styles.homeCenter}>
        <h1>{<TextoLineaMedio texto={'PRODUCTOS DESTACADOS'} />}</h1>
        <ItemListContainer />
        <div className={styles.buttonVerTodosContainer}>
        <button className={styles.verTodos} onClick={() => navigate ('/productos')} >VER TODOS LOS PRODUCTOS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
