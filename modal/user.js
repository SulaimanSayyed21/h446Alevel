var mongoose = require("mongoose");

let localUri = 'mongodb://localhost:27017/vrusers';
let onlineUri = 'mongodb+srv://sulli:21March2004@usersname0.r4rl0vd.mongodb.net/?retryWrites=true&w=majority&appName=usersName0';

// Use a try-catch block to handle any connection errors
try {
    mongoose.connect(onlineUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', function() {
        console.log("Database connected!");
    });
} catch (err) {
    console.error("Error connecting to MongoDB:", err);
}

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
    }
}, { timestamps: true });

const collection = mongoose.model('credentials', loginSchema);

module.exports = collection;
