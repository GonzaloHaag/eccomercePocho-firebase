import React, { useEffect, useState } from 'react';
import styles from '../hojas_css/header.module.css';
import {AiOutlineMenu,AiOutlineCloseCircle} from 'react-icons/ai';
import {BiSearchAlt2} from 'react-icons/bi';

import NavbarMobile from './NavbarMobile';
import { Link, useLocation } from 'react-router-dom';

import logo from "../images/Logo.jpg";
import Search from './Search';

const Header = () => {

  const [openMenuHeader,setOpenMenuHeader] = useState(false);
  const [openSearch,setOpenSearch] = useState(false);
  
  const handleOpenMenuHeader = () => {

    setOpenMenuHeader(!openMenuHeader);

  }

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  }
  const cerrarSearch = () => {
    setOpenSearch(false);
  }

  
  const [titulo,setTitulo] = useState('INICIO');
  const location = useLocation();
  const url = location.pathname;


  useEffect(() => {
    switch(url) {
      case '/productos' :
        setTitulo('PRODUCTOS');
        break;
        
      case  '/productos/mates' :
        setTitulo('MATES');
        break;
      case '/productos/mates-pampa' : 
      setTitulo('MATES PAMPA');
      break;
      case '/productos/mates-imperial' : 
      setTitulo('MATES IMPERIALES');
      break;
      default : 
      setTitulo('INICIO')

    }
    

  },[url])
  return (
  <header className={styles.headerContainer}>
    <div className={styles.headerTop}>
      <div className={styles.headerLeft}>
     
        <AiOutlineMenu className={styles.headerIcon} onClick={handleOpenMenuHeader} />

      
      <div className={`${styles.menuHeader} ${openMenuHeader ? styles.transform : ''}`}>
        <AiOutlineCloseCircle className={styles.closeMenuHeader} onClick={() => setOpenMenuHeader(false)} />
        <Link to= '/quienes-somos' className={styles.menuHeaderLink}>
          QUIENÉS SOMOS
        </Link>
        <Link to= '/contacto' className={styles.menuHeaderLink}>
          CONTACTO
        </Link>
        <Link to= '/ventas-por-mayor' className={styles.menuHeaderLink}>
          VENTAS POR MAYOR
        </Link>
      </div>
      <span>{titulo}</span>
      </div>
      <BiSearchAlt2 className={styles.headerIcon} onClick={handleOpenSearch} />
      {/* <Search openSearch = {openSearch} cerrarSearch = {cerrarSearch} /> */}
      {
        openSearch && <Search openSearch = {openSearch} cerrarSearch={cerrarSearch} />
      }
    </div>
    <NavbarMobile />
    <img className={styles.logo} src={logo} alt="logo-pagina" />
    

  </header>
  )
}

export default Header