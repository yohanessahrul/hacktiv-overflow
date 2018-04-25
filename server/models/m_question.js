var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title cannot be empty']
    },
    content: {
        type: String,
        required: [true, 'content cannot be empty']
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true
})

var Question = mongoose.model('question', questionSchema)

module.exports = Question