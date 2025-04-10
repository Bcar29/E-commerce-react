import { createContext, useState, useEffect } from "react";

import axios from "axios";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [status, setStatus] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        if (token) {
            axios.get("http://127.0.0.1:8000/accounts/user/", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
                setUser(res.data);
                
                
            })
            .catch(() => logout());
        }
    }, [token]);

    const login = async (email, password) => {
        try {
            const res = await axios.post("http://127.0.0.1:8000/accounts/login/", { email, password });
            setToken(res.data.access);
            localStorage.setItem("token", res.data.access);
            setUser(email);
            console.log(token)
            
        } catch (err) {
            console.error("Échec de connexion ", err);
        }
    };

    const register = async (username, email, password) => {
        try {
            await axios.post("http://127.0.0.1:8000/accounts/register/", { username, email, password });
            login(username, password);
        } catch (err) {
            console.error("Échec de l'inscription");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, register, status }}>
            {children}
        </AuthContext.Provider>
    );
};
