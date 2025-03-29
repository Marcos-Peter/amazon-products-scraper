import { fetchProducts } from '@/services/api';
import { ProductsList } from '@/types/products';
import { useState } from 'react';

type UseScraperReturn = {
    data: ProductsList;
    loading: boolean;
    error: string | null;
    searchProducts: (keyword: string) => Promise<void>;
};

export const useScraper = (): UseScraperReturn => {
    const [data, setData] = useState<ProductsList>({
        items: [],
        totalItems: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const searchProducts = async (keyword: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const result = await fetchProducts(keyword);
            setData(result);
        } catch (err) {
            setError(`Failed to load products: ${err}`);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, searchProducts };
};
