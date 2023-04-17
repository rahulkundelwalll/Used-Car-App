import React, { useEffect } from 'react'
import './sponsor.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Sponsors() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <section className='c-wrapper '>
      <h1  data-aos="fade-down-left" className='text'>Our Sponsors</h1>
      <div data-aos="fade-down-right" className="paddings innerWidth  c-container">
        <div className='con1'><img src="./c1.png" alt="" />
          <img src="./c2.png" alt="" />
        </div>
        <div className="con2"><img src="./c3.png" alt="" />
          <img src="./c4.png" alt="" />
        </div>

      </div>
    </section>

  )
}

export default Sponsors
