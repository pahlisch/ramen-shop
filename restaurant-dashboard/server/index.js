import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '.env');
dotenv.config({path: envPath});


// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

// Function to get restaurants from the database
async function getRestaurants() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM restaurants');
        connection.end();
        return rows;
    } catch (err) {
        console.error(err);
        return [];
    }
}

async function getRestaurantDetails(id) {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [row] = await connection.query(`SELECT * FROM restaurants WHERE id =${id}`);
        connection.end();
        return row;
    } catch (err) {
        console.error(err);
        return [];
    }
}

// Endpoint to get the list of restaurants
app.get('/restaurants', async (req, res) => {
    const q = req.query.q?.toLowerCase() || '';
    const restaurants = await getRestaurants();
    const results = restaurants.filter(restaurant => restaurant.restaurant_name.toLowerCase().includes(q));
    res.send(results);

});

app.get('/restaurants/:id', async function (req, res) {
    console.log(req.params)
    console.log("--------------")
    const restaurantDetails = await getRestaurantDetails(req.params.id);
    res.send(restaurantDetails)
  })

// Use the environment variable PORT or default to 8080
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port http://localhost:${port}/restaurants`));