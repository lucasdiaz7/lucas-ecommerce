import React, { useEffect, useState } from "react";
import style from './ItemCount.module.css'
import { MdAdd, MdRemove } from 'react-icons/md'

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [contador, setContador] = useState(initial);

    useEffect(() => {
        setContador(initial)
    }, [initial])

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };


    return (
        <div className={style.CountGral} >
            <div className={style.count} >
                <span>Cantidad: </span>
                <button className={style.btn} onClick={restar}><MdRemove /></button>
                <span className={style.span} >{contador}</span>
                <button className={style.btn} onClick={sumar}><MdAdd /></button>
            </div>
            {
                window.location.pathname === "/cart" ? null :
                    <button className={style.btnCarrito} onClick={() => onAdd(contador)}>Agregar al carrito</button>
            }
        </div>
    )
}

export default ItemCount