import React, { useEffect, useState } from 'react'
import authBg from '../../assets/images/auth-bg.png'
import { Link, useParams } from 'react-router-dom'
import { fetchDocCategories, fetchDocChildItems, fetchDocSubItems } from '../../api/fetchData'
import Document from '../Document/DocumentPage'
// import Swal from 'sweetalert2';

const DocSubItems = ({file}) => {

    const { item } = useParams();
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchDocSubItems(item);
            if (data.length == 0) {
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
            console.log(item);
            console.log(data);
        };
        loadCategories();
    }, []);


    return (

        <div className="mt-lg-5 mt-5 m-auto row row-cols-lg-3 row-cols-md-3 row-cols-2 w-100">

            {categories.length ? (
                categories.map((category) => (

                    <Document key={category.id} file={category.file} title={category.title} />

                    // <Link to={`/dentists/document/${category.id}`} className="p-2" key={category.id}>
                    //     <div className="card">
                    //         <img src={category.image}
                    //             className="card-img-top" alt={category.title} />
                    //         <div className="card-body">
                    //             <h5 className="card-title">{category.title} {category.id}</h5>
                    //             <span className="card-textّ text-end">
                    //                 <small
                    //                     className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
                    //                     See
                    //                     Details

                    //                     <img src="./assets/images/arrow-right-light.png" alt="" />
                    //                 </small>
                    //             </span>
                    //         </div>
                    //     </div>
                    // </Link>
                    // <div key={category.id}>
                    //     <Link to={`/category/${category.id}`}>{category.name}</Link>
                    // </div>
                ))
            ) : (
                <p></p>
            )}

            {/* <div className="p-2">

                <div className="card">
                    <img src={authBg}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Single Page</h5>
                        <Link to={'2'} className="card-textّ text-end">
                            <small
                                className="primaryColorDark d-flex align-items-center justify-content-end gap-2 fw-extrabold">
                                See
                                Details

                                <img src="./assets/images/arrow-right-light.png" alt="" />
                            </small>
                        </Link>
                    </div>
                </div>

            </div> */}


        </div>
    )
}

export default DocSubItems
