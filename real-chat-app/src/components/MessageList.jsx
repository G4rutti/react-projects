import React, { useLayoutEffect, useRef, useState } from 'react'
import { useMessages } from '../hooks/useMessages'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../database/firebase";

const MessageList = ({ roomId }) => {
    const [user, setUser] = useState(null)
    const containerRef = useRef(null)
    const messages = useMessages(roomId)
    const reversedMessages = [...messages].reverse();

    onAuthStateChanged(auth, (user) => {
        setUser(user)
    });

    useLayoutEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    })


    return (
        <div>
            {reversedMessages.map((item) => (
                <Message
                    key={item.id}
                    message={item}
                    isOwnMessage={item.uid === user.uid}
                />
            ))}

        </div>
    )
}

function Message({ message, isOwnMessage }) {
    const { displayName, text } = message;
    return (
        <div className={`chat ${isOwnMessage ? "chat-end" : "chat-start"}`}>
            <h4 className="chat-header">{isOwnMessage ? 'You' : displayName}</h4>
            <div className='chat-bubble'>{text}</div>
        </div>
    );
}


export default MessageList