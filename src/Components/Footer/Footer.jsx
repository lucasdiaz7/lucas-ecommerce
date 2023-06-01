import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <Container fluid className={style.footgral}>
            <Row>
                <Col>
                    <h3 style={{ fontSize: "15px" }}>Santiago del Estero, Argentina</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <a href="https://www.linkedin.com/in/lucas-d%C3%ADaz-developer/" className={style.link} target="_blank"><BsLinkedin /></a>
                </Col>
                <Col xs={4} >
                    <a href="https://github.com/lucasdiaz7" className={style.link} target="_blank" ><BsGithub /></a>
                </Col>
                <Col xs={4}>
                    <a href="mailto:lucasdiaz687@gmail.com" className={style.link} target="_blank"> <AiOutlineMail /></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer