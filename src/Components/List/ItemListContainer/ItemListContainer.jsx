
import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import ScaleLoader from "react-spinners/ScaleLoader";
import ItemList from '../ItemList/ItemList';

const override = {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "250px",
    marginBottom: "29vh"
};

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    let [color, setColor] = useState("#dd137b");

    useEffect(() => {
        // const itemCollection = collection(db, "products");
        // let consulta = undefined;
        if (id) {
            const itemCollection = collection(db, "products");
            const q = query(itemCollection, where("category", "==", id));
            getDocs(q)
                .then((res) => {
                    let products = res.docs.map((product) => {
                        return {
                            ...product.data(),
                            id: product.id
                        }
                    })
                    setItems(products)
                })
        } else {
            const itemCollection = collection(db, "products")
            getDocs(itemCollection)
                .then((res) => {
                    let products = res.docs.map((product) => {

                        return {
                            ...product.data(),
                            id: product.id
                        }
                    })
                    setItems(products)
                })
        }

        // consulta.then((res) => {
        //   let products = res.docs.map((prod) => {
        //     return {
        //       ...prod.data(),
        //       id: prod.id}
        //   });
        //   setItems(products);
        //   console.log('products :>> ', products);
        // });
    }, [id]);


    return (
        <div>
            {
                items.length > 0 ?
                    <ItemList items={items} />
                    :
                    <ScaleLoader
                        color={color}
                        height={50}
                        radius={4}
                        width={9}
                        cssOverride={override}
                        size={250}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />}
        </div>
    )
}

export default ItemListContainer