import React from 'react';
import styles from '../hojas_css/newsletter.module.css';
import {useForm} from 'react-hook-form';
import TextoLineaMedio from './TextoLineaMedio';
import { addDoc, collection } from 'firebase/firestore';
import { database } from '../firebaseconfig/config';
const Newsletter = () => {
    
    const {register,handleSubmit,reset} = useForm();

    const registrarse = (data) => {
        const usuarioRegistrado = {
            usuario : data
        }
        
        const referenciaUsuario = collection(database,'Suscripciones');
        addDoc(referenciaUsuario,usuarioRegistrado);
        reset(); //Para resetear formulario
        
    }
  return (
    <>
    <section className={styles.newsletterText}>
    <TextoLineaMedio texto={'NUESTRO NEWSLETTER'} />
    <p>Inscribite para recibir nuestras últimas novedades.</p>
    </section>
    <form className={styles.formNewsletter} onSubmit={handleSubmit(registrarse)}>
        <input type='text' placeholder='Nombre' {...register("nombre")} required />
        <input type = 'email' placeholder='Tú E-mail' {...register('email')} required />
        <button type='submit' className={styles.newsletterRegistro}>INSCRIBIRSE</button>
  </form>
    </>
  )
}

export default Newsletter