import React from 'react'
import logoutIco from '../../assets/images/logout-ico.png'
import { useNavigate } from 'react-router-dom';

const LogOut = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');

        // Optionally, clear other user data from localStorage or context

        // Redirect to the login page
        navigate('/');
    };

    return (
        <button onClick={handleLogout} type="submit" className="sweet-btn sweet-btn-v2">
            <span className='d-none d-lg-block'>
                Logout
            </span>
            <img src={logoutIco} alt="" />
        </button>
    )
}

export default LogOut