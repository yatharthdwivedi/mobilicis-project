import mongoose from 'mongoose';
import data from './sample_data.json' assert { type: "json" };
import dotenv from 'dotenv'

dotenv.config()

const dbUrl = process.env.MONGO

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const disconnectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB!');
  }
};

const userSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  income: String,
  city: String,
  car: String,
  quote: String,
  phone_price: String,
});

const User = mongoose.model('User', userSchema);

const loadSampleData = async () => {
  try {

    data.forEach(user=> {
        user.income = Number(user.income.replace('$','').trim())
    })

    await User.deleteMany();
    await User.insertMany(data);
    
    console.log('Sample Data Loaded to MongoDB!');
  } catch (error) {
    console.error('Error loading sample data:', error);
  }
};

connectDb()
  .then(loadSampleData)
  .then(disconnectDb)
  .catch((error) => console.error('Error:', error));
