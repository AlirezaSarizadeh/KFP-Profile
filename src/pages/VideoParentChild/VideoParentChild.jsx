import React, { useEffect, useState } from 'react'
// import './videos.css'
import authBg from '../../assets/images/auth-bg.png'

import searchIco from '../../assets/images/search-ico.png'
import videoCover from '../../assets/images/video-cover.png'
import logOutIco from '../../assets/images/logout-ico.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import VideoPlayer from '../../components/videoPlayer/VideoPlayer'
import GoBackHistory from '../../components/goBackHistory/GoBackHistory'
import SearchBar from '../../components/searchBar/SearchBar'
import Menu from '../../components/menu/Menu'

const Video = () => {


    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({});
    let { id } = useParams()

    useEffect(() => {

        const loadPost = async () => {
            // Till the data is fetch using API 
            // the Loading page will show. 
            setLoading(true);

            // Await make wait until that 
            // promise settles and return its result 
            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            );

            // After fetching data stored it in posts state. 

            setPost(response.data);


            // Closed the loading page 
            setLoading(false);
        };

        // Call the function 
        loadPost();

    }, []);

    return (
        <section className="dentist-container" style={{ backgroundImage: `url(${authBg})` }}>
            <div className="row dentist-div justify-content-center">

                {/* <!-- side bar --> */}
                <div className="col-lg-5 d-flex align-items-center justify-content-center dentist-left-side flex-column d-none d-lg-flex">
                    <div className="mt-lg-5 m-auto">
                        <GoBackHistory title={'Dentist Page'} />
                        <Link to={"/dentists/videos"} href=""
                            className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                            {/* <!-- category box --> */}
                            <div className="category-box video-category-box position-relative">
                                <h3 className="fw-extrabold position-absolute">Videos</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* <!-- heading --> */}
                <div
                    className="col-lg-7 d-flex flex-column align-items-start justify-content-start p-lg-5 dentist-container-results ">
                    <div className="d-flex align-items-center justify-content-between w-100">

                        <div className="d-flex flex-column justify-content-center align-items-start">

                            <h3
                                className="fs-2 f-inter text-light fw-extrabold d-flex align-items-center justify-content-center gap-2">
                                <span className='history-800-hidden'>
                                    <GoBackHistory title={''} />
                                </span>
                                <span className='d-none d-lg-block'>
                                    Sina Center
                                </span>
                                <span className='d-lg-none pb-2'>
                                    Back
                                </span>
                            </h3>
                            <Menu />

                        </div>
                        <SearchBar />
                        <button type="submit" className="sweet-btn sweet-btn-v2">
                            <span className='d-none d-lg-block'>
                                Logout
                            </span>
                            <img src={logOutIco} alt="" />
                        </button>
                    </div>
                    <div className="mt-lg-5 mt-5 row row-cols-1 w-100 justify-content-center">

                        {
                            loading ? (
                                <h4 className='text-light'>Loading...</h4>
                            ) : (
                                <>

                                    <div className="row video-box col-12 my-lg-4 my-2">
                                        <div className="col-lg-12">
                                            {/* <img className="img-fluid w-100" src={videoCover} alt="" /> */}
                                            <VideoPlayer videoSrc="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4" />
                                        </div>
                                        <div className="col-lg-8">

                                            <div className="video-body mt-lg-3">
                                                <h5 className="card-title text-light fs-3 fw-bold">{post.title}</h5>
                                                <p className="card-text text-light opacity-75 mt-lg-3 mt-2">
                                                    {post.description}
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row video-box col-12 my-lg-4 my-2">
                                        <div className="col-lg-12">
                                            {/* <img className="img-fluid w-100" src={videoCover} alt="" /> */}
                                            <VideoPlayer videoSrc="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4" />
                                        </div>
                                        <div className="col-lg-8">

                                            <div className="video-body mt-lg-3">
                                                <h5 className="card-title text-light fs-3 fw-bold">{post.title}</h5>
                                                <p className="card-text text-light opacity-75 mt-lg-3 mt-2">
                                                    {post.description}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            )
                        }

                        {/* <!-- video --> */}
                        {/* <div className="row video-box col-12 my-lg-4 my-2">
                            <div className="col-lg-6">
                                <img className="img-fluid w-100" src={videoCover} alt="" />
                            </div>
                            <div className="col-lg-6">

                                <div className="video-body">
                                    <h5 className="card-title text-light fs-3 fw-bold">Card title</h5>
                                    <p className="card-text text-light opacity-75">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam consequuntur
                                        sapiente asperiores blanditiis possimus ducimus eos fugit sit ratione provident
                                        incidunt illo! Cumque.
                                    </p>
                                </div>

                            </div>
                        </div> */}
                        {/* <!-- video --> */}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
