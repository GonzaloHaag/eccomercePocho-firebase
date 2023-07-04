import React from 'react';
import styles from '../hojas_css/itemCount.module.css';

const ItemCount = ({handleSumarCantidad,handleRestarCantidad,cantidad,handleAgregar}) => {
  return (
    <div className={styles.itemCountContainer}>
      <div className={styles.itemCount}>
      <button className={styles.buttonCount} onClick={handleRestarCantidad}>-</button>
      <p className={styles.cantidad}>{cantidad}</p>
      <button className={styles.buttonCount} onClick={handleSumarCantidad}>+</button>
      </div>
      <button className={styles.addToCart} onClick={handleAgregar}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount