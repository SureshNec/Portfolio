import "./App.scss";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/pages/Home";
import Portfolio from "./Components/pages/Portfolio";
import About from "./Components/pages/About";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Portfolio' element={<Portfolio />} />
        <Route path='About' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
