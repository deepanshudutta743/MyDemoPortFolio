import React from 'react'
import java from "/java.png"
import htmlpic from "/html.png"
import springBoot from "/springBoot.jpg"
import pythonPic from "/python.webp"
import javascript from "/javascript.png"
import oracle from "/oracle.png"
import reactjs from "/reactjs.png"



function Portfolio() {
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
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
                <span className='underline font-semibold'>Featured Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div key={id} className='md:w-[250px] ms:h-[250px] border-[2px] p-1 rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300'>
                                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]'/>
                                <div>
                                    <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                                <div className='flex  gap-2 mt-4 mb-4 ml-2'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'> Video</button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded'>Source Code</button>
                                </div>

                            </div>


                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio