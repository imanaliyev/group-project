import React, { useEffect, useState } from 'react'

const Our = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://mocki.io/v1/ec6d8aa5-0762-437e-b916-fda263badd62')
            .then(res => res.json())
            .then(api => setData(api))

    }, [])

    return (
        <div className='umumi'>
            <h1>OUR PRODUCTS</h1>

            <section id='three'>
                {data.map(item => (
                    <div className="card" >
                        <img src={item.img} alt="err" />
                        <div className="top"></div>


                        <div className="category">
                            <div>{item.category}</div>
                            <div className='one'>{item.categorytwo}</div>
                        </div>
                        <div className="about">
                            <p className='name'>{item.name}</p>
                            <p>$ {item.price}</p>
                        </div>

                        <div className="opacity">
                            <div className="write">
                                <div className="category">
                                    <div>{item.category}</div>
                                    <div className='one'>{item.categorytwo}</div>
                                </div>
                                <div className='plus'>+</div>
                                <div className='add'>ADD TO CART</div>
                            </div>
                        </div>

                        <div className="bottom"></div>
                        {/* positon fixed( sagdaki) */}
                       
                    </div>
                     
                    
                ))}
                <a href="/
                ">
                     <div className="sticy">
                     <i class="fa-solid fa-arrow-up"></i>
                     <div className="arrow"></div>
                    </div>
                </a>
               
            </section>



            <section id='four'>
                <div className="writes">
                    <div className='translate'>
                        <div className='div3'>3</div>
                        <div className='div0'>0</div>
                        <div className='faiz'>%</div>
                        <div className='divo'>O</div>
                        <div className='divf'>F</div>
                        <div className='divF'>F</div>
                    </div>
                    <h1>UNDER THE HOOD SALES</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <div className='view'>
                        <span className='plus-icon'>+</span>
                        <span>VIEW MORE</span>
                        <div className="view-icon"></div>

                    </div>
                </div>


            </section>

            <section id='five'>
                <img src="https://shiftup.qodeinteractive.com/wp-content/uploads/2021/10/client-img4-hov.png" alt="err" />
                <img src="https://shiftup.qodeinteractive.com/wp-content/uploads/2021/10/client-img3-hov.png" alt="err" />
                <img src="https://shiftup.qodeinteractive.com/wp-content/uploads/2021/10/client-img2-hov.png" alt="err" />
                <img src="https://shiftup.qodeinteractive.com/wp-content/uploads/2021/10/client-img1-hov.png" alt="err" />
                <img src="https://shiftup.qodeinteractive.com/wp-content/uploads/2021/10/client-img5-hov.png" alt="err" />
            </section>


        </div>
    )
}

export default Our
