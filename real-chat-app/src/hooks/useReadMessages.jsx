import { db } from "../database/firebase";
import {
    collection,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

export const useReadMessages = (roomId, callback) => {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp','asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            callback(messages)
        }
    )
}