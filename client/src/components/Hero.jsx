import React from 'react'
import Product from './Product'

const Hero = () => {

    return <>
        <div>
            {/* Carousel start */}
            <div>
                <div className='p-5 relative overflow-hidden max-w-full'>
                    <div className="carousel w-full  transition-transform duration-300">
                        <div id="item1" className="carousel-item w-full  flex-shrink-0">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/17a2c4ed00866b1a.jpg?q=20" className="object-cover w-full h-[200px]" />
                        </div>
                        <div id="item2" className="carousel-item w-full  flex-shrink-0">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20" className="object-cover w-full h-[200px]" />
                        </div>
                        <div id="item3" className="carousel-item w-full  flex-shrink-0">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1ae4811c63e02447.jpeg?q=20" className="object-cover w-full h-[200px]" />
                        </div>
                        <div id="item4" className="carousel-item w-full  flex-shrink-0">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/14691d790ec410a9.jpg?q=20" className="object-cover w-full h-[200px]" />
                        </div>
                        <div id="item5" className="carousel-item w-full  flex-shrink-0">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f09f551230626a04.jpg?q=20" className="object-cover w-full h-[200px]" />
                        </div>
                        <div className="flex absolute justify-center w-full bottom-7 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            <a href="#item4" className="btn btn-xs">4</a>
                            <a href="#item5" className="btn btn-xs">5</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel end */}

            <Product />
        </div >
    </>
}

export default Hero