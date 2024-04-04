import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WideCarousel from "../components/WideCarousel";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <WideCarousel />
      <Carousel name="Horror" category="Horror"/>
      <Carousel name="Comedy" category="Comedy"/>
      <Carousel name="Action" category="Action"/>
      <Footer />
      <Outlet />
    </>
  );
}
