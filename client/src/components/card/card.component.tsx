import React, { useEffect, useState } from 'react';

type CardProps = {
    title: string;
    imageUrl: string;
    rating: string;
    reviews: string;
};

const MAX_TITLE_LENGTH = 120;

export const Card: React.FC<CardProps> = ({ title, imageUrl, rating, reviews }) => {
    const [displayTitle, setDisplayTitle] = useState(title);

    useEffect(() => {
        if (title.length > MAX_TITLE_LENGTH) {
            setDisplayTitle(title.slice(0, MAX_TITLE_LENGTH) + '...');
        }
    }, [title]);

    return (
        <div className='flex flex-row rounded-md bg-gray-100 h-56 w-full overflow-hidden cursor-pointer transition-all hover:shadow-md dark:hover:shadow-blue-50'>
            <div className='w-2/5 col-span-1'>
                <img className='rounded-l-md h-full w-full object-cover' src={imageUrl} alt={title} />
            </div>

            <div className='w-3/5 h-full flex flex-col p-4 pb-2'>
                <div className='h-full flex flex-col text-start justify-between'>
                    <h2 className='text-lg font-bold mb-2 text-gray-500' title={title}>
                        {displayTitle}
                    </h2>
                </div>
                <div className='flex items-center mb-2'>
                    <span className='text-yellow-500 font-bold'>{rating}</span>
                    <span className='text-gray-600 ml-1'>({reviews} reviews)</span>
                </div>
            </div>
        </div>
    );
};
