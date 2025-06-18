const express = require('express');
const router = express.Router();

const requestController = require('../controllers/requestController');
const verifyToken = require('../middlewares/authMiddleware');
const authozizeRoles = require('../middlewares/roleMiddleware');

// Create a new item request - accessible by all authenticated users
router.post('/', verifyToken, authozizeRoles('user',), requestController.createRequest);

// Get all item requests - only admin and manager can view all
router.get('/', verifyToken, authozizeRoles('user'), requestController.getAllRequests);

// Get a specific request by ID - accessible by all authenticated users
router.get('/:id', verifyToken, authozizeRoles('user'), requestController.getRequestById);

// Update a request - usually manager or admin (depends on your logic)
router.put('/:id', verifyToken, authozizeRoles('user'), requestController.updateRequest);

// Delete a request - usually admin only
router.delete('/:id', verifyToken, authozizeRoles('user'), requestController.deleteRequest);

module.exports = router;
