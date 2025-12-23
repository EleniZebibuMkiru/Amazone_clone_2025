import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";

// Simple loader component
const Loader = () => (
  <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>
);

function Product() {
  const [isLoading, setIsLoading] = useState(true); // loading initially
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products.map((singleProduct) => (
            <ProductCard
              key={singleProduct.id}
              product={singleProduct}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
