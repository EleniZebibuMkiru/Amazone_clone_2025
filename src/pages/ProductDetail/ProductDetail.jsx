import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/LayOut";
import axios from "axios";
import Loader from "../../components/Loder/loder";
import classes from "./ProductDetail.module.css";

function ProductDetail() {
  const { productId } = useParams(); // ✅ MATCHES ROUTE
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  if (loading) return <Loader />;

  if (!product) {
    return (
      <Layout>
        <p style={{ textAlign: "center" }}>Product not found</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={classes.container}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p className={classes.description}>
          {product.description || "No description available"}
        </p>
        <h3>${product.price}</h3>
      </div>
    </Layout>
  );
}

export default ProductDetail;
