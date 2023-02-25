import mongoose from "mongoose"

mongoose.set('strictQuery', false)

export default async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log(`Database connected: ${mongoose.connection.name}`)
    } catch (err) {
        console.error(err)
    }
}