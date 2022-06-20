import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
