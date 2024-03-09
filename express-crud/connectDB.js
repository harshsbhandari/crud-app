const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Database connected successfully!")
    }
    catch (error) {
        console.error("Error while connecting database", error.message)
        process.exit(1)
    }
}

module.exports = connectDB