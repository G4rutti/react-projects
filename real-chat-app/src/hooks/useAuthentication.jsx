import { useState } from 'react';
import { auth } from '../database/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect 
} from 'firebase/auth';

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function criarConta(auth, data) {
        try {
            setLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: `${data.displayName} ${data.displayLastName}`
            })
            setLoading(false)
            return user
        } catch (error) {
            console.log(error)
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
        try {
            setLoading(true)
            signInWithPopup(auth, provider)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    async function signIn(auth, email, senha){
        try {
            setLoading(true)
            const data = await signInWithEmailAndPassword(auth, email, senha)
            console.log(data)
            setLoading(false)
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
            setLoading(true)
            updateProfile(auth, {
                displayName: name,
                photoURL: photo
            })
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    return {criarConta, signWithGoogle, signIn, sair, atualizarUser, error, loading}
}