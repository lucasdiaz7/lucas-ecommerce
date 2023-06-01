import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import style from "./ItemDetail.module.css"

const ItemDetail = ({ listQuantity, productDetail, onAdd }) => {
    return (
        <Container className={style.detailCont} fluid>
            <Row className={style.row} >
                <Col xs={12} md={6} className={style.h5}>
                    <h5>{productDetail.name}</h5>
                </Col>
                <Col xs={12} md={6}>
                    <img className={style.imgDetail} src={productDetail.img} />
                </Col>
            </Row>
            <Row >
                <Card.Text >
                    {productDetail.description}
                </Card.Text>
            </Row>
            <Row className={style.row3} >
                <Col xs={12} md={6}>
                    <ItemCount stock={productDetail.stock} onAdd={onAdd} initial={listQuantity} />
                </Col>
                <Col className={style.price} xs={12} md={6}>
                    Precio:  $ {productDetail.price}
                </Col>
            </Row>



        </Container>
    )
}

export default ItemDetail