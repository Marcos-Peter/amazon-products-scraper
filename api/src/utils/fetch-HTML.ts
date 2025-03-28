import axios from 'axios';

type fetchHTMLType = Promise<string>;

export const fetchHTML = async (url: string): fetchHTMLType => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (widows NT 10.0; Win64; x64)',
                'Accept-Language': 'en-US,en;q=0.9',
                Referer: 'https://www.amazon.com/',
            },
        });

        return data;
    } catch (error) {
        throw new Error(`Failed to fetch: ${error}`);
    }
};
