const express = require('express');
const router = express.Router();

const requestListController = require('../controllers/requestItemListController');
const verifyToken = require('../middlewares/authMiddleware');
const authozizeRoles = require('../middlewares/roleMiddleware');

// Create a new item request list - accessible by authenticated users
router.post('/', verifyToken, authozizeRoles('user'), requestListController.createItemRequestList);

// Get all request lists - accessible by manager and admin (adjust as needed)
router.get('/', verifyToken, authozizeRoles('manager', 'admin'), requestListController.getAllItemRequestLists);

// Get a specific request list by ID - accessible by authenticated users
router.get('/:id', verifyToken, authozizeRoles('user'), requestListController.getItemRequestListById);

// Update a request list - accessible by managers/admins (or by owner depending on your logic)
router.put('/:id', verifyToken, authozizeRoles('manager', 'admin'), requestListController.updateItemRequestList);

// Delete a request list - admin only
router.delete('/:id', verifyToken, authozizeRoles('admin'), requestListController.deleteItemRequestList);

module.exports = router;
