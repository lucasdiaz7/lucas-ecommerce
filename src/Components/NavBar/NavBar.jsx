import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useContext } from 'react'
import CategoryContainer from '../Category/CategoryContainer';
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import style from "./NavBar.module.css"
import { CartContext } from '../../Context/CartContext';
import logo from "./logo.png"

export default function NavBar() {
  const { cart } = useContext(CartContext)
  const expand = "md"
  return (
    <>
      <Navbar key={expand} bg="light" expand={expand} className={`mb-3 ${style.navBar}`}>
        <Container style={{ height: "78px" }} className={style.cont} fluid>
          <Navbar.Toggle className={style.toggle} aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Link className={style.name} to="/"><img src={logo} alt="logo" /></Link>
          <Link to="/cart" className={style.cart} >
            {
              cart.length == 0 ? null :
                <span className={style.spanCart} >
                  {cart.length}
                </span>
            }
            <BsCart2 className={style.iconCart} />
          </Link>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Categorias
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <CategoryContainer />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
