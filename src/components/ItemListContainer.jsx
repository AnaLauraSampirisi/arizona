
import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { Container } from "react-bootstrap";
import { collection, doc, where, query, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() =>{
    const db = getFirestore()

    const getData = async () => {
      const itemCollection = !id ? collection(db, "vestidos") : query(collection(db, "vestidos"),
        where("categoria", "==", id));
      const response = await getDocs(itemCollection);

      const productos = response.docs.map((doc) => {
        const newProduct = { ...doc.data(), id: doc.id };

        return newProduct;
      });
      setProducts(productos);
    };

    getData();
  }, [id])

  return (
    <>
    <div className='saludo'>{greeting}</div>

    {(window.location.pathname === "/") &&

    <Container className='caro'>
      <div class="row justify-content-center">
      <div class="col-sm-8">
      <Carousel>
        <Carousel.Item>
          <img 
          className='d-block w-100'
          src={banner1} 
          alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img 
          className='d-block w-100'
          src={banner2} 
          alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img 
          className='d-block w-100'
          src={banner3} 
          alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    </Container>}

    <h2 className='offer'>Productos</h2>

    <ItemList data={products} />
    </>
  );
};

export default ItemListContainer;