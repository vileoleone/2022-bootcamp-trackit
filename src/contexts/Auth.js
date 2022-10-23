import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [resetPage, setResetPage] =useState(false)
    const [habitsArray, setHabitsArray] = useState({
        name: "",
        days: []
    })
    const [markedNumber, setmarkedNumber] = useState(0)
    
    
    return (
        <AuthContext.Provider value={{ markedNumber, setmarkedNumber,user, setUser, habitsArray, setHabitsArray, resetPage, setResetPage }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;