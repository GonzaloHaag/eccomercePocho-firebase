import React from 'react';
import styles from '../hojas_css/footer.module.css';
import TextoLineaMedio from './TextoLineaMedio';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';
import {MdEmail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
import {FaMapMarkerAlt} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSeguinos}>
        <TextoLineaMedio texto={'SEGUINOS'} />
        <section className={styles.footerInstagramContainer}>
          <Link className={styles.footerLinkInstagram} to='https://www.instagram.com/elpocho.mates/' target='_blank'>
            <BsInstagram className={styles.logoInstagram} />
          </Link>
        </section>
        <hr />
      </div>
      <div className={styles.footerNewsletter}>
        <Newsletter />
      </div>
      <hr />
      <section className={styles.footerBottomContainer + 'claseAdicional'}>
        <nav className={styles.footerBottom}>
          <h6>NAVEGACÍON</h6>
          <ul className={styles.footerUlNavegacion}>
            <li><Link className={styles.footerBottomLink} to='/'>Inicio</Link></li>
            <li><Link className={styles.footerBottomLink} to='/productos'>Productos</Link></li>
            <li><Link className={styles.footerBottomLink} to='/contacto'>Contacto</Link></li>
            <li><Link className={styles.footerBottomLink} to='/quienes-somos'>Quiénes somos</Link></li>
            <li><Link className={styles.footerBottomLink} to='/ventas-por-mayor'>Ventas por mayor</Link></li>
          </ul>
        </nav>
        <div className={styles.footerBottom}>
          <h6>CONTACTANOS</h6>
          <ul className={styles.footerUlContactanos}>
          <li>
           <MdEmail />
           sofiperalta813@gmail.com
          </li>
          <li>
           <IoLogoWhatsapp />
           +54 9 3424485752
          </li>
          <li>
          <FaMapMarkerAlt />
           Argentina, Santa Fe.
          </li>
          </ul>
        </div>
      </section>

    </div>
  )
}

export default Footer