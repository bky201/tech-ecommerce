import mongoose from 'mongoose';

const connetToDatabase = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

export default connetToDatabase;