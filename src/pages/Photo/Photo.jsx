import React from 'react'
import './photos.css'
import authBg from '../../assets/images/auth-bg.png'
import prevIco from '../../assets/images/prev-ico.png'
import searchIco from '../../assets/images/search-ico.png'
import logOutIco from '../../assets/images/logout-ico.png'
import GoBackHistory from '../../components/goBackHistory/GoBackHistory'
import SearchBar from '../../components/searchBar/SearchBar'

import { ImageGallery } from "react-image-grid-gallery";
import { Link } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import { fetchPhotoItems } from '../../api/fetchData'



const Photo = () => {

    const { id } = useParams();
    const [categories, setCategories] = useState();
    const [pdfBlob, setPdfBlob] = useState(null);


    console.log(id);

    useEffect(() => {

        const loadCategories = async () => {
            const data = await fetchPhotoItems(id);
            setCategories(data);
            console.log(data);

        };
        loadCategories();

        console.log(data);

        
        
    }, []);
    // Cleaning the data to ensure it matches the format of your static array
    const imagesArray = categories.map((image) => ({

        alt: image.alt.trim() || "Default alt text",    // Remove extra spaces or characters, fallback if missing
        caption: image.caption || "No caption",        // Fallback for caption
        src: image.src || "https://profile.kfp-dental.com/storage/Image(Avita,Kfp)/CIDPA/FBIV8254-min.JPG",         // Fallback for src
        
    }));

    [
        {
            "alt": "َAlt",
            "caption": "Photo test",
            "src": "https://profile.kfp-dental.com/storage/Image(Avita,Kfp)/CIDPA/FBIV8254-min.JPG"
        },
        {
            "alt": "photo 2",
            "caption": "photo 2",
            "src": "https://profile.kfp-dental.com/storage/Image(Avita,Kfp)/CIDPA/IMG_0921-min.JPG"
        }
    ]

    // const imagesArray = [
    //     {
    //         alt: "Image1's alt text",
    //         caption: "Image1's description",
    //         src: 'https://profile.kfp-dental.com/account/exida_1.JPG',
    //     },
    //     {
    //         alt: "Image2's alt text",
    //         caption: "Image2's description",
    //         src: "https://profile.kfp-dental.com/account/exida_2.JPG",
    //     },
    //     {
    //         alt: "Image3's alt text",
    //         caption: "Image3's description",
    //         src: "https://profile.kfp-dental.com/account/exida_3.JPG",
    //     },
    //     {
    //         alt: "Image3's alt text",
    //         caption: "Image3's description",
    //         src: "https://profile.kfp-dental.com/account/exida_4.JPG",
    //     },
    //     {
    //         alt: "Image3's alt text",
    //         caption: "Image3's description",
    //         src: "https://profile.kfp-dental.com/account/exida_5.JPG",
    //     },
    //     {
    //         alt: "Image3's alt text",
    //         caption: "Image3's description",
    //         src: "https://profile.kfp-dental.com/account/exida_6.JPG",
    //     },

    // ];


    return (
        <section className="dentist-container" style={{ backgroundImage: `url(${authBg})` }}>
            <div className="row dentist-div justify-content-center">

                {/* <!-- side bar --> */}
                <div className="col-lg-5 d-flex align-items-center justify-content-center dentist-left-side flex-column d-none d-lg-flex">
                    <div className="mt-lg-5 m-auto">
                        <GoBackHistory title={'Dentist Page'} />
                        <Link to={"/dentists/photos"} href=""
                            className="d-flex align-items-center justify-content-center flex-column mt-lg-5 gap-lg-5 gap-3 large-shadow br-25">
                            {/* <!-- category box --> */}
                            <div className="category-box photo-category-box position-relative">
                                <h3 className="fw-extrabold position-absolute">Exida</h3>
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
                    <div className="mt-lg-5 mt-5 m-auto  w-100">

                        <ImageGallery
                            imagesInfoArray={imagesArray}
                            columnCount={"auto"}
                            columnWidth={230}
                            gapSize={24}
                        />


                        {/* <!-- Gallery --> */}
                        {/* <div className="row">
                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                    className="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                                    className="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                    className="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />

                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                    className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                            </div>
                        </div> */}
                        {/* <!-- Gallery --> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Photo
