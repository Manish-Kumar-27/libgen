const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    if (!query) return res.status(400).json({ error: 'Missing query parameter' });

    const searchUrl = `http://libgen.rs/search.php?req=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(searchUrl);
        const $ = cheerio.load(response.data);

        const rows = $('table.c tr');
        const results = [];

        rows.each((i, row) => {
            if (i === 0) return; // Skip table header
            const cols = $(row).find('td');
            if (cols.length >= 10) {
                results.push({
                    title: $(cols[2]).text().trim(),
                    author: $(cols[1]).text().trim(),
                    publisher: $(cols[3]).text().trim(),
                    year: $(cols[4]).text().trim(),
                    pages: $(cols[5]).text().trim(),
                    language: $(cols[6]).text().trim(),
                    size: $(cols[7]).text().trim(),
                    extension: $(cols[8]).text().trim(),
                    mirrorLink: $(cols[9]).find('a').eq(0).attr('href'),
                });
            }
        });

        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from LibGen' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
