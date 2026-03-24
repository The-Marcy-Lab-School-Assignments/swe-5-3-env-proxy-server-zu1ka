//////////////////////////
// Imports
//////////////////////////
require('dotenv').config();

const path = require('path');
const express = require('express');

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToFrontend);

app.use(serveStatic);
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.get('/api/gifs', async (req, res) => {
    try {
        const response = await axios.get('https://api.giphy.com/v1/gifs/trending', {
            params: {
                api_key: process.env.GIPHY_API_KEY,
                limit: 10,
                rating: 'g'
            }
        });

        res.json(response.data); // send trending GIFs
    } catch (error) {
        res.status(503).json(error);
    }
});
//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 