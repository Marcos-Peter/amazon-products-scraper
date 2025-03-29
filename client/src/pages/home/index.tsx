import React, { useState } from 'react';

import { Button } from '@/components/button/button.component';
import { Card } from '@/components/card/card.component';
import { Input } from '@/components/custom-input';
import { useScraper } from '@/hooks/useScraper';
import { Search } from 'lucide-react';

const Home: React.FC = () => {
    const [keyword, setKeyword] = useState<string>('');
    const { data, loading, searchProducts } = useScraper();

    const handleSearch = (): void => {
        if (keyword.trim()) searchProducts(keyword);
    };

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
                            <Input.Field className='w-lg' onChange={(e) => setKeyword(e.target.value)} />
                        </Input.Root>
                        <Button onClick={handleSearch} loading={loading} className='max-w-fit text-xl'>
                            Search
                        </Button>
                    </div>
                </article>
                <article className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 justify-start align-top p-8'>
                    {data.totalItems > 0 ? (
                        data.items.map((item, index) => {
                            return (
                                <Card key={index} imageUrl={item.image} title={item.title} rating={item.rating} reviews={item.reviews} />
                            );
                        })
                    ) : (
                        <div className='col-span-2'>
                            <p className='text-gray-300'>Unable to fin any products. Use another keyword or try again later.</p>
                        </div>
                    )}
                </article>
            </section>
        </main>
    );
};

export default Home;
