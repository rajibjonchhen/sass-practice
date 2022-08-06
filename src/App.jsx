import logo from './logo.svg';
import './App.css';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MyNavbar from './components/myNavbar/MyNavbar';
import Home from './components/home/Home';
import MyLayout from './components/myLayout/MyLayout';
import ServicesPrices from './components/servicesPrice/ServicesPrices';
import Products from './components/products/Products';
import Booking from './components/booking/Booking';
import Contact from './components/contact/Contact';
import AboutUs from './components/aboutUs/AboutUs';

function App() {
  return (
    <div className="App s">
       <BrowserRouter>
       
       <Routes>
         <Route path="/" element={<MyLayout><Home/></MyLayout>}/>
         <Route path="/services" element={<MyLayout><ServicesPrices/></MyLayout>}/>
         <Route path="/about" element={<MyLayout><AboutUs/></MyLayout>}/>
         <Route path="/products" element={<MyLayout><Products/></MyLayout>}/>
         <Route path="/booking" element={<MyLayout><Booking/></MyLayout>}/>
         <Route path="/contact" element={<MyLayout><Contact/></MyLayout>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
