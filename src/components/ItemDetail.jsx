import React from "react"
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContexto } from "../context/CartContext";


const ItemDetail = ({producto}) => {
    const {nombre,precio,stock,categoria,foto} = producto;

    const {addItem}=useContext(CartContexto)
    
    const onAdd = (cantidad) => {
        addItem(producto, cantidad)
    }

    return (
        <Card className="cards" style={{ width: '18rem' }}>
            <Card.Body>
                <h3>{nombre}</h3>
                <Card.Img variant="top" src={foto} />
                <Card.Text>
                    Precio: $ {precio} <br></br>
                    stock: {stock} <br></br>
                    categoria: {categoria} <br></br>
                </Card.Text>
                <ItemCount stock={stock} onAdd={onAdd} />
            </Card.Body>
        </Card>
    );
};

export default ItemDetail;
