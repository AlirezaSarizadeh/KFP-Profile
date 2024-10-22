import React, { useContext, useState } from 'react'
import './auth.css'
import authBg from '../../assets/images/auth-bg.png'
import arrowRight_light from '../../assets/images/arrow-right-light.png'
import arrowRight_white from '../../assets/images/arrow-right-white.png'
import arrowRight_dark from '../../assets/images/arrow-right-dark.png'
import authImg from '../../assets/images/auth-img-x.png'
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/authContext'

import kfpLoginPic_desktop from '../../assets/images/login/kfpLoginPic_desktop-min.png';
import kfpLoginPic_mobile from '../../assets/images/login/kfpLoginPic_mobile-min.png';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError(null);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('https://profile.kfp-dental.com/api/login', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            // Check if the response is an array and access the first element
            const result = Array.isArray(data) ? data[0] : data;
            console.log(data);
            console.log(result);
            if (result.status === 203) {
                setError('Login failed. Please try again.');
                swal({
                    title: "Login Failed!",
                    text: "Email Or Password Is Incorrect",
                    icon: "error",
                }).then(() => {
                    navigate('/login-kfp'); // Redirect to dashboard
                });
            }
            else {


                localStorage.setItem('token', data[0].token); // Save token to localStorage
                swal({
                    title: "Welcome",
                    text: "Login Successful!",
                    icon: "success",
                }).then(() => {
                    navigate('/profile'); // Redirect to dashboard
                });
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <section className="auth-container" style={{ backgroundImage: `url(${authBg})` }}>
                <img src={kfpLoginPic_mobile} className=" d-lg-none dentist-img-mobile" alt="" style={{ borderRadius: '0 0 200px 200px' }} />
                <div className="row auth-div justify-content-center">
                    <div className="col-lg-5 d-none d-lg-flex">
                        <img src={kfpLoginPic_desktop} className="img-fluid w-75 m-auto auth-img " alt="" />
                    </div>
                    <div className="col-lg-5 d-flex flex-column align-items-start justify-content-lg-center justify-content-start">
                        <div className="d-flex flex-column">
                            <h2 className="fs-1 f-inter text-light fw-semibold my-3 my-lg-0">
                                Login To Your Account
                            </h2>
                            {/* <a href="#!" className="d-flex align-items-center justify-content-start gap-2 primaryColor f-inter my-lg-0">
                                Sign Up
                                <img src={arrowRight_light} alt="" />
                            </a> */}
                        </div>
                        <div className="mt-lg-5 inputs-container">
                            {/* <!-- <label for="exampleFormControlInput1" className="form-label">Email address</label> --> */}
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required className="form-control auth-input my-lg-3 my-3" id="1w"
                                    placeholder="Email" />
                                <input type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required className="form-control auth-input my-lg-3" id="1s"
                                    placeholder="Password" />
                                <button className="sweet-btn sweet-btn-v2 my-2 my-lg-0" type="submit"
                                >
                                    Login
                                    <img src={arrowRight_dark} alt="" />
                                </button>
                            </form>
                            {/* <a href="#!" className="d-flex align-items-center justify-content-start gap-2 text-light mt-lg-3 mt-2 ps-2">
                                Forget Password
                                <img src={arrowRight_white} alt="" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login