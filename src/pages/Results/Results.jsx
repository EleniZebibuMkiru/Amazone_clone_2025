import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/LayOut";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { productUrl } from "../../API/EndPoint";
import ProductCard from "../../components/product/ProductCard";
import classes from "./Results.module.css";
import Loader from "../../components/Loder/loder"; // ✅ use imported Loader

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);  

  useEffect(() => {
    setIsLoading(true); // start loading
    Axios.get(`${productUrl}/category/${categoryName}`)
      .then((res) => {
        console.log("API DATA:", res.data);
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p style={{ padding: "30px" }}>No products found</p>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
