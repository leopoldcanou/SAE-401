import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Movies() {

  return (
    <>
    <div className="mt-12"></div>
    <Carousel name="Horror" category="Horror"/>
    <Carousel name="Comedy" category="Comedy"/>
    <Carousel name="Action" category="Action"/>
    <Carousel name="Thriller" category="Thriller"/>
    <Carousel name="Drama" category="Drama"/>
    <Footer />
    </>
  );
}