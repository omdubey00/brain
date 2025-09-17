import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import { userRouter } from './routes/userRouter'
import { contentRouter } from './routes/contentRouter'

const app = express()
app.use(express.json())



app.use('/api/v1/user', userRouter)
app.use('/api/v1/content', contentRouter)


async function connect() {
	await mongoose.connect(`${process.env.MONGOOSE}`)
	console.log('connected to the database')
	app.listen(3000)
	console.log('listening on server on port 3000 ')
}
connect()
// here we go I am the best 
