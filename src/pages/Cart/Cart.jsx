import React from 'react';
import LayOut from '../../components/Layout/LayOut';
import ProductCard from '../../components/product/ProductCard';
import { DataContext } from '../../components/Dataprovider/Dataprovider';

function Cart() {
  const [state, dispatch] = React.useContext(DataContext);
  const { basket } = state;

  return (
    <LayOut>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket.length === 0 ? (
            <p>Oops! No item in your Cart</p>
          ) : (
            basket.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                renderDesc={true}
                flex={true}
              />
            ))
          )}
        </div>
        <div></div>
      </section>
    </LayOut>
  );
}

export default Cart;
