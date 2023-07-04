import Item from "./Item";
import styles from '../hojas_css/itemList.module.css';


const ItemList = ({productos}) => {
  return (
    <div className={styles.itemList}>
      {/*Con la funcion toMayuscula convierto la primer letra del titulo a mayuscula*/}
       {/*Para que vaya cambiando segun la categoria donde estemos*/}
       <div className={styles.productosContainer}> {/*Aca va el display grid*/}
        {productos.map((producto)=>(
            <Item producto={producto} key={producto.id}/> //Cada item va a recibir este producto
        ))}
       </div>

    </div>
  )
}

export default ItemList