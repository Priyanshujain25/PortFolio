import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import profileRoutes from './routes/profileRoutes.js';
import path from "path";
import { fileURLToPath } from "url";
import mongoose from 'mongoose';


import Profile from './models/profileModel.js';
import { profileData } from './data/seedData.js'; 

dotenv.config();
connectDB();

const app = express();

// Use CORS - configure for your frontend URL in production
app.use(cors({
    origin: "https://portfolio-nbhc.onrender.com",
    credentials: true, // allow frontend to send cookies
  }));

app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  // Serve static files from the React app's 'dist' folder
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // The "catchall" handler for any request that doesn't match an API route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// API Routes
app.use('/', profileRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT||3000 ;

app.listen(PORT,"0.0.0.0", () => console.log(`Server running on port ${PORT}`));




dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    await Profile.deleteMany(); // Clear existing profiles
    await Profile.create(profileData);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();