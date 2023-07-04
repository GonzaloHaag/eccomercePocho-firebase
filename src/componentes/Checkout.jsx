import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import styles from '../hojas_css/checkout.module.css';

import {useForm} from "react-hook-form"; //Libreria para manejar formularios

import {collection,addDoc} from 'firebase/firestore';
import { database } from '../firebaseconfig/config';
const Checkout = () => {
    const {carrito, precioTotal , vaciarCarrito} = useContext(CartContext);
    const {register,handleSubmit} = useForm(); //Lo traemos desde la libreria

    const [pedidoId,setPedidoId] = useState('');
    const comprar = (data) => {
        const pedido = { //Objeto
            cliente : data,
            // productos : carrito,
           productos : carrito.map((prod) => ({
            titulo: prod.titulo,
            cantidad: prod.cantidad,
            precio: prod.precio * prod.cantidad,

           })),
            total : precioTotal()
        }

        console.log(pedido);

        const referenciaPedido = collection(database,'Pedidos');
        addDoc(referenciaPedido, pedido)
        .then((doc) => {
            console.log(doc.id); //Id del pedido
            setPedidoId(doc.id);
            vaciarCarrito(); //Para vaciar el carrito luego de la compra
        })
    }

    if(pedidoId) {
        return ( //Corta el flujo del return de abajo, por lo tanto se mostrara en caso de haber un pedido ID
            <div className={styles.containerCompra}>
                <h4>Muchas gracias por tu compra! <br />En breve nos comunicaremos con usted.</h4>
                <p>Tú codigo de pedido es: <span>{pedidoId}</span></p>
            </div>

        )
    }
  return (
    <div className={styles.checkoutContainer}>
    <h4 className={styles.titleCheckout}>Finalizar Compra</h4>
    <form className={styles.formulario} onSubmit={handleSubmit(comprar)}> {/*Evento submit al enviar el formulario*/}
    {/*Pasamos un register a cada uno de los input, para que funcione la libreria*/}
       <input type='text' placeholder='Ingresa tu nombre' {...register("nombre")} required/>
       <input type='email' placeholder='Ingresa tu e-mail' {...register("email")} required/>
       <input type='phone' placeholder='Ingresa tu telefono'{...register("telefono")} required/>
       <button className={styles.buttonComprar} type='submit'>Comprar</button>
       <button onClick={async () => {
         const respuesta = await fetch('http://localhost:4000/create-order',{
            method : 'POST'
         });
         const data = await respuesta.json();
         console.log(data);
         window.location.href = data.init_point; //Para que me lleve al pago al darle click al boton
       }}>Pagar con mercado pago</button>
    </form>

</div>
  )
}

export default Checkout