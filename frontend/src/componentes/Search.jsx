import React, { useEffect, useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import styles from '../hojas_css/search.module.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../firebaseconfig/config';

const Search = ({openSearch, cerrarSearch}) => {


    const [listaProductosBuscador,setListaProductosBuscador] = useState([]);
    const [escritoEnBuscador,setEscritoEnBuscador] = useState('');
    const handleEscritoEnBuscador = (e) => {
        const respuesta = e.target.value;
        setEscritoEnBuscador(respuesta);
    }
    useEffect(() => {
        const referenciaProductos = collection(database,'PRODUCTOS');
        const filtradoCoincidencias = query(referenciaProductos,where('titulo','==',escritoEnBuscador));
        getDocs(filtradoCoincidencias)
        .then((response) => {
            setListaProductosBuscador(
                response.docs.map((documento) => {
                    return {...documento.data(),id:documento.id}
                })
            )
        });
        console.log(listaProductosBuscador);

    },[escritoEnBuscador]);

    const handleBuscarProductos = (e) => {
        e.preventDefault();
        console.log(escritoEnBuscador);
        console.log(listaProductosBuscador);
 }



  return (
    <div>
        {
            openSearch && (
                <form className={styles.searchFormContainer} onSubmit={handleBuscarProductos}>
                    <BsArrowReturnLeft onClick={cerrarSearch} />
                    <input onChange={handleEscritoEnBuscador} type='text' placeholder='Buscar productos' />
                    <button type='submit'>Buscar</button>
                
                </form>
            )
        }
    </div>
  )
}

export default Search