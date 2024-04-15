import React, { useEffect, useState } from "react"
import { useReadMessages } from "./useReadMessages"

export const useMessages = (roomId) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const unsubscribe = useReadMessages(roomId, setMessages)
        return unsubscribe
    }, [roomId])

    return messages
}