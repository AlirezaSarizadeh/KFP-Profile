import React, { useEffect, useState } from 'react'
import './DentistPage.css'
import { Helmet } from 'react-helmet';
import authBg from '../../assets/images/auth-bg.png'
import videoImg from '../../assets/images/search-ico.png'
import photoImg from '../../assets/images/search-ico.png'
import docImg from '../../assets/images/search-ico.png'
import logoutIco from '../../assets/images/logout-ico.png'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Videos from '../../components/videos/Videos';
import Documents from '../../components/documents/Documents';
import SearchBar from '../../components/searchBar/SearchBar';
import Menu from '../../components/menu/Menu';
import GoBackHistory from '../../components/goBackHistory/GoBackHistory';
import LogOut from '../../components/logOut/LogOut';


// Import Login Images
import avitaLoginPic_desktop from '../../assets/images/login/avitaLoginPic_desktop-min.png';
import avitaLoginPic_mobile from '../../assets/images/login/avitaLoginPic_mobile-min.png';

import kfpLoginPic_desktop from '../../assets/images/login/kfpLoginPic_desktop-min.png';
import kfpLoginPic_mobile from '../../assets/images/login/kfpLoginPic_mobile-min.png';
import { useUserType } from '../../context/userContext';
import axios from 'axios';



const DentistPage = () => {
    // const userType = useUserType();  // Access the userType from the context

    const location = useLocation();
    const [title, setTtitle] = useState('Documents')
    const [showInitial, setShowInitial] = useState(true);
    const [loading, setLoading] = useState(true); // Track loading state

    // let title;

    // Use effect to handle loading state
    // useEffect(() => {
    //     if (userType) {
    //         setLoading(false); // Once userType is available, stop loading
    //         console.log('false shod');
    //     }
    // }, [userType]);

    // const userType = useUserType();  // Access the userType from the context

    const [userType, setUserType] = useState(null);
    // const [loading, setLoading] = useState(true);

    // Function to fetch user type using the token from localStorage
    const fetchUserType = async () => {
        const token = localStorage.getItem('token');  // Get the token from localStorage

        if (token) {
            try {
                const response = await axios.post('https://profile.kfp-dental.com/api/user/check', {}, {
                    headers: {
                        'token': token
                    }
                });
                setUserType(response.data);  // Set userType from the API response
                console.log(response.data);
                if (response.data === 'token not valid') {
                    localStorage.removeItem('token');
                    window.location.href = 'https://profile.kfp-dental.com/profile';
                    alert('token expired')
                }

                setLoading(false);           // Set loading to false when userType is fetched
            } catch (error) {
                console.error('Error fetching user type:', error);
                setLoading(false);  // Even if there's an error, we stop loading
            }
        } else {
            setLoading(false);  // If no token, we stop loading
        }
    };

    // Effect to fetch the user type on initial load
    useEffect(() => {
        fetchUserType();
    }, []);


    useEffect(() => {
        switch (location.pathname) {
            case '/dentists/':
                setTtitle('Documents');


                break;
            case '/dentists/videos':
                setTtitle('Videos');
                setShowInitial(false);
                break;
            case '/dentists/photos':
                setTtitle('Photos');
                setShowInitial(false);
                break;
            case '/dentists/documents':
                setTtitle('Documents');
                setShowInitial(false);
                break;
            // default:
            //     setTtitle('Documents');
        }

    }, [location]); // Empty array means it runs only once

    return (
        <>
            <section className="dentist-container" style={{ backgroundImage: `url(${authBg})` }}>
                <div className="row dentist-div justify-content-center">

                    {/* Desktop Side Bar  */}


                    {/* <!-- side bar --> */}
                    <div className="col-lg-5 d-flex align-items-center justify-content-center dentist-left-side flex-column side-bar-desktop d-none d-lg-flex pb-lg-5 ">
                        <div className="mt-lg-5 m-auto">
                            <h3 className="fs-2 text-center fw-extrabold d-flex align-items-center justify-content-center gap-2">
                                <GoBackHistory />
                                <span className='pb-2'>
                                    Dentist Page
                                </span>
                            </h3>
                            <Link to={"documents"}
                                className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                                {/* <!-- category box --> */}
                                <div className="category-box doc-category-box position-relative">
                                    <h3 className="fw-extrabold position-absolute">Documents</h3>
                                </div>
                            </Link>
                            <Link to={"photos"}
                                className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                                {/* <!-- category box --> */}
                                <div className="category-box photo-category-box position-relative">
                                    <h3 className="fw-extrabold position-absolute">Photos</h3>
                                </div>
                            </Link>
                            <Link to={"videos"}
                                className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                                {/* <!-- category box --> */}
                                <div className="category-box video-category-box position-relative">
                                    <h3 className="fw-extrabold position-absolute">Videos</h3>
                                </div>
                            </Link>
                        </div>
                    </div>



                    {/* <!-- heading --> */}
                    {/* <img src={kfpLoginPic_mobile} className='dentist-img-mobile d-lg-none' alt="" /> */}

                    {/* Render only when userType is available */}

                    {
                        userType === 'KFP' ? (
                            <img src={kfpLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="KFP user" />
                        ) : userType === 'AVITA' ? (
                            <img src={avitaLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="Avita user" />
                        ) : null // Render nothing if userType is neither 'KFP' nor 'Avita'
                    }



                    < div
                        className="col-lg-7 d-flex flex-column align-items-start justify-content-start p-lg-5 dentist-container-results ">
                        <div className="d-flex align-items-center justify-content-between w-100">

                            <div className="d-flex flex-column justify-content-center align-items-start">

                                <h3
                                    className="fs-2 f-inter text-light fw-extrabold d-flex align-items-center justify-content-center gap-2">
                                    {title}
                                </h3>

                                <Menu />

                            </div>
                            <SearchBar />
                            <LogOut />
                        </div>

                        <Outlet />

                    </div>
                </div>
            </section >
        </>
    )
}

export default DentistPage