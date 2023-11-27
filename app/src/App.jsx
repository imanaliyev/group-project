

import Car from './components/Car';
import Categories from './components/Categories';
import "./components/sass/malik.scss"
import Savemoney from './components/Savemoney';
import './components/sass/imanStyle.scss';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Savemoney></Savemoney>
        <Categories></Categories>
        <Car></Car>
      <InfoSection/>
      <Footer/>
        
    </div>
  );
}

export default App;
