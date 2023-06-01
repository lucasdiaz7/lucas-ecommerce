
import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import style from "./Cart.module.css"
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import FormCart from '../Form/FormCart';

const Cart = () => {
    const { cart, priceTotal, deletProduct, limpiarCarro, getQuantity } = useContext(CartContext);
    const priceTot = priceTotal()
    const [form, setForm] = useState(false)
    const [orderId, setOrderId] = useState(null)


    const eliminar = (item) => {

        Swal.fire({
            title: 'Estas seguro que deseas eliminar el producto del carrito?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Borrar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Se eliminó correctamente el producto del carrito', '', 'success')
                deletProduct(item.id)
            }
        })
    }

    if (orderId) {
        return (
            <div className={style.comprobante}>
                <h1>Gracias por su compra</h1>
                <h4>Su numero de comprobante es: {orderId}</h4>
                <Link to="/">
                    <button className={style.btnCompr} onClick={limpiarCarro}>Seguir comprando</button>
                </Link>
            </div>
        )
    }


    return (
        <div>
            {!form ? (
                <div>
                    {
                        cart.length == 0 ?
                            <div className={style.vac}>
                                <img src="https://res.cloudinary.com/dmgvv9nbt/image/upload/v1680647596/curso-react/cart/external-shopping-cart-black-friday-5-sbts2018-outline-color-sbts2018_j5e5jg.png" alt="Cart" />
                                {/* <ShoppingCartIcon sx={{size: "100px"}} /> */}
                                <h4 style={{ marginTop: "10px" }} >Su carrito esta vacio</h4>
                                <Link to={"/"}>
                                    <Button className={style.btnProducts}>Ver Productos</Button>
                                </Link>
                            </div> :
                            <Container className={style.divCartView}>
                                <Row>
                                    <Col xs="12" >
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Producto</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Precio</th>
                                                    <th scope="col">Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map((item) => {
                                                    return (
                                                        <tr key={item.id}>

                                                            <td>
                                                                <Link to={`/item/${item.id}`} className={style.link}>
                                                                    {item.name}
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                <p style={{ marginLeft: "30px" }} >
                                                                    {item.quantity}
                                                                </p>
                                                            </td>
                                                            <td>${item.price}</td>
                                                            <td>
                                                                <button style={{ background: "none", border: "none" }} size="sm" onClick={() => eliminar(item)}>
                                                                    <AiFillDelete style={{ width: '25px', height: '25px', marginLeft: "15px", color: "red" }} />
                                                                    {/* <img style={{ width: '25px', height: '25px', marginLeft: "15px" }} src='/delete.png' alt='trash icon' /> */}
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                                <Row xs="12" className='m-2' >
                                    ${priceTot}
                                </Row>
                                <Row md={"6"} className='m-1' >
                                    <Link style={{ textDecoration: "none", padding: 0 }} to="/">
                                        <Row xs="1" md="6" className='m-1 p-0'>
                                            <Button className={style.btn} variant="outline-danger" >
                                                Volver
                                            </Button>
                                        </Row>
                                    </Link>
                                    <Row xs="1" md="6" className='m-1 p-0'   >
                                        <Button className={style.btn} variant="outline-success" onClick={() => setForm(true)}>
                                            Continuar
                                        </Button>
                                    </Row>
                                </Row>
                            </Container>

                    }
                </div>
            ) : (
                <FormCart cart={cart} priceTotal={priceTotal} setOrderId={setOrderId} setForm={setForm} />
            )}
        </div>
    )
}

export default Cart