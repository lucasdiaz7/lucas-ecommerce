import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        let existe = isInCart(producto.id);
        if (existe) {
            let newCart = cart.map((e) => {
                if (e.id === producto.id) {
                    return {
                        ...e,
                        quantity: producto.quantity,
                    };
                } else {
                    return e;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, producto]);
        }
    };

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    };

    const getQuantity = (id) => {
        const productDetail = cart.find((e) => e.id === id)
        return productDetail?.quantity
    }

    const priceTotal = () => {
        let precioTot = cart.reduce((ac, elem) => {
            return ac + (elem.price * elem.quantity)
        }, 0)
        return precioTot
    }

    const deletProduct = (id) => {
        // console.log('item :>> ', item);
        const newCart = cart.filter((e) => e.id !== id)
        setCart(newCart)
    }

    const limpiarCarro = () => {
        setCart([])
    }

    let data = {
        cart,
        setCart,
        agregarAlCarrito,
        getQuantity,
        priceTotal,
        deletProduct,
        limpiarCarro
    };

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;