import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const LoginComponent = () => {





    const { login } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        // const credentials = {
        //     email: e.target.email.value,
        //     password: e.target.password.value,
        // };
        const formData = new FormData();  
        formData.append('email', e.target.email.value);  
        formData.append('password', e.target.password.value); 
        login(formData);
    };
    // const { logout } = useContext(AuthContext);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     logout();
    // };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" required />
            <input type="password" name="password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginComponent