const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
   const connect= await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`MongoDB connected successfully: ${connect.connection.host},${connect.connection.name}`);

  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = dbConnect;