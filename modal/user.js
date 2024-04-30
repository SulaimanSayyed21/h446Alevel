var mongoose = require("mongoose");
var loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    results : [{
        lessonName : { type: String, required: true},
        timeStamp: { type: Date, default: Date.now },
        totalScore : { type: Number, required: true },
        points: [Number] 
    }]

}, { timestamps: true });
const collection = mongoose.model('credentials', loginSchema);
module.exports = collection;
