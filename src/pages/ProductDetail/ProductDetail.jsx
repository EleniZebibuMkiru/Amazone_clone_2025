import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type"; // ✅ IMPORT ACTION TYPE
import Layout from "../../components/Layout/LayOut";
import axios from "axios";
import Loader from "../../components/Loder/loder";
import classes from "./ProductDetail.module.css";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ CONNECT TO GLOBAL STATE
  const [{ basket }, dispatch] = useContext(DataContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  // ✅ FIXED ADD TO CART HANDLER
  const addToCartHandler = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
        rating: product.rating?.rate,
      },
    });
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <div className={classes.container}>
        <img src={product.image} alt={product.title} />

        <div className={classes.info_section}>
          <h2>{product.title}</h2>
          <p className={classes.description}>{product.description}</p>
          <h3 className={classes.price}>${product.price}</h3>

          {/* ✅ WORKING BUTTON */}
          <button
            className={classes.add_button}
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;
