import React from "react";
import Button from "antd/lib/button";
import { useAuthContext } from "../hooks/AuthProvider/useAuthContext";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export const AppBar = (): JSX.Element => {
    const authContext = useAuthContext();
    const navigate = useNavigate();
    return (
        authContext.authState ?
            <React.Fragment>
                <img
                    src="http://localhost/logo.png"
                    alt='logo'
                    style={{ "float": "left", "margin": "10px 40px 0 0", "width": "35px", "cursor": "pointer" }}
                    onClick={() => navigate("/home")}
                />
                <Button id="googleSignIn" type="primary" size="middle" shape="round" onClick={() => authContext.logOut()} style={{ "float": "right", "margin": "15px" }}>Log out</Button>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={[window.location.pathname.slice(1)]}
                    onSelect={({ key }) => {navigate(`/${key}`)}}
                    items={
                        [
                            {
                                label: "Home",
                                key: "home",
                            },
                            {
                                label: "Colleсtions",
                                key: "collections",
                            },
                            {
                                label: "Tips",
                                key: "tips",
                            },
                            {
                                label: "About",
                                key: "about",
                            },
                        ]
                    }
                    style={{ "borderBottom": "none" }}
                />
            </React.Fragment>
            :
            <React.Fragment>
                <img
                    src="http://localhost:3000/logo.png"
                    alt='logo'
                    style={{ "float": "left", "margin": "10px 40px 0 0", "width": "35px", "cursor": "pointer" }}
                    onClick={() => navigate("/home")}
                />
                <div id="googleSignIn" style={{ "float": "right", "margin": "15px" }}></div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={[window.location.pathname.slice(1)]}
                    onSelect={({ key }) => navigate(`/${key}`)}
                    items={
                        [
                            {
                                label: "Home",
                                key: "home",
                            },
                            {
                                label: "Tips",
                                key: "tips",
                            },
                            {
                                label: "About",
                                key: "about"
                            },
                        ]
                    }
                    style={{ "borderBottom": "none" }}
                />
            </React.Fragment>
    );
}
