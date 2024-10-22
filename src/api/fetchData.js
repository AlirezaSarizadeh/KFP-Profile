// src/api/fetchData.js
import axios from 'axios';
// src/api/fetchData.js
import axiosInstance from './axiosInstance';

export const fetchDocCategories = async (id) => {
    const formData = new FormData();
    formData.append('id', id);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/doc/categories');
    return response.data;
};

export const fetchDocChildItems = async (categoryId) => {
    const formData = new FormData();
    formData.append('category_id', categoryId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/doc/categories/child', formData);
    return response.data;
};

export const fetchDocSubItems = async (itemId) => {
    const formData = new FormData();
    formData.append('category_id', itemId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/doc/category/items', formData);
    return response.data;
};

export const fetchDocItems = async (itemId) => {
    const formData = new FormData();
    formData.append('id', itemId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/doc/items', formData);
    return response.data;
};


// Videos Fetching


export const fetchVideoCategories = async (id) => {
    const formData = new FormData();
    formData.append('id', id);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/video/categories');
    return response.data;
};

export const fetchVideoChildItems = async (categoryId) => {
    const formData = new FormData();
    formData.append('category_id', categoryId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/video/categories/child', formData);
    return response.data;
};

export const fetchVideoSubItems = async (itemId) => {
    const formData = new FormData();
    formData.append('category_id', itemId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/video/category/items', formData);
    return response.data;
};

export const fetchVideoItems = async (itemId) => {
    const formData = new FormData();
    formData.append('id', itemId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/video/items', formData);
    return response.data;
};


// Photos Fetching


export const fetchPhotoCategories = async (id) => {
    const formData = new FormData();
    formData.append('id', id);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/photo/categories');
    return response.data;
};

export const fetchPhotoChildItems = async (categoryId) => {
    const formData = new FormData();
    formData.append('category_id', categoryId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/photo/categories/child', formData);
    return response.data;
};

export const fetchPhotoSubItems = async (itemId) => {
    const formData = new FormData();
    formData.append('category_id', itemId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/photo/category/items', formData);
    return response.data;
};

export const fetchPhotoItems = async (itemId) => {
    const formData = new FormData();
    formData.append('id', itemId);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/api/photo/items', formData);
    return response.data;
};

// Search 


export const searchItems = async (query) => {
    const formData = new FormData();
    formData.append('query', query);

    const response = await axiosInstance.post('https://profile.kfp-dental.com/serach', formData);
    return response.data;
};
