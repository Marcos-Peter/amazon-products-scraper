export type ProductsList = {
    items: ProductListItem[];
    totalItems: number;
};

export type ProductListItem = {
    title: string;
    rating: string;
    reviews: string;
    image: string;
};
