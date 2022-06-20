import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import './styles/index.scss'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
