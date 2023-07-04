import React, { useContext, useState } from 'react';
import styles from '../hojas_css/cartWidget.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';
import Carrito from '../componentes/Carrito';

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

    const [openCarrito,setOpenCarrito] = useState(false);
    const handleOpenCarrito = () => {
      setOpenCarrito(!openCarrito);
    }
    const handleCerrarCart = () => {
      setOpenCarrito(false);
    }
   
   
  return (
    <>
    <li className={styles.navbarLi} onClick={handleOpenCarrito}>
         <AiOutlineShoppingCart className={styles.navbarIcon} />
         CARRITO
        <span className={styles.cantidadEnCarrito}>{cantidadEnCarrito()}</span>
   </li>
    <Carrito openCarrito={openCarrito} handleCerrarCart = {handleCerrarCart} />
    </>
  )
}

export default CartWidget