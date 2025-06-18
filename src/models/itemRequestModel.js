const mongoose= require('mongoose');
const itemRequestSchema = new mongoose.Schema({
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
 
  itemName:{
    type: String,
    required: true,
  },
  quantity:{
    type:String,
    required:true,
  },
  itemDescription: {  
    type: String,
    required: false,
  },
  projectName:{
    type: String,
    required: true,
  },
  dueDate:{
    type: Date,
    required: true, 
  },
    priority: {
    type: String,
    enum: ['Low', 'High', 'Urgent','Medium'],
    default: 'Low'
  },

  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
}, {
  timestamps: true, 
});

 const ItemRequest = mongoose.model('ItemRequest', itemRequestSchema);
 module.exports = ItemRequest;
