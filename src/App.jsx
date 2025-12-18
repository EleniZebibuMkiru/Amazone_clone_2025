import { BrowserRouter } from "react-router-dom";
import Header from "./components/headers/Header";
import Carousel from "./components/Carousel/CarouselEffect";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Carousel />
    </BrowserRouter>
  );
}

export default App;
