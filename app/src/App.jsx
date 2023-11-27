import React from 'react'
import Our from './components/Our'
import Car from './components/Car';
import Categories from './components/Categories';
import "./components/sass/malik.scss"
import Savemoney from './components/Savemoney';
import './components/sass/imanStyle.scss';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import "./sass/arif.scss";
import Header from "./components/Header"
import Main from "./components/Main"


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
  )}





export default App


