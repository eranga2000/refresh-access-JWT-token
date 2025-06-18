const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles= require('../middlewares/roleMiddleware'); // Importing the role authorization middleware
// Importing the authentication middleware
const router = express.Router();

//only admin can access this route
router.get("/admin",verifyToken,authorizeRoles("admin") ,(req, res) => {
  res.json({ message: "Welcome Admin" });
});
//admin and manager can access this route
router.get("/manager", verifyToken,authorizeRoles("admin","manager") , (req, res) => {
  res.json({ message: "Welcome Manager" });
});
//all users can access this route
router.get("/user",verifyToken, authorizeRoles("user") , (req, res) => {
  res.json({ message: "Welcome User" });
});


module.exports = router;