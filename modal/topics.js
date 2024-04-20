var mongoose = require("mongoose");

var topicSchema = new mongoose.Schema({
    topics : {
            
    }
    
}, { timestamps: true });

const collection = mongoose.model('credentials', loginSchema);

module.exports = collection;