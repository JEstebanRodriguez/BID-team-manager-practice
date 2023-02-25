import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/PlayerRoute.js'
dotenv.config()

import dbConnect from './config/connect.js'
dbConnect()

const app = express()
const PORT = process.env.PORT || 6000

app.use(cors())
app.use(express.json())
app.use( '/api', routes )

app.listen( PORT, () => console.log(`Server listening in the port ${PORT}`) )