import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    let localUser = null

    if(localStorage.getItem("user") != undefined) 
        localUser = JSON.parse(atob(localStorage.getItem("user")))

    const [user, setUser] = useState(localUser != null ? localUser: {})
    const [isLogged, setLogged] = useState(localUser != null ? true : false)

    const getUser = (data) => {
        storeLogin(data)
        setUser(data)
        console.log(data)
    }

    const storeLogin = (user) => {
        localStorage.setItem("user", btoa(JSON.stringify(user)))
        setLogged(true)
    }

    const logout = () => {
        localStorage.removeItem("user")
        setLogged(false)
    }

    return (
        <UserContext.Provider value={{ isLogged, logout, getUser, user }}>{children}</UserContext.Provider>
    )
}