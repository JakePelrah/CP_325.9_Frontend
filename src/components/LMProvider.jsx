import { createContext, useContext, useState, useEffect } from "react";


const LMContext = createContext();
export const useLM = () => useContext(LMContext)

export default function LMProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState({})


    useEffect(() => {
        console.log(999)
        fetch('http://localhost:3000/isLoggedIn')
            .then(res => res.json())
            .then(setIsLoggedIn)
    }, [])


    return (
        <LMContext.Provider value={{
            isLoggedIn
        }}>
            {children}
        </LMContext.Provider>
    );
};