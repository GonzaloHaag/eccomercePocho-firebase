//CONTEXTO DEL CARRITO

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
   

    const nuevoCarrito = [...carrito];

    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );
    if (estaEnElCarrito) {
      //Si esto es true
      // console.log("Esta en el carrito")
      estaEnElCarrito.cantidad += cantidad; //Si el producto ya esta en el carrito, quiero aumentarle la cantidad , no volverlo a poner en el array
    } else {
      // console.log("No esta en el carrito");
      nuevoCarrito.push(itemAgregado);
      /*
   Si esta vacio traera solo el itemAgregado, y si tiene algo le agregara el item agregado, por eso me traigo el carrito
   */
    }
    setCarrito(nuevoCarrito); //Que se setee cuando ese if else termine
  };

  const cantidadEnCarrito = () => {
    //Para que el numerito muestre la cantidad de productos que hay en el carrito
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  //Funcion para el precio total del carrito :
  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  //Funcion para vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //Funcion para eliminar un item individual del carrito
  const handleEliminarProducto = (id) => {
    const filterCarrito = carrito.filter((prod) => prod.id !== id );

    setCarrito(filterCarrito); //Me quedo con los q no coinciden con ese id ya que si existe lo quiero eliminar
  }

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito)); //Guardara en carrito un JSON.stringfy del array de carrito
  }, [carrito]); //Aca le indicamos que el localStorage se actualice cada vez que carrito cambia

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
        handleEliminarProducto
      }}
    >
      {/*ENVOLVEMOS TODA NUESTRA APLICACION EN EL CONTEXTO DE CARTCONTEXT, con el provider*/}
      {/*En el value pasamos todas las funciones correspondientes al carrito*/}
      {children}{" "}
      {/*Estos children son los que estan encerrados por el CartProvider en app.jsx*/}
    </CartContext.Provider>
  );
};
