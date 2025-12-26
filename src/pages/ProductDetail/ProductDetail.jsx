import React, { useEffect, useState, useContext } from "react"; // 1. Import useContext
import { useParams } from "react-router-dom";
import { DataContext } from "../../components/DataProvider/DataProvider"; // 2. Import your Context
import Layout from "../../components/Layout/LayOut";
import axios from "axios";
import Loader from "../../components/Loder/loder";
import classes from "./ProductDetail.module.css";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3. Connect to your Global State
  const [state, dispatch] = useContext(DataContext); 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  // 4. Update the function to actually send data
  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
      },
    });
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <div className={classes.container}>
        <img src={product?.image} alt={product?.title} />
        <div className={classes.info_section}>
          <h2>{product?.title}</h2>
          <p className={classes.description}>{product?.description}</p>
          <h3 className={classes.price}>${product?.price}</h3>
          
          {/* This now triggers the dispatch logic */}
          <button className={classes.add_button} onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;