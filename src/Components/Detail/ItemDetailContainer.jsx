import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import ScaleLoader from "react-spinners/ScaleLoader";
import Swal from "sweetalert2";
import ItemDetail from "./ItemDetail";

const override = {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "250px",
};

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { agregarAlCarrito, getQuantity } = useContext(CartContext);
    const [productDetail, setProductDetail] = useState([]);
    let [color, setColor] = useState("#dd137bs");

    useEffect(() => {
        const itemCollection = collection(db, "products");
        const ref = doc(itemCollection, id);
        getDoc(ref).then((res) => {
            setProductDetail({
                ...res.data(),
                id: res.id,
            });
        });
    }, [id]);


    const onAdd = (element) => {
        if (productDetail.stock >= element) {
            let producto = {
                ...productDetail,
                quantity: element
            };
            setProductDetail(producto)
            agregarAlCarrito(producto);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })

        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Producto sin stock',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }


    const listQuantity = getQuantity(id)
    // console.log('listQuantity :>> ', listQuantity);


    return (
        <div>
            {productDetail.length !== 0 ?
                <ItemDetail listQuantity={listQuantity} productDetail={productDetail} onAdd={onAdd} /> :
                <ScaleLoader
                    color={color}
                    height={50}
                    radius={4}
                    width={9}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            }
        </div>
    )
}

export default ItemDetailContainer