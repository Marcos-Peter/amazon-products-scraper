import { scrapeAmazonProducts } from '@/services/scrape-service';
import { describe, expect, test } from 'bun:test';

import type { ProductListItem } from '@/types/products';

describe('Amazon Scraper Service', () => {
    test('Should return a list of products', async () => {
        const products = await scrapeAmazonProducts('mechanical keyboard');

        expect(products.items).toBeInstanceOf(Array<ProductListItem>);
        expect(products.totalItems).toBeGreaterThan(0);
        expect(products.items[0]).toHaveProperty('title');
    });
});
