import logo from './logo.svg';
import './App.css';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MyNavbar from './components/myNavbar/MyNavbar';
import Home from './components/home/Home';
import MyLayout from './components/myLayout/MyLayout';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       
       <Routes>
         <Route path="/" element={<MyLayout><Home/></MyLayout>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
