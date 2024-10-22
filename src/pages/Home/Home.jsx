import React from 'react'
import './home.css'
import homeBg from '../../assets/images/home-bg.png'
import logoImg from '../../assets/images/logo-img.png'
import arrowRight from '../../assets/images/arrow_right.png'
import { Link } from 'react-router-dom'
const Home = () => {

    // Check if token is available in localStorage (i.e., user is logged in)
    const token = localStorage.getItem('token');

    // Conditional link target based on whether the user is logged in or not
    const linkTarget1 = token ? "/profile" : "/login-kfp";
    const linkTarget2 = token ? "/profile" : "/login-avita";

    return (
        <>
            <section className="home-container">
                <div className="position-relative home-div" style={{ backgroundImage: `url(${homeBg})` }}>
                    <div className="logo-container">
                        <a href="#!">
                            <img className="logo-img" src={logoImg} alt="" />
                        </a>
                    </div>
                    <div className="home-content d-flex flex-column align-items-center justify-content-center text-light">
                        <h1 className="text-uppercase fw-normal home-h1 mb-0">
                            <q>
                                Kousha Fan Pars is the largest producer of dental equipment and supplies in the country
                            </q>
                        </h1>
                    </div>
                    <div className="home-btns d-flex align-items-center justify-content-start mt-lg-4 mt-2 gap-lg-3 gap-2">
                        <Link to={linkTarget2} className="sweet-btn">
                            Dentists
                            <img src={arrowRight} alt="" />
                        </Link>
                        <Link to={linkTarget1} className="sweet-btn">
                            Dental Technicals
                            <img src={arrowRight} alt="" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home