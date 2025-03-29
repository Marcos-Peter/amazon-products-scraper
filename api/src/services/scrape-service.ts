import type { ProductListItem, ProductsList } from '@/types/products';
import { fetchHTML } from '@/utils/fetch-HTML';
import { JSDOM } from 'jsdom';

const baseUrl = process.env.BASE_URL || 'https://www.amazon.com/s?k=';

export const scrapeAmazonProducts = async (keyword: string): Promise<ProductsList> => {
    const url = `${baseUrl}${encodeURIComponent(keyword)}`;
    const html = await fetchHTML(url);
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const products: ProductListItem[] = [];

    document.querySelectorAll('.s-main-slot .s-result-item').forEach((item) => {
        const title = item.querySelector('h2.a-size-base-plus')?.textContent?.trim() || 'N/A';
        const rating = item.querySelector('i.a-icon-star-small span.a-icon-alt')?.textContent?.split(' ')[0] || '0';
        const reviews = item.querySelector('.s-csa-instrumentation-wrapper a[aria-label*="ratings"]')?.textContent?.replace(',', '') || '0';
        const image = item.querySelector('.s-image')?.getAttribute('src') || 'N/A';
        let link = item.querySelector('a.a-link-normal.s-no-outline')?.getAttribute('href') || '#';

        if (title === 'N/A') return;
        if (link !== '#') {
            link = `https://www.amazon.com/${link}`;
        }

        products.push({ title, rating, reviews, image, link });
    });

    return { items: products, totalItems: products.length };
};
