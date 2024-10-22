import React, { createContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check for existing token in localStorage on initial load  
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            // Optionally fetch user data here  
        }
        setLoading(false);
    }, []);
    const login = async (formData) => {

        // Call your API to authenticate  
        const response = await fetch('https://apitest.elimagasht.net/api/login', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: formData,
        });

        if ( response.status != 200) {
            throw new Error('Login failed'),

            setIsAuthenticated(false),
            swal({
                title: "همچین کاربری وجود ندارد",
                icon: "error",
                buttons: "تلاش دوباره",
            }),
            console.log(isAuthenticated);
            

        }
        else {

            setIsAuthenticated(true),
            swal({
                title: "خوش آمدید",
                icon: "success",
                buttons: "ورود به پنل"
            }),
            console.log(isAuthenticated);
        }

        const result = await response.json();
        const firstObject = result[0]; // Access the first object
        const nameOfFirstObject = firstObject.token;
        // Handle successful login (e.g., store tokens, redirect, etc.)  

        console.log(nameOfFirstObject);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        alert('logout shod')
        // Optionally call your API to log out  
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};