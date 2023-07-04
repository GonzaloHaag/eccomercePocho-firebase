import React, { useEffect, useState } from "react";
import styles from "../hojas_css/itemListContainer.module.css";
import { database } from "../firebaseconfig/config";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useLocation, useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const categoria = useParams().categoria; //para saber lo que viene en la url


  const location = useLocation();
  const url = location.pathname; //Me da la url donde estoy parado '/' o '/productos'

  useEffect(() => {
    const referenciaProductos = collection(database, "PRODUCTOS");
    const filtradoPorCategoria = categoria
      ? query(referenciaProductos, where("categoriaP", "==", categoria))
      : referenciaProductos;
    const filtradoPorCategoriaMates =
      categoria &&
      query(referenciaProductos, where("categoriaP", "==", "mates"));
    const filtradoPorCategoriaSecundaria =
      categoria &&
      query(referenciaProductos, where("categoriaS", "==", categoria));
    //CategoriaP porque es mi categoria principal --> Ver esto
    //CategoriaS es la categoria secundaria

    const primerosOcho = query(filtradoPorCategoria, limit(8)); //Si le hago un getDocs trae los primeros ocho

    if (url === "/") {
      getDocs(primerosOcho) //En la home quiero los primeros ocho
        .then((respuesta) => {
          setLoading(true);
          setProductos(
            respuesta.docs.map((documento) => {
              return { ...documento.data(), id: documento.id };
            })
          );

          setLoading(false);
        });
    } else if (
      url === "/productos" ||
      url === "/productos/combos" ||
      url === "/productos/accesorios"
    ) {
      getDocs(filtradoPorCategoria)
      .then((respuesta) => {
        setLoading(true);
        setProductos(
          respuesta.docs.map((documento) => {
            return { ...documento.data(), id: documento.id };
          })
        );
        setLoading(false);
      });
    } else if (url === "/productos/mates") {
      getDocs(filtradoPorCategoriaMates).then((respuesta) => {
        setLoading(true);
        setProductos(
          respuesta.docs.map((documento) => {
            return { ...documento.data(), id: documento.id };
          })
        );
        setLoading(false);
      });
    } else {
      getDocs(filtradoPorCategoriaSecundaria).then((respuesta) => {
        setLoading(true);
        setProductos(
          respuesta.docs.map((documento) => {
            return { ...documento.data(), id: documento.id };
          })
        );
        setLoading(false);
      });
    }
    window.scrollTo(0,0);
    setLoading(true); //Para que al cargar cada categoria aparezca el loader
  }, [categoria, url]);

 


  
  
  

  return (
    <div className={styles.productosListContainer}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : 
        
          <ItemList productos={productos} />
       }
    </div>
  );
};

export default ItemListContainer;
