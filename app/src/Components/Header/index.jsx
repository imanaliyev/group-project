import React, { useState } from "react";
import LogoImg from "../../Assets/Images/icon2.png";
import SideImg from "../../Assets/Images/svg-image.png";

function Header() {
  const [Sidebar, setSidebar] = useState(false);

  function SidebarOpen() {
    setSidebar(!Sidebar);
  }
  return (
    <>
      <header id="Header">
        <nav id="Nav">
          <div className="logo">
            <img src={LogoImg} alt="Salam" />
          </div>
          <div className="nav-search">
            <input type="text" placeholder=" Type your search here... " />
            <div className="buton1">
              <div className="orangeh"></div>
              <div className="view">
                <span className="span">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="nav-menu-section">
            <div className="nav-menu-basket">
              <h3>CART</h3>
              <div className="basket-amount">0</div>
            </div>
            <div className="nav-menu">
              <i class="fa-solid fa-bars" onClick={SidebarOpen}></i>
            </div>
          </div>
          <div className={`nav-menu-sidebar ${Sidebar ? "open" : ""}`}>
            <div className="sidebar-content-wrapper">
              <div className="sidebar-logo">
                <img src={SideImg} />
              </div>
              <div className="sidebar-content1">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean et tortor ac sem varius tincidunt non ac eros.
                </span>
              </div>
              <div className="sidebar-content2">
                <span>Support Center</span>

                <h3>+ 3 759 315 - 6427</h3>
              </div>
              <div className="sidebar-content3">
                <span>Our Address</span>
                <h4>94 ROA MALAKA, WEST JAKARTA CITY</h4>
              </div>
            </div>
            <div className="sidebar-socials">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-telegram"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
          {Sidebar && <div className="overlay" onClick={SidebarOpen}></div>}
        </nav>
      </header>

      <div className="Navigation">
        <div className="response-logo">
          <img src="../../Assets/Images/response-logo.png" />
        </div>
        <div className="nav-btns">
          <ul>
            <li className="main-btn">
              MAIN
              <div className="main-btn-dropdown">
                <ul>
                  <li>
                    <div className="highlight-dot"></div>MAIN HOME
                  </li>
                  <li>
                    <div className="highlight-dot"></div>CAR PARTS SHOP
                  </li>
                  <li>
                    <div className="highlight-dot"></div>CAR WORKSHOP
                  </li>
                  <li>
                    <div className="highlight-dot"></div>CAR TUNING
                  </li>
                  <li>
                    <div className="highlight-dot"></div>LANDING
                  </li>
                </ul>
              </div>
            </li>

            <li className="main-btn">
              PAGES
              <div className="main-btn-dropdown">
                <ul>
                  <li>
                    <div className="highlight-dot"></div>ABOUT US
                  </li>
                  <li>
                    <div className="highlight-dot"></div>WHO WE ARE
                  </li>
                  <li>
                    <div className="highlight-dot"></div>OUR OFFERS
                  </li>
                  <li>
                    <div className="highlight-dot"></div>OUR CLIENTS
                  </li>
                  <li>
                    <div className="highlight-dot"></div>SCHEDULE
                  </li>
                  <li>
                    <div className="highlight-dot"></div>FAQ PAGE
                  </li>
                  <li>
                    <div className="highlight-dot"></div>VEHICLES
                  </li>
                  <li>
                    <div className="highlight-dot"></div>OIL CHANGE
                  </li>
                  <li>
                    <div className="highlight-dot"></div>WHEELS&TIRES
                  </li>
                  <li>
                    <div className="highlight-dot"></div>CONTACT US
                  </li>
                  <li>
                    <div className="highlight-dot"></div>GET IN TOUCH
                  </li>
                  <li>
                    <div className="highlight-dot"></div> COMING SOON
                  </li>
                </ul>
              </div>
            </li>

            <li className="portfolio-btn">
              PORTFOLIO
              <div className="portfolio-btn-dropdown">
                <ul>
                  <li>
                    {/* <h3>LIST TYPES</h3> */}
                    <div className="highlight-dot"></div>Standart
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Gallery
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Slider
                  </li>
                </ul>

                <ul>
                  {/* <h3>SINGLE TYPES</h3> */}
                  <li>
                    <div className="highlight-dot"></div>Small Images
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Big Images
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Small Slider
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Big Slider
                  </li>
                </ul>

                <ul>
                  {/* <h3>LAYOUTS</h3> */}
                  <li>
                    <div className="highlight-dot"></div>Two Columns
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Three Columns
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Three Columns Wide
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Four Columns
                  </li>
                  <li>
                    <div className="highlight-dot"></div>Four Columns Wide
                  </li>
                </ul>
              </div>
            </li>

            <li className="main-btn">
              BLOG
              <div className="main-btn-dropdown">
                <ul>
                  <li>
                    <div className="highlight-dot"></div>LEFT SIDEBAR
                  </li>
                  <li>
                    <div className="highlight-dot"></div>RIGHT SIDEBAR
                  </li>
                  <li>
                    <div className="highlight-dot"></div>BLOG NO SIDEBAR
                  </li>
                  <li>
                    <div className="highlight-dot"></div>POSTTYPES
                  </li>
                </ul>
              </div>
            </li>
            <li className="main-btn">
              SHOP
              <div className="main-btn-dropdown">
                <ul>
                  <li>
                    <div className="highlight-dot"></div>LEFT SIDEBAR
                  </li>
                  <li>
                    <div className="highlight-dot"></div>SHOP SINGLE
                  </li>
                  <li>
                    <div className="highlight-dot"></div>SHOP LAYOUTS
                  </li>
                  <li>
                    <div className="highlight-dot"></div>SHOP PAGES
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="response-menu">
            <i class="fa-solid fa-bars" onClick={SidebarOpen}></i>
          </div>
        <div className="nav-contact">
          
          <span>Support center 24/7</span>
          <h3>+ 3 759 315 - 6427</h3>
        </div>
      </div>
    </>
  );
}

export default Header;
