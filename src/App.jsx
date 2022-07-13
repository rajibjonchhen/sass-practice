import logo from './logo.svg';
import './App.css';
import "./myapp.scss"
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MyNavbar from './components/myNavbar/MyNavbar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <MyNavbar/>
       <Routes>
         
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
