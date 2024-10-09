import { app, db } from "../firebase/config";

import { 
    getAuth, 
    createUserWithEmailAndPassword, // CADASTRO
    signInWithEmailAndPassword, // ENTRAR
    updateProfile,
    signOut // SAIR
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth(app)

    function checkIfIsCancelled() {
        if(cancelled) {
            return
        }
    }

    // REGISTER
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {displayName: data.displayName})

            setLoading(false)

            return user
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            } else if(error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado."
            } else if(error.message.includes("invalid-email")) {
                systemErrorMessage = "E-mail inválido."
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    // LOGIN
    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)

            setLoading(false)
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado."
            } else if (error.message.includes("invalid-login-credentials")) {
                systemErrorMessage = "Senha incorreta."
            } else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde." 
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    // LOGOUT
    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}