import React from 'react'
import java from "/java.png"
import htmlpic from "/html.png"
import springBoot from "/springBoot.jpg"
import pythonPic from "/python.webp"
import javascript from "/javascript.png"
import oracle from "/oracle.png"
import reactjs from "/reactjs.png"



function Experiance() {
    const cardItem = [
        { id: 1, logo: java, name: "Java" },
        { id: 2, logo: javascript, name: "Javascript" },
        { id: 3, logo: htmlpic, name: "HTML" },
        { id: 4, logo: pythonPic, name: "Python" },
        { id: 5, logo: reactjs, name: "React Js" },
        { id: 6, logo: springBoot, name: "SpringBoot" },
        { id: 7, logo: oracle, name: "Oracle" },
    ];



    return (
        <div
          name="Experiance"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        >
          <div>
            <h1 className="text-3xl font-bold mb-5">Experiance</h1>
            <p className="  ">
              I've more than 2 years of experiance in below technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
              {cardItem.map(({ id, logo, name }) => (
                <div
                  className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                  key={id}
                >
                  <img src={logo} className="w-[150px] rounded-full" alt="" />
                  <div>
                    <div className="">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    export default Experiance;