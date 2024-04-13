import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[95%] mx-auto text-center py-16 text-white flex flex-col justify-center items-center'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='px-2 lg:col-span-2'>
                <h1 className='text-2xl font-bold md:text-4xl sm:text-3xl '>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4 '>
                <div className='flex flex-col items-center justify-center w-full sm:flex-row '>
                    <input className="p-3 flex w-[80%] rounded-md text-black" type="email" placeholder='Enter email' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6  mx-auto py-3 text-black md:ml-4'>Notify me!</button>
                </div>
                <p>We care about the protection of your data. <span className='text-[#00df9a] underline'>Read our Privacy Policy</span></p>

            </div>
        </div>
    </div>
  )
}

export default Newsletter