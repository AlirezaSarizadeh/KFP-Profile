import React, { useEffect, useState } from 'react'
import authBg from '../../assets/images/auth-bg.png'
import { Link, useParams } from 'react-router-dom'
import { fetchDocCategories, fetchDocChildItems, fetchDocSubItems } from '../../api/fetchData'
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2';

const DocChildItems = () => {

    const { child } = useParams();
    const [categories, setCategories] = useState([]);
    const [docSubItems, setDocSubItems] = useState([]);


    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchDocChildItems(child);
            if (data[0].status == 204) {
                swal({
                    title: "Not Found",
                    text: "There is No Items ",
                    icon: "error",
                }).then(() => {
                    window.history.back();
                });
            }
            else {

                setCategories(data);
            }
            console.log(child);
            console.log(data);
        };
        loadCategories();


        // Load Subs



        const loadDocSubItems = async () => {
            const dataSub = await fetchDocSubItems(child);

            setDocSubItems(dataSub);

            console.log(dataSub);
        };
        loadDocSubItems();

    }, []);


    return (

        <>
            <div className="mt-lg-5 mt-5 m-auto row row-cols-lg-3 row-cols-md-3 row-cols-2 w-100 ">

                {categories.length ? (
                    categories.map((category) => (

                        <Link to={`/dentists/documents/categoryItems/${category.id}`} className="p-2" key={category.id}>
                            <div className="card">
                                <img src={category.image}
                                    className="card-img-top" alt={category.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.title}</h5>
                                    <span className="card-textّ text-end">
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
                        // <div key={category.id}>
                        //     <Link to={`/category/${category.id}`}>{category.name}</Link>
                        // </div>
                    ))
                ) : (
                    <p></p>
                )}

            </div>

            {/* Doc Sub Items */}

            {
                docSubItems.length ? (
                    <h3 className='text-light text-start pt-5 px-3'>Sub Items :</h3>

                ) : (
                    ''
                )
            }
            <div className="mt-lg-5 mt-5 m-lg-auto row row-cols-lg-3 row-cols-md-2 w-100">


                {docSubItems.length ? (
                    docSubItems.map((category) => (
                        <>

                            <div className="p-2" key={category.id}>
                                <div className="card">
                                    <img src={authBg}
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{category.title}  </h5>
                                        <Link to={`/dentists/document/${category.id}`} className="card-textّ text-end">
                                            <small
                                                className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
                                                See
                                                Details

                                                <img src="./assets/images/arrow-right-light.png" alt="" />
                                            </small>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                        // <div key={category.id}>
                        //     <Link to={`/category/${category.id}`}>{category.name}</Link>
                        // </div>
                    ))
                ) : (
                    <p></p>
                )}

            </div>
        </>
    )
}

export default DocChildItems
