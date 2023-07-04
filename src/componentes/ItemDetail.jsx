import React, { useContext, useState } from 'react';
import styles from '../hojas_css/itemDetail.module.css';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

  const [cantidad,setCantidad] = useState(1);
  const { agregarAlCarrito,} = useContext(CartContext);

  const handleRestarCantidad = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }
  const handleSumarCantidad = () => {
    setCantidad(cantidad + 1);
    //En caso de tener stock : 
    /*
    cantidad < item.stock && setCantidad(cantidad + 1);
    //PARA QUE SOLO ME DEJE AGREGAR HASTA 10 PRODUCTOS, PORQUE ESE ES MI STOCK
    */
  }
  return (
    <div className={styles.productoDetailContainer}>
        <img src={item.imagen} alt={item.titulo} />
        <div className={styles.productoDetailDetalles}>
            <h4>{item.titulo}</h4>
            <p>{item.descripcion}</p>
            <span>Precio: ${item.precio}</span>
            <ItemCount cantidad = {cantidad} handleSumarCantidad ={handleSumarCantidad} handleRestarCantidad = {handleRestarCantidad} handleAgregar = {()=>{agregarAlCarrito(item,cantidad)}}/>
        </div>
        
      
    </div>
  )
}

export default ItemDetail