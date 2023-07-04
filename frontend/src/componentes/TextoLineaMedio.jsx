import React from 'react';
import styles from '../hojas_css/textoLineaMedio.module.css';


const TextoLineaMedio = ({ texto }) => {
    return (
        //Luego para usarlo en un componente y elegir lo que tiene que decir : <TextoConRayas texto = "Seguinos" />
      <div className={styles.textoConRayas}>
        <span className={styles.raya}></span>
        <span className={styles.contenido}>{texto}</span>
        <span className={styles.raya}></span>
      </div>
    );
  };

export default TextoLineaMedio;