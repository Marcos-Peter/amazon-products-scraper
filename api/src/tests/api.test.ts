import request from 'supertest';

import { app } from '@/app';
import type { ProductListItem } from '@/types/products';
import { describe, expect, test } from 'bun:test';

describe('Scrape API', () => {
    test('Should return status 400 if no keyword is provided', async () => {
        const response = await request(app).get('/api/scrape');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    test('Should return scraped data for a valid keyword', async () => {
        const response = await request(app).get('/api/scrape/?keyword=mechanical%20keyboard');

        expect(response.status).toBe(200);
        expect(response.body.items).toBeInstanceOf(Array<ProductListItem>);
        expect(response.body.totalItems).toBeGreaterThan(0);
    });
});
