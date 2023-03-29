import React, { createContext } from "react";
import { useAuth } from "../../hooks/AuthProvider/useAuth";
import { authInterface } from "../../hooks/AuthProvider/useAuthContext";


export const AuthContext = createContext({} as authInterface);

export const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    const auth = useAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

