// session.js
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const connectMongoDB = require('../dbconfig/connection');

function sessionMiddleware() {
    const store = new MongoDBStore({
        uri: process.env.MONGODB_URI,
        collection: 'sessions',
    });
    const mongoSession = session({
        secret: 'aaadfeadfdkfjadfkwerewoiadfkjdkfjweirefj',
        resave: false,
        saveUninitialized: true,
        store: store,
        cookie: { maxAge: 60000 * 60 }
    });

    return mongoSession;
}
module.exports = sessionMiddleware;
