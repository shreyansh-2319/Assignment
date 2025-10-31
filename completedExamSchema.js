const mongoose = require('mongoose');
 
const completedExamSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    subject: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject',
        exam:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exam',
        }
    },
    selectedAnswers: [{
        type: String,
        required: true,
    }],
    score: {
        type: Number,
        required: true,
    },
    attemptedQuestions: {
        type: Number,
        required: true,
    },
});
 
module.exports = mongoose.model('completedExam', completedExamSchema);
 