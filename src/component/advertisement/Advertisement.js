import { content } from "./Content";
import Car1 from "./car2.png";
import Car2 from "./car1.png";
import { useState } from "react";


// let value = true;
// let Car3=Car1;
function Advertisement() {
  const [Car3, setCar3] = useState(Car1);
  const { car } = content;
 
  const handleAnchorClick = event => {
    if(Car1===Car3)
    {
      // Car3=Car2;
      setCar3(Car2);
      console.log("hello");
    }
    else{
      // Car3=Car1;
      setCar3(Car1);
      console.log("hello");
    }
  };
  return (
    <div>
      <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {car.firstName}{" "}
            <span className="text-dark_primary">{car.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{car.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn" onClick={handleAnchorClick}>{car.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {car.car_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={Car3}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Advertisement
