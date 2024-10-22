import React, { useState } from 'react'
import './auth.css'
import authBg from '../../assets/images/auth-bg.png'
import arrowRight_light from '../../assets/images/arrow-right-light.png'
import arrowRight_white from '../../assets/images/arrow-right-white.png'
import arrowRight_dark from '../../assets/images/arrow-right-dark.png'
import authImg from '../../assets/images/auth-img-x.png'



function Register() {


    // const [emailValue, setEmailValue] = useState('');
    // const handelEmailInput = (event) => {
    //     setEmailValue(event.target.value);
    //     console.log(emailValue)
    // };


    // get and post datas


    const [emailValue, setEmailValue] = useState('');
    const handelEmailInput = (event) => {
        setEmailValue(event.target.value);
        console.log(emailValue)
    };

    const [passwordValue, setPasswordValue] = useState('');
    const handlePasswordInput = (event) => {
        setPasswordValue(event.target.value);
        console.log(passwordValue)
    };

    const registerNewUser = (event) => {
        event.preventDefault();

        const newUserInfos = {
            emailValue,
            passwordValue
        };

        fetch(`http://localhost:4000/v1/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserInfos),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });

        console.log("User Register");
    };

    return (
        <>
            <section class="auth-container">
                <div class="row auth-div justify-content-center" style={{ backgroundImage: `url(${authBg})` }}>
                    <div class="col-lg-5">
                        <img src={authImg} class="img-fluid w-75 m-auto auth-img" alt="" />
                    </div>
                    <div class="col-lg-5 d-flex flex-column align-items-start justify-content-center">
                        <div class="d-flex flex-column">
                            <h2 class="fs-1 f-inter text-light fw-semibold">
                                Create Your Account
                            </h2>
                            <a href="#!" class="d-flex align-items-center justify-content-start gap-2 primaryColor f-inter">
                                Log In
                                <img src={arrowRight_light} alt="" />
                            </a>
                        </div>
                        <div class="mt-lg-5">
                            <input type="email" value={emailValue} onChange={handelEmailInput} class="form-control auth-input my-lg-3" id="exampleFormControlInput1"
                                placeholder="Email" />
                            <input type="password" value={passwordValue} onChange={handlePasswordInput} class="form-control auth-input my-lg-3" id="exampleFormControlInput1"
                                placeholder="Password" />
                            <button class="sweet-btn sweet-btn-v2" onClick={registerNewUser} type="submit">
                                Create
                                <img src={arrowRight_dark} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register