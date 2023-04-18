import React from "react"
import Card from "react-bootstrap/Card";
import "./Item.css";
import {Link} from "react-router-dom";


const Item = ({id,nombre,precio,categoria,foto}) => {
    return (
    <Card className="cards" style={{ width: '18rem'}}>
        <Card.Body>
            <h3>{nombre}</h3>
            <Card.Img variante="top" src={foto} />
            <Card.Text>
                Precio: $ {precio} <br></br>
                Categoria: {categoria} <br></br>
            </Card.Text>
            <Link className='buy' to={`/item/${id}`}>Detalle</Link>
        </Card.Body>
    </Card>
    );
};

export default Item;

