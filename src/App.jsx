import { BrowserRouter } from "react-router-dom";
import Header from "./components/headers/Header";
import Carousel from "./components/Carousel/CarouselEffect";
import Category from "./components/category/Category";
import Product from "./components/product/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
      <Category />   {/* Category section */}
      <Product />    {/* Products section */}
    </BrowserRouter>
  );
}

export default App;
