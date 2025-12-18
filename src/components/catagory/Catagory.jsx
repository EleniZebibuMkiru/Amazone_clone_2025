import React from "react";
import { categoryInfos } from "./Catagoryfullinfo";
import CategoryCard from "./Catagorycard";
import styles from "./catagory.module.css";


function Category() {
  return (
    <section className={styles.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
