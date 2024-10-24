import { createContext, useContext, useState, useEffect } from "react";


const LMContext = createContext();
export const useLM = () => useContext(LMContext)

export default function LMProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState({})


    useEffect(() => {
        console.log(999)
        fetch('http://localhost:3000/isLoggedIn', { credentials: 'include' })
            .then(res => res.json())
            .then(setIsLoggedIn)
    }, [])


    function logout() {
        fetch('http://localhost:3000/logout', { method: 'POST' })
            .then(res => res.json())
            .then(console.log)
    }

    return (
        <LMContext.Provider value={{
            isLoggedIn, logout
        }}>
            {children}
        </LMContext.Provider>
    );
};