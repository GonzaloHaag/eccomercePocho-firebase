import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { database } from '../firebaseconfig/config';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

import styles from '../hojas_css/itemDetailContainer.module.css';

const ItemDetailContainer = () => {
  
  const [item,setItem] = useState(null); //Para saber si existe un item con ese id
  const id = useParams().id;
  const [loading,setLoading] = useState(true);
  // console.log(id);

  useEffect(() => {
    const referenciaDocumento = doc(database,'PRODUCTOS',id);

    getDoc(referenciaDocumento)
    .then((respuesta) => {
      setLoading(true);
      setItem(
        {...respuesta.data(),id:respuesta.id}
      );
      setLoading(false);
    })
    window.scrollTo(0,0);

  },[id]);

  return (
    <div>
      {
        loading && <div className={styles.loaderContainer}> <Loader /> </div>
        
      }
    {item && <ItemDetail item ={item} />} 
    {/*
    Si existe ese item se lo mando a itemDetail, sino no
    */}
    </div>
  )
}

export default ItemDetailContainer