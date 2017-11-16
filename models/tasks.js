var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  title: String,
  priority: {type: Number, default: 0},
});

mongoose.model('Task', TaskSchema);
