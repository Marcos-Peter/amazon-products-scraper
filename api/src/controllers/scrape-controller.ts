import { scrapeAmazonProducts } from '@/services/scrape-service';
import type { Request, Response } from 'express';

const scrape = async (req: Request, res: Response): Promise<void> => {
    try {
        const { keyword } = req.query;

        if (!keyword || typeof keyword !== 'string') {
            res.status(400).json({ error: 'Missing information', message: 'Keyword is required' });
            return;
        }

        const data = await scrapeAmazonProducts(keyword);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', message: error });
    }
};

export default { scrape };
