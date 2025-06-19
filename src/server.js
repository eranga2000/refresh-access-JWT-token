const express= require('express');
const cookieParser = require("cookie-parser");
const dotenv= require('dotenv').config();
const dbConnect = require('./config/dbConnect'); 
const userRoutes = require('./routes/userRoutes'); 
const authRoutes = require('./routes/authRoutes'); 
const requestRoutes = require('./routes/itemRequestRoutes');
const requestListRoutes = require('./routes/itemRequestList'); // Importing item request list routes
// Importing item request routes
dbConnect(); // Establishing the database connection
const cors = require('cors');
const app= express();
app.use(cors({
  origin: "http://localhost:5173", // your frontend origin
  credentials: true // allow sending cookies
}))
app.use(cookieParser()); 

// Middleware
app.use(express.json());

app.use("/api/auth", authRoutes); // Using authentication routes
app.use("/api/users", userRoutes); // Using authentication routes
app.use('/api/users/requests/single', requestRoutes); // Using item request routes
app.use('/api/users/requests/list',requestListRoutes ); // Using item request routes
//start the server
const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
