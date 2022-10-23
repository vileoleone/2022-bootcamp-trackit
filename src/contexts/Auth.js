import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [habitsArray, setHabitsArray] = useState({
        name: "",
        days: []
    })
    
    
    return (
        <AuthContext.Provider value={{ user, setUser, habitsArray, setHabitsArray }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;