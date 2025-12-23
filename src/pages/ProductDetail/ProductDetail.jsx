import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/LayOut';
import classes from './ProductDetail.module.css';  
import { useParams } from 'react-router-dom';
import { productUrl } from '../../API/EndPoint';
import ProductCard from '../../components/product/ProductCard';
import axios from 'axios';
import Loader from '../../components/Loder/loder';

function ProductDetail() {
  const { ProductId } = useParams();
  const [product, setProduct] = useState(null); // start with null
  const [isLoading, setIsLoading] = useState(true); // loading initially

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/${ProductId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); // finished loading
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setIsLoading(false);
      });
  }, [ProductId]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : product ? (
        <ProductCard product={product} />
      ) : (
        <p style={{ padding: "30px" }}>Product not found</p>
      )}
    </Layout>
  );
}

export default ProductDetail;
