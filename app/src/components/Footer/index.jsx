import React from 'react'

function Footer() {
  return (
    <div>

    <footer id='footer'>
        <section id='upper-footer'>
            <div className="txt">
                <p>SUPPORT@SHIFTUP.COM</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit iusto voluptas tempore. dolor sit amet consectetur</p>
            </div>

            <div className="button">
                <div className='hover'></div>
                <i class="fa-solid fa-arrow-right-long"></i>

            </div>

        </section>
        <div className="line"></div>
        <section id='footer_top'>
            <div className="shift_up">
                <h3>SHIFT UP</h3>
                <p>Hit the road with the astounding ShiftUp theme, made especially for repair shops, car rental and automotive easing services.</p>
                <p>Support center 24/7</p>
                <h4>+ 3 123 456-7890</h4>
                <p>Our Adress</p>
                <h5>94 RDA Malaka, West Jakarta City</h5>
            </div>
            <div className="sections">
                <div className="about sect">
                <h5>About</h5>
                    <ul>
                        <li><div className="hover_box"></div>About us</li>
                        <li><div className="hover_box"></div>Who Are We</li>
                        <li><div className="hover_box"></div>Our Offers</li>
                        <li><div className="hover_box"></div>Our Clients</li>
                    </ul>
                </div>
                <div className="services sect">
                <h5>Services</h5>
                    <ul>
                        <li><div className="hover_box"></div>FAQ Page</li>
                        <li><div className="hover_box"></div>WHEELS & TIRES</li>
                        <li><div className="hover_box"></div>DRIVING EVENTS</li>
                        <li><div className="hover_box"></div>CLASSIC STORE</li>
                    </ul>
                </div>
                <div className="contact sect">
                <h5>Contact</h5>
                    <ul>
                        <li><div className="hover_box"></div>Where Are We</li>
                        <li><div className="hover_box"></div>Contact Us</li>
                        <li><div className="hover_box"></div>Our team</li>
                    </ul>
                </div>
                <div className="discovermore sect">
                <h5>Discover More</h5>
                    <ul>
                        <li><div className="hover_box"></div>Oil Change</li>
                        <li><div className="hover_box"></div>Vehicles</li>
                        <li><div className="hover_box"></div>Schedule</li>
                    </ul>
                </div>
            </div>
        </section>
        <section id='footer_down'>
            <p>© 2022 <span>Qode Interactive</span>, All Rights Reserved</p>
            <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </section>
    </footer>
</div>
)
}

  


export default Footer