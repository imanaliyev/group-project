

import React from "react";
import Image1 from "./Images/shop-home-img-4.jpg";
import Image2 from "./Images/shop-home-img-5.jpg";



function Main() {
  return (
    <>
      <section id="heroSection">
        <div className="hero-content-learnmore">
          <h2>NEW MODELS FOR YOUR CAR</h2>
          <span>Lorem ipsum dolor sit.</span>
          <div className="buton2">
            <div className="orangehero"></div>
            <div className="view">
              <span className="span">
                <i class="fa-solid fa-plus"></i> VIEW MORE
              </span>
            </div>
          </div>
        </div>
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>
      </section>

      <section id="cegSection">
        <div className="cegSectionWrapper">
          <div className="ceg-card1">
            <div className="ceg-card1-img">
              <img src={Image1} />
            </div>
            <div className="ceg-title">
              <h3>CARS</h3>
            </div>
          </div>
          <div className="ceg-card2">
            <div className="ceg-card2-img">
              <img src={Image2} />
            </div>
            <div className="ceg-title">
              <h3>ELECTRONICAL</h3>
            </div>
          </div>
          <div className="ceg-card3">
            <div className="ceg-card3-img">
              <img src={Image1} />
            </div>
            <div className="ceg-title">
              <h3>ELECTRONICAL</h3>
            </div>
          </div>
        </div>
        
      </section>
      
    </>
  );
}

export default Main;