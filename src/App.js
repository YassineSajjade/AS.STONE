import NavbarC from "./components/NavbarC";
import CarouselC from './components/CarouselC';
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import SectionReferences from "./components/SectionReferences";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarC/>
      <CarouselC/>
      <SectionAboutUs/>
      <SectionServices/>
      <SectionReferences/>
      <Footer/>
    </div>
  );
}

export default App;
