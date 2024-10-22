import React, { useEffect, useState } from 'react'
import authBg from '../../assets/images/auth-bg.png'
import { Link, useParams } from 'react-router-dom'
import { fetchDocCategories, fetchDocChildItems } from '../../api/fetchData'
// import Swal from 'sweetalert2';

const Documents = () => {

    const [categories, setCategories] = useState([]);
    const { params } = useParams()

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchDocCategories('main');
            setCategories(data);
        };
        loadCategories();
    }, []);


    return (

        <div className="mt-lg-5 mt-5 m-auto row row-cols-lg-3 row-cols-md-3 row-cols-2 w-100">

            {categories.length ? (
                categories.map((category) => (

                    <Link to={`/dentists/documents/${category.id}`} className="p-2" key={category.id}>
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
                <p className='text-light'>No categories found</p>
            )}


        </div>
    )
}

export default Documents
