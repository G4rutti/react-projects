import { useState } from 'react';
import { auth } from '../database/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    async function criarConta(auth, data) {
        try {
            console.log(data)
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: `${data.displayName} ${data.displayLastName}`
            })
            console.log(user)
            return user
        } catch (error) {
            console.log(error)
            console.log(typeof error.message)

            let systemErrorMessage
            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha deve conter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado no sistema"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde"
            }
            console.log(systemErrorMessage)
            setError(systemErrorMessage)
        }
    }

    function signWithGoogle(auth){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    async function signIn(auth, email, senha){
        try {
            const data = await signInWithEmailAndPassword(auth, email, senha)
            console.log(data)
            return data
          } catch (error) {
            console.log(error)
          }
    }

    function sair(auth){
        signOut(auth)
    }

    function atualizarUser(auth, name, photo){
        try {
            updateProfile(auth, {
                displayName: name,
                photoURL: photo
            })
        } catch (error) {
            console.log(error)
        }
        
    }

    return {criarConta, signWithGoogle, signIn, sair, atualizarUser}
}