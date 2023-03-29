import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export interface jwtToken {
    jwt: string,
    name: string;
    picture: string;
}

const clientID = "220265385814-2460fg8320a5b7223oq831jrv8aq6j1e.apps.googleusercontent.com";

export const useAuth = () => {
    const [authState, SetAuthState] = useState(false);
    const [userData, SetUserData] = useState({jwt: "", name: "", picture: ""} as jwtToken);
    const [logOutState, SetLogOut] = useState(false);
    const navigate = useNavigate();

    const logOut = (): void => {
        window.localStorage.removeItem("openID");
        SetAuthState(false);
        SetLogOut(!logOutState);
        navigate("/home");
    }


    useEffect(() => {
        let idToken = window.localStorage.getItem("openID"); 
        if (idToken && idToken !== undefined) {
            try {
                let data = jwtDecode(idToken) as jwtToken;
                SetUserData({
                    jwt: idToken,
                    name: data.name,
                    picture: data.picture,
                });
                SetAuthState(true);
                return;
            } catch (error) {
                SetAuthState(false);
            }
        }
        
        google.accounts.id.initialize({
            client_id: clientID,
            callback: (res) => {
                let data = jwtDecode(res.credential) as jwtToken;
                SetUserData({
                    jwt: res.credential,
                    name: data.name,
                    picture: data.picture,
                });
                SetAuthState(true);
                window.localStorage.setItem("openID", res.credential)
            }
        });
        google.accounts.id.renderButton(
            document.getElementById("googleSignIn")!,
            {
                type: "standard",
                theme: "filled_black",
                size: "large"
            }
        );
    }, [logOutState]);

    return { authState, logOut, userData };
}