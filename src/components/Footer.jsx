import React from "react"
import { Container } from "react-bootstrap";
import "./Footer.css"
import medios from "../assets/medios.png";


function Footer (){
    return (

        <>
        <div className="info">

        <div className="redes">
                <br />
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
        </div>

        <div className="contacto">
                <br />
                <p>arizonashopp@gmail.com</p>
        </div>

        <div className="pagos">
            <img className="pago" src={medios} />
        </div>

        </div>
        </>
    );
};

export default Footer;