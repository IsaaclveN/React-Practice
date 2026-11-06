import api from './axios';

export const getProducts = async () => {
    return api.get('v1/products/');
};