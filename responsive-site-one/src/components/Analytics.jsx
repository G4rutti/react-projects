import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Laptop} alt="" srcset="" className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-[#00df9a] font-bold'>Data Analytics dashboard</p>
                    <h1 className='capitalize font-bold text-2xl md:text-4xl sm:text-3xl'>Manage data Analytics centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, excepturi molestiae. Ut asperiores possimus facilis, voluptatum, unde quasi deserunt deleniti sunt aliquam quae totam veniam dolores inventore dolor enim perspiciatis?</p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Analytics