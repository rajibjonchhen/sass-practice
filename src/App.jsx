import logo from './logo.svg';
import './App.css';
import "./myapp.scss"
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';


function App() {
  return (
    <div className="App">
        <h1>Lets Practice SASS/SCSS</h1>
      <div className="display-flex">
        <section>
          <h2>Nesting</h2>
          <p className="text-color">text color using variable</p>
          <p><LoremIpsum p={2}/></p>
          <p><LoremIpsum p={2}/></p>
          
        </section>
        <aside>
          <h3>Nesting</h3>
          <p><LoremIpsum p={1}/></p>
        </aside>
       
      </div>
    </div>
  );
}

export default App;
