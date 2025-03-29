import axios from 'axios';

type fetchHTMLType = Promise<string>;

export const fetchHTML = async (url: string): fetchHTMLType => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cache-Control': 'no-cache',
                Connection: 'keep-alive',
            },
        });

        return data;
    } catch (error) {
        throw new Error(`Failed to fetch: ${error}`);
    }
};
