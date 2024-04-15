import React, {useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../database/firebase";
import {useSendMessage} from "../hooks/useSendMessage"

const MessageInput = ({ roomId }) => {
    const [user, setUser] = useState(null)
    const [value, setValue] = React.useState('');

    onAuthStateChanged(auth, (user) => {
        setUser(user)
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        useSendMessage(roomId, user, value);
        setValue('');
    }


    return (
        <form onSubmit={handleSubmit} className='w-[100%] flex justify-center items-center gap-5 mt-2'>
            <label gfh className='input input-bordered my-2 py-2 px-4 rounded-none flex items-center gap-2'>
                <input className='grow' type="text"placeholder='Escreva sua mensagem' required value={value} onChange={(e) => setValue(e.target.value)} />
            </label>
            <button className='btn rounded-none shadow'>Enviar</button>
        </form>
    )
}

export default MessageInput