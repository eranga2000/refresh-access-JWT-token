const express= require('express');
const cookieParser = require("cookie-parser");
const dotenv= require('dotenv').config();
const dbConnect = require('./config/dbConnect'); 
// Importing the database connection function
const userRoutes = require('./routes/userRoutes'); // Importing user routes
//importing packages
const authRoutes = require('./routes/authRoutes'); 
const requestRoutes = require('./routes/itemRequestRoutes'); // Importing item request routes
// Importing authentication routes
dbConnect(); // Establishing the database connection
const cors = require('cors');
const ItemRequest = require('./models/itemRequestModel');
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
app.use('/api/requests', requestRoutes); // Using item request routes
//start the server
const PORT= process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
