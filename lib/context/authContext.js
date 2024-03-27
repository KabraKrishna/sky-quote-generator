"use client"
import { createContext, useState } from "react";

export const AuthContext = createContext({
    userSession: {
        isLoggedIn: false,
        loggedInUser: null,
    },
    setLoggedIn: (user) => { },
    setLoggedOut: () => { }
})

export function AuthContextProvider({ children }) {

    const [userSession, setUserSession] = useState({
        loggedInUser: null,
        isLoggedIn: false
    })

    const setLoggedIn = (user) => {
        setUserSession({
            loggedInUser: user,
            isLoggedIn: true
        })
    }

    const setLoggedOut = () => {
        setUserSession({
            loggedInUser: null,
            isLoggedIn: false
        })
    }

    return (
        <AuthContext.Provider value={{ userSession, setLoggedIn, setLoggedOut }} >
            {children}
        </AuthContext.Provider>
    )


}