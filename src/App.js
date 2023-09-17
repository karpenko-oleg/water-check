
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Amenities from './pages/Amenities/Amenities.jsx';
import Compani from './pages/Compani/Compani.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home';
import Price from './pages/Price/Price.jsx';
import './style.scss';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <div className="wrapper">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/amenities" element={<Amenities/>}></Route>
          <Route path="/compani" element={<Compani/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/price" element={<Price/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
