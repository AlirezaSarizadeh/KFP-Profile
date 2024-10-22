import React, { useEffect, useState } from 'react'
import authBg from '../../assets/images/auth-bg.png'
import { Link, useParams } from 'react-router-dom'
import { fetchDocCategories, fetchDocChildItems, fetchDocSubItems, fetchPhotoSubItems, fetchVideoSubItems } from '../../api/fetchData'
import { ImageGallery } from 'react-image-grid-gallery'
import './photoSubItems.css'
// import Swal from 'sweetalert2';

const PhotoSubItems = () => {

    const { item } = useParams();
    const [categories, setCategories] = useState([]);
    const [imagesArray, setImagesArray] = useState([]);
    const [loading, setLoading] = useState(true); // To handle loading state

    useEffect(() => {

        const loadCategories = async () => {
            const data = await fetchPhotoSubItems(item);
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

        };


        // Image Fetching

        const fetchImages = async () => {
            try {
                const data = await fetchPhotoSubItems(item);; // Replace with actual API URL

                // Check if data is an array and map only if it exists and is valid
                if (Array.isArray(data)) {
                    const cleanedImages = data.map((image) => ({
                        alt: image?.alt?.trim() || "Default alt text",    // Ensure alt is valid
                        caption: image?.caption || "No caption",          // Fallback for caption
                        src: image?.src || "default-image-url",           // Fallback for src
                    }));
                    setImagesArray(cleanedImages);
                    console.log(cleanedImages);

                } else {
                    console.error("Fetched data is not an array", data);
                }

            } catch (error) {
                console.error("Error fetching images:", error);
            } finally {
                setLoading(false);  // Set loading to false after fetching is complete
            }
        };




        fetchImages();
        loadCategories();
    }, []);

    // const imagesArray1 = [
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
    if (loading) {
        return <div className='text-light'>Loading images...</div>;  // Show a loading indicator while fetching
    }


    return (


        <div className="mt-5">
            <ImageGallery

                imagesInfoArray={imagesArray}
                columnCount={"auto"}
                columnWidth={230}
                gapSize={24}
            />
        </div>

    )
}

export default PhotoSubItems
