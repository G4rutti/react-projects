import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdChatboxes } from "react-icons/io";


const Cards = ({ data }) => {
    return (
        <Link to={`/sala/${data.id}`} className='bg-neutral w-[60vw] py-16  mx-12 my-5 rounded-lg shadow-md md:w-auto'>
            <div className='flex justify-center items-center gap-2'>
                <IoMdChatboxes className='text-white' size={30}/>
                <h2 className='text-neutral-content text-2xl'>{data.title}</h2>
                <IoMdChatboxes className='text-white' size={30}/>
            </div>

        </Link>
    )
}

export default Cards