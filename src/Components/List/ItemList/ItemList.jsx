import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from "react-bootstrap";
import style from "./ItemList.module.css"

const ItemList = ({ items }) => {
    return (
        <Container
            fluid
            className={style.contCard}
        >
            {items.map((e) =>
                <Row className={style.rowCard} key={e.id} >
                    <img className={style.imgCard} src={e.img} />
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                        {`$${e.price}`}
                    </Card.Text>
                    <Link to={`/item/${e.id}`}>
                        <Button className={style.btn}>Ver detalle</Button>
                    </Link>
                </Row>
            )}
        </Container>
    )
}

export default ItemList