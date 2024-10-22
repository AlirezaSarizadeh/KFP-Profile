import React, { useEffect, useState } from 'react'
import authBg from '../../assets/images/auth-bg.png'
import logoImg from '../../assets/images/logo-img.png'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { fetchVideoCategories } from '../../api/fetchData';
const Videos = () => {


    const [categories, setCategories] = useState([]);
    const { params } = useParams()

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchVideoCategories('main');
            setCategories(data);
        };
        loadCategories();
    }, []);



    return (

        <div className="mt-lg-5 mt-5 m-auto row row-cols-lg-3 row-cols-md-3 row-cols-2 w-100">

            {categories.length ? (
                categories.map((category) => (

                    <Link to={`/dentists/videos/${category.id}`}  className="p-2" key={category.id}>
                        <div className="card">
                            <img src={category.image}
                                className="card-img-top" alt={category.title} />
                            <div className="card-body">
                                <h5 className="card-title">{category.title}</h5>
                                <span to={`/dentists/videos/${category.id}`} className="card-textّ text-end">
                                    <small
                                        className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
                                        See
                                        Details

                                        <img src="./assets/images/arrow-right-light.png" alt="" />
                                    </small>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p className='text-light'>No categories found</p>
            )}


        </div>

        // <>
        //     {loading ? (
        //         <h4 className='text-light'>Loading...</h4>
        //     ) : (


        //         <div className="mt-lg-5 mt-5 m-lg-auto row row-cols-lg-3 row-cols-md-2 w-100" >
        //             {/* {
        //                 posts.map(item => (

        //                     <div className="p-2" key={item.id}>
        //                         <div className="card">
        //                             <img src={item.image}
        //                                 className="card-img-top card-item-top-x" alt="..." />
        //                             <div className="card-body">
        //                                 <h5 className="card-title">{item.title}</h5>
        //                                 <Link to={`/dentists/videos/${item.id}`} className="card-textّ text-end">
        //                                     <small
        //                                         className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
        //                                         See
        //                                         Details

        //                                         <img src="./assets/images/arrow-right-light.png" alt="" />
        //                                     </small>
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                     </div>

        //                 ))

        //             } */}


        //             <div className="p-2">
        //                 <div className="card">
        //                     <img src={logoImg}
        //                         className="card-img-top card-item-top-x" alt="..." />
        //                     <div className="card-body">
        //                         <h5 className="card-title">Exhibition</h5>
        //                         <Link to={`/dentists/videos/1`} className="card-textّ text-end">
        //                             <small
        //                                 className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
        //                                 See
        //                                 Details

        //                                 <img src="./assets/images/arrow-right-light.png" alt="" />
        //                             </small>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="p-2">
        //                 <div className="card">
        //                     <img src={logoImg}
        //                         className="card-img-top card-item-top-x" alt="..." />
        //                     <div className="card-body">
        //                         <h5 className="card-title">Training</h5>
        //                         <Link to={`/dentists/videos/2`} className="card-textّ text-end">
        //                             <small
        //                                 className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
        //                                 See
        //                                 Details

        //                                 <img src="./assets/images/arrow-right-light.png" alt="" />
        //                             </small>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>


        //         </div>
        //     )}
        // </>


    )
}

export default Videos
