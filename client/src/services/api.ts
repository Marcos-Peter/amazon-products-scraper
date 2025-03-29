import axios from 'axios';

import { ProductsList } from '@/types/products';

const API_URL = 'http://localhost:3333/api/scrape';

export const fetchProducts = async (keyword: string): Promise<ProductsList> => {
    try {
        const response = await axios.get(API_URL, { params: { keyword } });

        return response.data;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        throw new Error('Failed to fetch products');
    }
};
