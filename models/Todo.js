const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create ninja Schema & model
const TodoSchema = new Schema({
    text: {
        type:String
    },
    status: {
        type:String
    }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
