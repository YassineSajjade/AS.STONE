import NavbarC from "./components/NavbarC";
import CarouselC from './components/CarouselC';
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import SectionReferences from "./components/SectionReferences";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import 'hover.css/css/hover-min.css';

function App() {
  return (
    <div className="App">
      <NavbarC/>
      <CarouselC/>
      <SectionAboutUs/>
      <SectionServices/>
      <SectionReferences/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
