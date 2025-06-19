const mongoose= require('mongoose');

const listItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  orderPlaced: {
    type: String,
    default: null,
  },
  orderArrived: {
    type: Boolean,
    default: null,
  },
  handedOver: {
    type: Boolean,
    default: null,
  }
}, { _id: false }); 

const itemRequestListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reqId: {
    type: String,
    unique: true,
    required: true,
  },
  listName: {
    type: String,
    required: true,
  },
 
 
  projectName: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true, 
  },
  priority: {
    type: String,
    enum: ['Low', 'High', 'Urgent', 'Medium'],
    default: 'Low'
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  listItems: {
    type: [listItemSchema],
    required: false,
  }


}, { timestamps: true });

const ItemRequestList = mongoose.model('ItemRequestList', itemRequestListSchema);
module.exports = ItemRequestList;