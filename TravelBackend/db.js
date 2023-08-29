const mongoose = require('mongoose');
const dotenv=require('dotenv').config();


//dotenv.config();
const MONGODB_URI = 'mongodb+srv://janjuasoban846:IUJ058bjy0ZSga7O@cluster.7gaedve.mongodb.net/'
const mongoUrl = process.env.MONGO_URL;
//IUJ058bjy0ZSga7O
mongoose.connect(mongoUrl , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
