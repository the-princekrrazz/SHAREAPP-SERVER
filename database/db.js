import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb://the_princekrrazz:YND4cLfG8UYWK6NS@ac-bz0fexy-shard-00-00.hyhcdbc.mongodb.net:27017,ac-bz0fexy-shard-00-01.hyhcdbc.mongodb.net:27017,ac-bz0fexy-shard-00-02.hyhcdbc.mongodb.net:27017/?ssl=true&replicaSet=atlas-pcqac3-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Fileshareing-App`;
    try {
        await mongoose.connect(MONGO_URI,{useNewUrlParser:true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;