import { Router } from 'express'
import { hashString } from '../utils/hash'
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

