import NavbarC from "./components/NavbarC";
import CarouselC from './components/CarouselC';
import SectionAboutUs from "./components/SectionAboutUs";
import SectionServices from "./components/SectionServices";
import SectionReferences from "./components/SectionReferences";

function App() {
  return (
    <div className="App">
      <NavbarC/>
      <CarouselC/>
      <SectionAboutUs/>
      <SectionServices/>
      <SectionReferences/>
    </div>
  );
}

export default App;
