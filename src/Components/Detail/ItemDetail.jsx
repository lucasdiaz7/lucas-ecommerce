import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import style from "./ItemDetail.module.css"

const ItemDetail = ({ listQuantity, productDetail, onAdd }) => {
    return (
        <Container style={{ width: "90%" }} fluid>
            <Row className={style.row} >
                <div className={style.h5}>
                    <h5>{productDetail.name}</h5>
                </div>
                <div>
                    <img className={style.imgDetail} src={productDetail.img} />
                </div>
            </Row>
            <Row className={style.row2} >
                <Card.Text className={style.text} >
                    {productDetail.description}
                </Card.Text>
            </Row>
            <Row className={style.row3} >
                <ItemCount stock={productDetail.stock} onAdd={onAdd} initial={listQuantity} />
                <Card.Text className={style.price} >
                    Precio:  $ {productDetail.price}
                </Card.Text>
            </Row>



        </Container>
    )
}

export default ItemDetail