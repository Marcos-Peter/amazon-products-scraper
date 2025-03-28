import React from 'react';

import { Button } from '@/components/button/button.component';
import { Card } from '@/components/card/card.component';
import { Input } from '@/components/custom-input';
import { Search } from 'lucide-react';

const MOCKED_PRODUCT = {
    title: 'Knife Set, 7 Piece Sharp Chef Knife Set with Solid Wood Block, Unique One-Sided Magnetic Design, Full-tang Stainless Steel Knife Block Set for Home and Restaurants, Classic Elegant Black',
    rating: '4.6',
    reviews: '8 ',
    image: 'https://m.media-amazon.com/images/I/61TEwpB+T0L._AC_UL320_.jpg',
};

const Home: React.FC = () => {
    return (
        <main className='min-h-scree min-w-screen font-mono'>
            <section className='min-h-screen flex mx-auto flex-col max-w-2/3 pt-40 items-center'>
                <article className='flex flex-col gap-2 max-h-fit'>
                    <h1 className='font-semibold text-5xl dark:text-blue text-gray-700'>Search & Discover</h1>
                    <p className='text-lg dark:text-gray-300 text-gray-600'>
                        Enter a keyword to find relevant information from Amazon products database
                    </p>
                    <div className='flex flex-row max-w-4xl justify-center gap-2'>
                        <Input.Root>
                            <Input.Icon>
                                <Search />
                            </Input.Icon>
                            <Input.Field className='w-lg' />
                        </Input.Root>
                        <Button className='max-w-fit text-xl'>Search</Button>
                    </div>
                </article>
                <article className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 justify-start align-top p-8'>
                    <Card
                        imageUrl={MOCKED_PRODUCT.image}
                        title={MOCKED_PRODUCT.title}
                        rating={MOCKED_PRODUCT.rating}
                        reviews={MOCKED_PRODUCT.reviews}
                    />
                </article>
            </section>
        </main>
    );
};

export default Home;
