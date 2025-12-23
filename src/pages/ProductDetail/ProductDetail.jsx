import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/LayOut';
import classes from './ProductDetail.module.css';  
import { useParams } from 'react-router-dom';
import { productUrl } from '../../API/EndPoint';
import ProductCard from '../../components/product/ProductCard';
import axios from 'axios';

function ProductDetail() {
  const { ProductId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`${productUrl}/${ProductId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [ProductId]);

  return (
    <Layout>
      <div className={classes.container}>
        {product && product.id ? (
          <ProductCard product={product} />
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </Layout>
  );
}

export default ProductDetail;
