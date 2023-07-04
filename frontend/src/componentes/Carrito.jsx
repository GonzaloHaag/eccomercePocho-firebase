import React, { useContext } from 'react';
import styles from '../hojas_css/carrito.module.css';
import { CartContext } from '../context/CartContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {BsFillTrash3Fill} from 'react-icons/bs';
import { Link } from 'react-router-dom';



const Carrito = ({openCarrito,handleCerrarCart}) => {
    //Recibo la prop que me manda cartWidget para saber que valor tiene
    //handleCerrarCart lo voy a usar en la cruz del carrito

    const {carrito, precioTotal , handleEliminarProducto } = useContext(CartContext);

    
  return (
   <div className= {`${styles.carritoContainer} ${openCarrito ? styles.desplegarCart : ''}`}>
   <AiOutlineCloseCircle className={styles.closeCart} onClick={handleCerrarCart}/>
        <h1 className={styles.h1Cart}>TÚ CARRITO</h1>
        {
            carrito.map((prod) => {
                return (
                <div className={styles.prodCarrito} key={prod.id}>
                    <BsFillTrash3Fill className={styles.removeProduct} onClick={() => handleEliminarProducto(prod.id)} />
                    <img src={prod.imagen} alt={prod.titulo} />
                   <div className={styles.cartDetalles}>
                    <h2>{prod.titulo}</h2>
                    <span>Cantidad: {prod.cantidad}</span>
                    </div>
                    <div className={styles.cartPriceProd}>
                    <h2>Precio</h2>
                    <p className={styles.cartProdPrecio}>${prod.cantidad * prod.precio}</p>
                    </div>
                    <hr />
                </div>
                
                )
            })
        }
        {
            carrito.length > 0 ? 
            <>
            <h2 className={styles.cartPriceTotal}>Precio total del carrito: <span>${precioTotal()}</span></h2>
            <div className={styles.divCartButtons}>
            <button onClick={handleCerrarCart}>
                <Link className={styles.cartLink} to= '/checkout'>
                FINALIZAR COMPRA
                </Link>
        
            </button>
            <button onClick={handleCerrarCart}>
                <Link className={styles.cartLink} to='/productos'>
                    SEGUIR COMPRANDO
                </Link>
            </button>
            </div>

            </>
            :
            <h2>El carrito está vacio</h2>

        }

    </div>
  )
}

export default Carrito