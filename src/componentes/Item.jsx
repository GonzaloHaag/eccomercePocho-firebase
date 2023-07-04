import { Link } from "react-router-dom";
import styles from '../hojas_css/item.module.css';


const Item = ({producto}) => {
  return ( //informacion de cada uno de los productos
    <div className={styles.producto}>
    <Link to= {`/item/${producto.id}`} >
    <img src={producto.imagen} alt={producto.titulo}/>
    </Link>
    

    <div className={styles.itemDetalles}>
        <h4>{producto.titulo}</h4>
        <p className={styles.itemDetallesPrecio}>Precio: ${producto.precio}</p>
        <p className={styles.itemDetallesDescription}>{producto.descripcion}</p>
    </div>
        

    </div>
  )
}

export default Item