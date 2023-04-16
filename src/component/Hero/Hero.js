import React from 'react'
import './Hero.css'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="hero-wrapper">

      <div className="paddings innerWidth flexCenter hero-container ">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Move to What<br /> Moves You
            </h1>
          </div>
          <div className="flexColStart hero-des">

            <span className='secondaryText'>Find Your Property here. What waiting for?</span>
            <span className='secondaryText'>Results You Deserve. Best Property you deserve</span> <br />

          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="red" size={25} />
            <input type="text" />
            <button className='button' color='blue'>Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={88} end={1000} duration={2} />
                <span>+</span>

              </span>
              <span className='secondaryText'>premium Properties</span>

            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={2} />
                <span>+</span>

              </span>
              <span className='secondaryText'>Positive Reviews</span>

            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={100} end={500} duration={2} />
                <span>+</span>

              </span>
              <span className='secondaryText'>Awards Winning</span>

            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./heroimage.jpg" alt="loading.." />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
