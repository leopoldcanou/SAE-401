import "./App.css";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import WideCarousel from "./components/WideCarousel";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <WideCarousel />
      <Carousel name="The top list" category="/category/new"/>
    </>
  );
}

export default App;
