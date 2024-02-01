import express from "express";
import connectToMongo from './db.js'; 


const app = express();
const PORT = 3000;

// Use middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Define your routes and middleware here

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
