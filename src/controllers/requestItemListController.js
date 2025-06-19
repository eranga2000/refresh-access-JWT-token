const ItemRequestList = require('../models/itemRequestListModel'); // Adjust the path based on your structure

// Create a new item request list
const createItemRequestList = async (req, res) => {
  try {
    const {
      userId,
      reqId,
      listName,
      projectName,
      dueDate,
      priority,
      status,
      listItems
    } = req.body;

    const newRequestList = new ItemRequestList({
      userId,
      reqId,
      listName,
      projectName,
      dueDate,
      priority,
      status,
      listItems
    });

    const savedRequestList = await newRequestList.save();
    res.status(201).json(savedRequestList);
  } catch (error) {
    console.error('Error creating request list:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all item request lists (optionally filter by userId)
const getAllItemRequestLists = async (req, res) => {
  try {
    const { userId } = req.query;

    const filter = userId ? { userId } : {};

    const requestLists = await ItemRequestList.find(filter).populate('userId', 'name email');
    res.status(200).json(requestLists);
  } catch (error) {
    console.error('Error fetching request lists:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a specific request list by ID
const getItemRequestListById = async (req, res) => {
  try {
    const { id } = req.params;
    const requestList = await ItemRequestList.findById(id).populate('userId', 'name email');

    if (!requestList) {
      return res.status(404).json({ message: 'Request list not found' });
    }

    res.status(200).json(requestList);
  } catch (error) {
    console.error('Error fetching request list by ID:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
const updateItemRequestList = async (req, res) => {
  try {
    const updated = await ItemRequestList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Request list not found' });
    }
    res.status(200).json({ message: 'Request list updated', data: updated });
  } catch (error) {
    res.status(400).json({ message: 'Error updating request list', error: error.message });
  }
};

// Delete request list
const deleteItemRequestList = async (req, res) => {
  try {
    const deleted = await ItemRequestList.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Request list not found' });
    }
    res.status(200).json({ message: 'Request list deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting request list', error: error.message });
  }
};
module.exports = {
  createItemRequestList,
  getAllItemRequestLists,
  getItemRequestListById,
  updateItemRequestList,    
  deleteItemRequestList    
};
