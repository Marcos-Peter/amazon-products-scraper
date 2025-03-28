import express from 'express';

import scrapeController from '@/controllers/scrape-controller';

export const app = express();

app.use(express.json());
app.get('/api/scrape', scrapeController.scrape);
