import { db } from "../database/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const useSendMessage = async(roomId, user, text) => {
    try {
        await addDoc(collection(db, "chat-rooms", roomId, "messages"),{
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: text.trim(),
            timestamp: serverTimestamp()
        })
    } catch (error) {
        console.log(error)
    }
}

