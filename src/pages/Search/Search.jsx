import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import authBg from '../../assets/images/auth-bg.png'
import arrowRightLight from '../../assets/images/arrow-right-light.png'
import GoBackHistory from '../../components/goBackHistory/GoBackHistory';
import LogOut from '../../components/logOut/LogOut';
import SearchBar from '../../components/searchBar/SearchBar';
import Document from '../Document/DocumentPage';
import Video from '../Video/Video';
import Menu from '../../components/menu/Menu';

// Import Login Images
import avitaLoginPic_desktop from '../../assets/images/login/avitaLoginPic_desktop-min.png';
import avitaLoginPic_mobile from '../../assets/images/login/avitaLoginPic_mobile-min.png';

import kfpLoginPic_desktop from '../../assets/images/login/kfpLoginPic_desktop-min.png';
import kfpLoginPic_mobile from '../../assets/images/login/kfpLoginPic_mobile-min.png';
import { useUserType } from '../../context/userContext';
import axios from 'axios';

const Search = () => {
    const [data, setData] = useState({ document: [], photo: [], video: [] });
    const [searchQuery, setSearchQuery] = useState('');
    const { query } = useParams()
    // const userType = useUserType();  // Access the userType from the context
    const [loading, setLoading] = useState(true); // Track loading state

    // Use effect to handle loading state
    // useEffect(() => {
    //     if (userType) {
    //         setLoading(false); // Once userType is available, stop loading
    //         console.log('false shod');

    //     }
    // }, [userType]);

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


    // Create FormData and append the search query
    const formData = new FormData();
    formData.append('title', query);
    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');  // Get the token from localStorage
            try {
                const response = await fetch('https://profile.kfp-dental.com/api/search', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'token': token  // Send token in headers
                    }
                });
                const result = await response.json();
                setData(result[0]); // Assuming the first item contains documents, photos, and videos
                console.log(result);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [query]);

    return (
        <section className="dentist-container" style={{ backgroundImage: `url(${authBg})` }}>
            <div className="row dentist-div justify-content-center">

                {/* Sidebar */}
                <div className="col-lg-5 d-flex align-items-center justify-content-center dentist-left-side flex-column side-bar-desktop d-none d-lg-flex">
                    <div className="mt-lg-5 m-auto">
                        <GoBackHistory title={'Dentist Page'} />

                        <Link to="/dentists/documents" className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                            <div className="category-box doc-category-box position-relative">
                                <h3 className="fw-extrabold position-absolute">All Documents</h3>
                            </div>
                        </Link>

                        <Link to="/dentists/photos" className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                            <div className="category-box photo-category-box position-relative">
                                <h3 className="fw-extrabold position-absolute">All Photos</h3>
                            </div>
                        </Link>

                        <Link to="/dentists/videos" className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                            <div className="category-box video-category-box position-relative">
                                <h3 className="fw-extrabold position-absolute">All Videos</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Main Content */}

                {/* <!-- heading --> */}
                {
                    userType === 'KFP' ? (
                        <img src={kfpLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="KFP user" />
                    ) : userType === 'AVITA' ? (
                        <img src={avitaLoginPic_mobile} className="profile-img dentist-img-mobile d-lg-none" alt="Avita user" />
                    ) : null // Render nothing if userType is neither 'KFP' nor 'Avita'
                }

                <div className="col-lg-7 d-flex flex-column align-items-start justify-content-start p-lg-5 dentist-container-results">
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="d-flex flex-column justify-content-center align-items-start">
                            <h3 className="fs-2 f-inter text-light fw-extrabold d-flex align-items-center justify-content-center gap-2">
                                Search Results:
                            </h3>
                            <Menu />
                        </div>

                        <SearchBar />

                        {/* <div className="search-container ms-auto me-lg-4">
                            <div className="input-group page-search-container rounded d-flex align-items-center justify-content-center gap-2">
                                <input
                                    type="search"
                                    className="form-control search-input search-input-v2"
                                    placeholder="Type something..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <span className="search-btn" id="search-addon">
                                    <img src={searchIco} alt="Search Icon" />
                                </span>
                            </div>
                        </div> */}
                        <LogOut />
                    </div>

                    {/* Documents */}
                    <div className="mt-lg-5 m-auto row row-cols-1 w-100">
                        <div className="row w-100 mt-lg-4 mt-5">
                            <h3 className="col-12 text-light fw-bold">Documents:</h3>
                            <div className="row">
                                {data.document.length > 0 ? (
                                    data.document.map((doc) => (

                                        <Document file={doc.file} title={doc.title} />
                                        // <div className="p-2 col-lg-4" key={doc.id}>
                                        //     <div className="card">
                                        //         <img src={doc.cover} className="card-img-top" alt={doc.title} />
                                        //         <div className="card-body">
                                        //             <h5 className="card-title">{doc.title}</h5>
                                        //             <Link to={`/dentists/document/${doc.id}`} className="card-textّ text-end">
                                        //                 <small className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
                                        //                     See Details
                                        //                     <img src={arrowRightLight} alt="arrow" />
                                        //                 </small>
                                        //             </Link>
                                        //         </div>
                                        //     </div>
                                        // </div>
                                    ))
                                ) : (
                                    <p className="text-light">No documents found.</p>
                                )}
                            </div>
                        </div>

                        {/* Photos */}
                        <div className="row w-100 mt-lg-4 mt-5">
                            <h3 className="col-12 text-light fw-bold">Photos:</h3>
                            <div className="row">
                                {data.photo.length > 0 ? (
                                    data.photo.map((photo) => (
                                        <div className="p-2 col-lg-4" key={photo.id}>
                                            <div className="card">
                                                <img src={photo.cover} className="card-img-top" alt={photo.alt} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{photo.title}</h5>
                                                    <Link to={`/dentists/photos/categoryItems/${photo.category_id}`} className="card-textّ text-end">
                                                        <small className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
                                                            See Details
                                                            <img src={arrowRightLight} alt="arrow" />
                                                        </small>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-light">No photos found.</p>
                                )}
                            </div>
                        </div>

                        {/* Videos */}
                        <div className="row w-100 mt-lg-4 mt-5">
                            <h3 className="col-12 text-light fw-bold">Videos:</h3>
                            <div className="row">
                                {data.video.length > 0 ? (
                                    data.video.map((video) => (

                                        <Video videSrc={video.file} title={video.title} desc={video.desc} />
                                        // <div className="p-2 col-lg-4" key={video.id}>
                                        //     <div className="card">
                                        //         <img src={video.cover} className="card-img-top" alt={video.title} />
                                        //         <div className="card-body">
                                        //             <h5 className="card-title">{video.title}</h5>
                                        //             <Link to={`/dentists/videos/${video.id}`} href={video.file} target="_blank" rel="noopener noreferrer" className="card-textّ text-end">
                                        //                 <small className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
                                        //                     See Details
                                        //                     <img src={arrowRightLight} alt="arrow" />
                                        //                 </small>
                                        //             </Link>
                                        //         </div>
                                        //     </div>
                                        // </div>
                                    ))
                                ) : (
                                    <p className="text-light">No videos found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;
