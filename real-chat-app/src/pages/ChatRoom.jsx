import React from 'react'
import { Link, useParams } from 'react-router-dom'

// Components:
import NavBar from '../components/NavBar'
import MessageInput from '../components/MessageInput'
import MessageList from '../components/MessageList'

// MicroData: 
import { chatRooms } from '../data/chatRooms'

const ChatRoom = () => {
  const params = useParams()

  return (
    <div>
      <NavBar />
      <div className='w-full mt-10'>
        <div className='flex gap-2 justify-center'>
          <h2 className='uppercase text-4xl font-bold text-center'>{params.id}</h2>
          <p className='text-4xl font-bold'>-</p>
          <Link to={'/'} className='btn text-xl font-bold'>Voltar</Link>
        </div>
        <div className='w-[90vw] min-h-[80vh] border border-neutral-content mx-auto justify-center mt-10'>
          <MessageInput roomId={params.id} />
          <MessageList roomId={params.id}/>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom