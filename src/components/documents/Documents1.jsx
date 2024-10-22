import React, { useEffect, useState } from 'react'
import authBg from '../../assets/images/auth-bg.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'react-bootstrap';
// import Swal from 'sweetalert2';

const Documents1 = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [children, setChildren] = useState([]);
    const [selectedChild, setSelectedChild] = useState(null);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [subItems, setSubItems] = useState(); // State for sub-items

    // Fetch categories on component load
    useEffect(() => {
        fetchCategories();
    }, []);


    const fetchCategories = async () => {
        try {
            const response = await axios.post('https://profile.kfp-dental.com/api/doc/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    const fetchChildren = async (categoryId) => {
        try {
            const formData = new FormData();
            formData.append('category_id', categoryId);
            const response = await axios.post('https://profile.kfp-dental.com/api/doc/categories/child', formData);
            setChildren(response.data);
            setSelectedCategory(categoryId);
            setSelectedChild(null); // Reset child and below when a new category is selected
            setItems([]);
            setSubItems([]);

        } catch (error) {
            console.error('Error fetching children:', error);
        }
    };


    const fetchItems = async (childId) => {
        try {
            const formData = new FormData();
            formData.append('category_id', childId);
            const response = await axios.post('https://profile.kfp-dental.com/api/doc/category/items', formData);
            setItems(response.data);
            setSelectedChild(childId);
            setSelectedItem(null); // Reset item and sub-items when a new child is selected
            setSubItems([]);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };


    const fetchSubItems = async (itemId) => {
        try {
            const formData = new FormData();
            formData.append('id', itemId);
            const response = await axios.post('https://profile.kfp-dental.com/api/doc/items', formData);
            setSelectedItem(itemId);
            setSubItems(response.data); // Set sub-items for the selected item
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching sub-items:', error);
        }
    };


    return (

        <div className="mt-lg-5 mt-5 m-lg-auto row row-cols-lg-3 row-cols-md-2 w-100">


            {categories.map((category) => (

                <div className="p-2" key={category.id } onClick={() => fetchChildren(category.id)}>
                    <div className="card">
                        <img src={authBg}
                            className="card-img-top" alt="..." />
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
                </div>

            ))}


            {/* Child List */}
            
            {children.length > 0 && (
                <div>
                    <h2>Children</h2>
                    <ul>
                        {children.map((child) => (
                            <li key={child.id} onClick={() => fetchItems(child.id)}>
                                {child.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            {/* Item List */}
            {items.length > 0 && selectedChild && (
                <div>
                    <h2>Items</h2>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id} onClick={() => fetchSubItems(item.id)}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            {/* Sub-Items List (shown only for selected item) */}
            {subItems && selectedItem && (
                <div>
                    <h2>Sub-Items</h2>
                    <ul>


                            <>
                            <li key={subItems.id}>{subItems.title}</li>
                            <Link to={`/dentists/document/${subItems.id}`}>hell</Link>
                            </>
                    </ul>
                </div>
            )}


        </div>
    )
}

export default Documents1
