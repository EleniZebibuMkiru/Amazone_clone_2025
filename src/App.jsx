import { BrowserRouter } from "react-router-dom";
import Header from "./components/headers/Header";
import Carousel from "./components/Carousel/CarouselEffect";
import Catagory from "./components/catagory/Catagory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
      <Catagory />
    </BrowserRouter>
  );
}

export default App;
