import "./App.css";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NvaBar/NavBar";
import OverMenu from "./Component/NvaBar/OverMenu";
import Content from "./Component/Section/Content";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        className="absolute w-full h-screen top-0 -left-full transition-all duration-300 z-10"
        id="OverMenu"
      >
        <OverMenu />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
