import { Router } from 'express'
import { hashString, verifyHash } from '../utils/hash'
import { UserModel } from '../database/schema'

export const userRouter = Router()


// signup and signin logic 

userRouter.post('/signup', validate, async (req, res) => {
	const { username, password, email } = req.body
	const hashedPassword = hashString(password)

	try {
		await UserModel.create({
			username, password: hashedPassword, email,
		})

		res.status(200).json({
			message: "user signed up ",
		})
	} catch (e) {
		res.status(401).json({
			message: 'User already exits',
		})
	}
})

userRouter.post('/signin', validate, async (req, res) => {
	const { username, password } = req.body

	try {
		const data = await UserModel.findOne({
			username,
		})

		const result = await verifyHash(password, data.password)
		if (result) {
			// const token = 'hello'
			res.status(200).json({
				message: "sigined in ",
				//token,
			})
			return
		}

		res.json({
			message: 'Incorrect password',
		})

	} catch (e) {
		res.status(401).json({
			message: 'Please signup first ',
		})
	}
})

