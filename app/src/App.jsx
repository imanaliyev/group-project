
import './App.css';
import Car from './components/Car';
import Categories from './components/Categories';
import "./components/sass/style.scss"
import Savemoney from './components/Savemoney';

function App() {
  return (
    <div className="App">
        <Savemoney></Savemoney>
        <Categories></Categories>
        <Car></Car>
    </div>
  );
}

export default App;
