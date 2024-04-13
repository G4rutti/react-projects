import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl font-bold  md:text-7xl md:p-6 sm:text-6xl'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='text-xl font-bold py-4 md:text-5xl sm:text-4xl'>Fast, flexible financing for</p>
                <ReactTyped 
                className='text-xl font-bold md:text-5xl md:pl-4 sm:text-4xl pl-2'
                strings={["BTB","BTC","SASS"]}
                typeSpeed={120}
                backSpeed={140} 
                loop
                />
            </div>
            <p className='text-xl font-bold text-gray-500 md:text-2xl'>Monitor your data analytics t oincrease revenue to BTB, BTC & SASS plataforms</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero