import "./App.css";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="bg-primary-background">
        <NavBar />
        <Carousel />
      </div>
    </>
  );
}

export default App;
