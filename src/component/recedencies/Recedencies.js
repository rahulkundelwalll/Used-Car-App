import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import "swiper/css/free-mode"
import './Recedencies.css'
import { FreeMode } from 'swiper';
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

// import 'bootstrap/dist/css/bootstrap.min.css'
function Recedencies() {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Popular Recedencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButton/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />
                                    <span className='secondaryText r-price'>
                                        <span style={{ color: "red" }}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className='primaryText'>{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>

    )
}

export default Recedencies

const SliderButton = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-button">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
}
