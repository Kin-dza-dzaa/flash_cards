import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/auth-provider";
import { jwtToken } from "./useAuth";

export interface authInterface {
    authState: boolean,
    userData: jwtToken,
    logOut: () => void
}

export const useAuthContext = (): authInterface => {
    const context = useContext(AuthContext);
    return context;
}