const ItemRequest = require('../models/itemRequestModel');

// Create a new item request
const createRequest = async (req, res) => {
  try {
    const itemRequest = new ItemRequest(req.body);
    await itemRequest.save();
    res.status(201).json({ message: 'Request created successfully', data: itemRequest });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create request', error: error.message });
  }
};

// Get all item requests
const getAllRequests = async (req, res) => {
  try {
    const requests = await ItemRequest.find().populate('userId');
    res.status(200).json({ data: requests });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error: error.message });
  }
};

// Get a single item request by ID
const getRequestById = async (req, res) => {
  try {
    const request = await ItemRequest.findById(req.params.id).populate('userId');
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json({ data: request });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching request', error: error.message });
  }
};

// Update an item request by ID
const updateRequest = async (req, res) => {
  try {
    const updated = await ItemRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json({ message: 'Request updated successfully', data: updated });
  } catch (error) {
    res.status(400).json({ message: 'Error updating request', error: error.message });
  }
};

// Delete an item request by ID
const deleteRequest = async (req, res) => {
  try {
    const deleted = await ItemRequest.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.status(200).json({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting request', error: error.message });
  }
};


module. exports = {
  createRequest,
  getAllRequests,
  getRequestById,
  updateRequest,
  deleteRequest,

};