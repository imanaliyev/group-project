import React from 'react'
import Our from './Components/Our'
import Car from './Components/Car';
import Categories from './Components/Categories';
import "./Components/sass/malik.scss"
import Savemoney from './Components/Savemoney';
import './Components/sass/imanStyle.scss';
import InfoSection from './Components/InfoSection';
import Footer from './Components/Footer';
import "./Sass/arif.scss";
import Header from "./Components/Header"
import Main from "./Components/Main"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Our />
      <Savemoney></Savemoney>
      <Categories></Categories>
      <Car></Car>
      <InfoSection />
      <Footer />

    </div>
  )
}





export default App


