import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())





async function connect() {
	await mongoose.connect(process.env.MONGOOSE)
	console.log('connected to the database')
	app.listen(3000)
	console.log('listening on server on port 3000 ')
}
connect()
