import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import styles from '../hojas_css/search.module.css';

const Search = ({openSearch, cerrarSearch}) => {

 


    

    const handleBuscarProductos = (e) => {
        // console.log(e.target.value);
    }
  return (
    <div>
        {
            openSearch && (
                <form className={styles.searchFormContainer}>
                    <BsArrowReturnLeft onClick={cerrarSearch} />
                    <input onChange={handleBuscarProductos} type='text' placeholder='Buscar productos' />
                
                </form>
            )
        }
    </div>
  )
}

export default Search