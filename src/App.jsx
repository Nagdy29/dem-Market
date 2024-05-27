import "./App.css";
import { Hero } from "./components/Hero";
import Navvbar from "./components/Navvbar";
import Bestseller from "./pages/Bestseller";
import HotProducts from "./pages/HotProducts";

function App() {
  return (
    <>
      <div>
        <Navvbar />
        <Hero />
        <Bestseller />
        <HotProducts />
      </div>
    </>
  );
}

export default App;
