import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState({ email: '', name: '', image: '', password: '' })
    
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;