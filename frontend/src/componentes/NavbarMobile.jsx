import React, { useState } from 'react';
import styles from '../hojas_css/navbarmobile.module.css';
import { Link } from 'react-router-dom';
import {AiFillHome, AiOutlineArrowRight, AiOutlineCloseCircle, AiOutlineArrowLeft} from 'react-icons/ai';
import {RxDropdownMenu} from 'react-icons/rx';
import CartWidget from './CartWidget';

const NavbarMobile = () => { //prop que manda header

  const [openMenuProductos,setOpenMenuProductos] = useState(false);
  const [openMenuMates,setOpenMenuMates] = useState(false);


  const handleOpenMenuProductos = () => {
    setOpenMenuProductos(!openMenuProductos);
  }
  const handleOpenMenuMates = () => {
    setOpenMenuMates(!openMenuMates);
  }
  const handleCerrarMenu = () => {
    /*PORQUE QUIERO QUE AL HACERLE CLICK A UN LINK
     EL MENU SE CIERRE
     */
    setOpenMenuProductos(false);
    setOpenMenuMates(false);
    }

  
  return (
    <div className={styles.navbarMobile}>

    <ul>
      <li className={styles.navbarLi}>
    <Link to='/' className={styles.linkNavbar}>
      <AiFillHome className={styles.navbarIcon} />
      INICIO
      </Link>
    </li>
    <li className={styles.navbarLi}>
     {/* <RxDropdownMenu className={styles.navbarIcon} onClick={handleOpenMenuProductos} />
      PRODUCTOS */}
      {
        openMenuProductos ? 
        <AiOutlineCloseCircle className={styles.navbarIcon} onClick={handleOpenMenuProductos} />
        
        :
        
          <RxDropdownMenu className={styles.navbarIcon} onClick={handleOpenMenuProductos} />
          }
       PRODUCTOS
      </li>
      
     <nav className={`${styles.navbarProductos} ${openMenuProductos ? styles.visible : ''}`}>
      {/*Si open menu es true agregale la clase visible a navbarProductos */}
      <ul>
        <li>
          <Link onClick={handleCerrarMenu} className={styles.categoriasProductos} to= '/productos'>
            VER TODOS LOS PRODUCTOS
          </Link>
        </li>
        <li className={styles.categoriasProductos}>
          MATES <AiOutlineArrowRight className={styles.openMenuMates} onClick={handleOpenMenuMates} />
          </li>
          <nav className={`${styles.menuCategoriasMates} ${openMenuMates ? styles.desplegarMates : ''}`} >
            <AiOutlineArrowLeft className={styles.closeMenuMates} onClick={() => setOpenMenuMates(!openMenuMates)} />
            <ul>
              <li>
                <Link onClick={handleCerrarMenu} className={styles.linkCategoriasMates} to= '/productos/mates'>
                  VER TODOS LOS MATES
                </Link>
              </li>
              <li>
                <Link onClick={handleCerrarMenu} className={styles.linkCategoriasMates} to= '/productos/mates-pampa'>
                  MATES PAMPA
                </Link>
              </li>
              <li>
                <Link onClick={handleCerrarMenu} className={styles.linkCategoriasMates} to= '/productos/mates-imperial'>
                  MATES IMPERIALES
                </Link>
              </li>
              <li>
                <Link onClick={handleCerrarMenu} className={styles.linkCategoriasMates} to= '/productos/mates-camionero'>
                  MATES CAMIONEROS
                </Link>
              </li>
              <li>
                <Link onClick={handleCerrarMenu} className={styles.linkCategoriasMates} to= '/productos/mates-torpedo'>
                  MATES TORPEDO
                </Link>
              </li>
            </ul>
          </nav>
        <li className={styles.categoriasProductos}>
          <Link onClick={handleCerrarMenu} className={styles.categoriasProductos} to='/productos/combos'> {/*Despues el use params capta esto*/}
          COMBOS
          </Link>
        </li>
        <li className={styles.categoriasProductos}>
          <Link onClick={handleCerrarMenu} className={styles.categoriasProductos} to='/productos/termos'> {/*Despues el use params capta esto*/}
          TERMOS
          </Link>
        </li>
        <li className={styles.categoriasProductos}>
          <Link onClick={handleCerrarMenu} className={styles.categoriasProductos} to='/productos/accesorios'>
          ACCESORIOS
          </Link>
        </li>
      </ul>
     </nav>
    <CartWidget />
    </ul>
   
  </div>
  )
}

export default NavbarMobile