import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Elle23:Rosa2359@cluster0.kznw6.mongodb.net/?retryWrites=true&w=majority');
        console.log(`Mongodb connected to ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

export default connectDB;