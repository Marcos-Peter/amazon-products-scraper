import cors from 'cors';
import express from 'express';

import scrapeController from '@/controllers/scrape-controller';

export const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.get('/api/scrape', scrapeController.scrape);
