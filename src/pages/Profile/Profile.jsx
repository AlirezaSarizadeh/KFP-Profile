import React, { useEffect, useState } from 'react'
import './profile.css'
import authBg from '../../assets/images/auth-bg.png'
import authImg from '../../assets/images/auth-img-x.png'
import authImgMob from '../../assets/images/auth-img-x-mobile.png'
import userIco from '../../assets/images/user-ico.png'
import avatar_Mobile from '../../assets/images/avatar_Mobile.png'
import searchIco from '../../assets/images/search-ico.png'
import logOutIco from '../../assets/images/logout-ico.png'
import { Link } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import logoutIco from '../../assets/images/logout-ico.png'
import SearchBar from '../../components/searchBar/SearchBar'
import LogOut from '../../components/logOut/LogOut';



import kfpLoginPic_desktop from '../../assets/images/login/kfpLoginPic_desktop-min.png';
import kfpLoginPic_mobile from '../../assets/images/login/kfpLoginPic_mobile-min.png';
import avitaLoginPic_desktop from '../../assets/images/login/avitaLoginPic_desktop-min.png';
import avitaLoginPic_mobile from '../../assets/images/login/avitaLoginPic_mobile-min.png';

import { useUserType } from '../../context/userContext'
import axios from 'axios'


const Profile = () => {

    // const userType = useUserType();  // Access the userType from the context

    const [userType, setUserType] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to fetch user type using the token from localStorage
    const fetchUserType = async () => {
        const token = localStorage.getItem('token');  // Get the token from localStorage

        if (token) {
            try {
                const response = await axios.post('https://profile.kfp-dental.com/api/user/check', {}, {
                    headers: {
                        token: token
                    }
                });
                setUserType(response.data);  // Set userType from the API response
                console.log(response.data);

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



    return (
        <>
            <section className="profile-container" style={{ backgroundImage: `url(${authBg})` }}>

                {/* {userType === 'KFP' ?

                    <img src={kfpLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="" /> : (
                        <img src={avitaLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="" />
                    )
                } */}

                {/* Render only when userType is available */}

                {
                    userType === 'KFP' ? (
                        <img src={kfpLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="KFP user" />
                    ) : userType === 'AVITA' ? (
                        <img src={avitaLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="Avita user" />
                    ) : null // Render nothing if userType is neither 'KFP' nor 'Avita'
                }

                <div className="row profile-div justify-content-center">

                    {/* <!-- side bar --> */}
                    <div className="col-lg-5 d-flex align-items-center justify-content-center profile-left-side flex-column side-bar-desktop d-none d-lg-flex py-lg-5" >

                        {/* {userType === 'KFP' ?

                            <img src={kfpLoginPic_desktop} className="img-fluid w-75 m-auto profile-img d-none d-lg-block" style={{ borderRadius: '70px' }} alt="" /> : (
                                <img src={avitaLoginPic_desktop} className="img-fluid w-75 m-auto profile-img d-none d-lg-block" style={{ borderRadius: '70px' }} alt="" />
                            )
                        } */}

                        {/* Render only when userType is available */}
                        {/* {

                            userType === 'KFP' ? (
                                <img src={kfpLoginPic_desktop} className="img-fluid w-75 m-auto profile-img d-none d-lg-block" style={{ borderRadius: '70px' }} alt="KFP user" />
                            ) : (
                                <img src={avitaLoginPic_desktop} className="img-fluid w-75 m-auto profile-img d-none d-lg-block" style={{ borderRadius: '70px' }} alt="Avita user" />
                            )
                        } */}

                        {
                            userType === 'KFP' ? (
                                <img src={kfpLoginPic_desktop} className="img-fluid w-75 m-auto profile-img d-none d-lg-block" style={{ borderRadius: '70px' }} alt="KFP user" />
                            ) : userType === 'AVITA' ? (
                                <img src={avitaLoginPic_desktop} className="img-fluid w-75 m-auto profile-img d-none d-lg-block" style={{ borderRadius: '70px' }} alt="Avita user" />
                            ) : null // Render nothing if userType is neither 'KFP' nor 'Avita'
                        }
                        {/* <img src={kfpLoginPic_desktop} className="img-fluid w-75 m-auto profile-img d-none d-lg-block" style={{ borderRadius: '70px' }} alt="" /> */}
                    </div>

                    {/* <!-- heading --> */}
                    <div className="col-lg-7 d-flex flex-column align-items-start justify-content-start p-lg-5 dentist-container-results ">
                        <div className="d-flex align-items-center justify-content-between w-100">

                            <div className="d-flex justify-content-center align-items-center gap-1">

                                <img src={avatar_Mobile} alt="" />

                                <h3
                                    className="fs-2 f-inter text-light fw-extrabold d-flex align-items-center justify-content-center gap-2 mb-0">
                                    Welcome
                                </h3>

                                {/* <Menu /> */}

                            </div>
                            <SearchBar />
                            <LogOut />
                        </div>
                        <div className="mt-lg-0 m-auto">
                            <Link to={'/dentists/documents'}
                                class="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3">
                                {/* <!-- category box --> */}
                                <div className="category-box doc-category-box position-relative">
                                    <h3 className="fw-extrabold position-absolute">Documents</h3>
                                </div>
                            </Link>
                            <Link to={'/dentists/photos'}
                                className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3">
                                {/* <!-- category box --> */}
                                <div className="category-box photo-category-box position-relative">
                                    <h3 className="fw-extrabold position-absolute">Photos</h3>
                                </div>
                            </Link>
                            <Link to={'/dentists/videos'}
                                className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3">
                                {/* <!-- category box --> */}
                                <div className="category-box video-category-box position-relative">
                                    <h3 className="fw-extrabold position-absolute">Videos</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
