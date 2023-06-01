import { useFormik } from 'formik';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { db } from "../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import style from "./FormCart.module.css"
import { Container } from 'react-bootstrap';

const FormCart = ({ cart, priceTotal, setOrderId, setForm }) => {
    const [user, setUser] = useState({ name: "", apellido: "", telefono: "", email: "" });
    let total = priceTotal()
    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            telefono: ""
        },
        onSubmit: values => {
            let order = {
                buyer: user,
                items: cart,
                total
            }
            const orderCollection = collection(db, "order")
            addDoc(orderCollection, order)
                // .then(res=> values(res.id))
                .then(res => setOrderId(res.id))
                .catch(err => console.log(err))

            cart.map((prod) => {
                let refDoc = doc(db, "products", prod.id)
                updateDoc(refDoc, { stock: prod.stock - prod.quantity })
            })
        },
        validate: values => {
            let errores = {}
            const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
            if (!values.nombre) {
                errores.nombre = "Este campo es obligatorio"
            }
            if (!values.apellido) {
                errores.apellido = "Apellido es requerido"
            }
            if (!validEmail.test(values.email)) {
                errores.email = "Ingresa un formato correcto"
            }
            if (!values.email) {
                errores.email = "Email es requerido"
            }
            if (!values.telefono) {
                errores.telefono = "Telefono es requerido"
            }
            if (values.telefono < 0) {
                errores.telefono = "Telefono debe ser correcto"
            }

            return errores
        }
    })

    const { values, handleChange, handleSubmit, errors } = formik

    return (
        <Container className={style.form}  >
            <Form onSubmit={handleSubmit}>
                <Row className="m-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            // placeholder="Nombre"
                            name="nombre"
                            onChange={handleChange}
                            value={values.nombre}
                            error={errors.nombre ? `${errors.nombre}` : null}
                            helpertext={errors.nombre ? `${errors.nombre}` : null}
                        />
                    </Form.Group>
                    <Form.Group as={Col} xs="12" md="12" size="sm" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            // placeholder="Nombre"
                            name="apellido"
                            onChange={handleChange}
                            value={values.apellido}
                            error={errors.apellido ? `${errors.apellido}` : null}
                            helpertext={errors.apellido ? `${errors.apellido}` : null}
                        />
                    </Form.Group>
                    <Form.Group md="12" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            // placeholder="Nombre"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            error={errors.email ? `${errors.email}` : null}
                            helpertext={errors.email ? `${errors.email}` : null}
                        />
                    </Form.Group>
                    <Form.Group md="12" controlId="validationCustom04">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            name="telefono"
                            onChange={handleChange}
                            value={values.telefono}
                            error={errors.telefono ? `${errors.telefono}` : null}
                            helpertext={errors.telefono ? `${errors.telefono}` : null}
                        />
                    </Form.Group>
                </Row>
                <Row className="m-4" xs={1} md={6}>
                    <Button className="m-1" variant='outline-danger' onClick={() => setForm(false)}>Cancelar</Button>
                    < Button className="m-1" variant='outline-success' type='submit'>
                        Comprar
                    </Button>
                </Row>
            </Form>
        </Container>
    )
}

export default FormCart