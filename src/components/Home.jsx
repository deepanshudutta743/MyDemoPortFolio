import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { RiJavaLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "/photo.avif"
function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
          <span className='text-xl'>Welcome in my Feed</span>
          <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a</h1>
            {/* <span className='text-red-700 font-bold'>Developer</span> */}
            <ReactTyped
              className='text-red-700 font-bold'
              strings={["Developer", "Coder", "Programmer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className='text-sm md:text-md text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos itaque magni praesentium amet debitis ullam odit, voluptates libero repellat omnis quam reiciendis perferendis, obcaecati veniam dolor, assumenda cumque necessitatibus quasi.
          </p>
          <br />
          {/* social media icons */}
          <div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between'>
            <div className='space-y-2'>
              <h1 className='font-bold'>Avaliable on</h1>
              <ul className='flex space-x-5'>
                <li >
                  <a href="https://www.facebook.com/" target='_blank'>
                  <FaSquareFacebook className='text-2xl cursor-pointer' /></a></li>
                <li >
                  <a href="https://www.instagram.com/?hl=en" target='_blank'>
                  <FaSquareInstagram className='text-2xl cursor-pointer' /></a></li>
                <li >
                  <a href="https://github.com/deepanshudutta743" target='_blank'>
                  <FaGithub className='text-2xl cursor-pointer' /></a></li>
                <li >
                  <a href="https://www.linkedin.com/in/deepanshu-dutta-a268021b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                  <FaLinkedin className='text-2xl cursor-pointer' /></a></li>
              </ul>
            </div>
            <div className='space-y-2'>
              <h1 className='font-bold'>Currently working on</h1>
              <div className='flex space-x-5'>
                <RiJavaLine className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <SiJavascript className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <BiLogoSpringBoot className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                <RiReactjsLine className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
          <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]'></img>
        </div>
      </div>
    </div>
    <hr/>
    </>
  )
}

export default Home