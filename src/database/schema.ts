import mongoose, { Types } from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export interface User {
	username: string,
	email: string,
	password: string,
}

export interface Tag {
	title: string,
}

export interface Content {
	link: string,
	description: string,
	tags: Object[],
	userId: Object,
}

export interface Link {
	link: string,
	sharable: boolean,
	userId: Object,
}

type Object = Types.ObjectId


const UserSchema = new Schema<User>({
	username: { type: String, unique: true, required: true },
	password: { type: String, unique: true, required: true },
	email: { type: String, unique: true, required: true },
})

const TagSchema = new Schema<Tag>({
	title: { type: String, unique: true, required: true },
})

const ContentSchema = new Schema<Content>({
	link: { type: String, unique: false, required: true },
	description: { type: String, unique: false, required: false },
	tags: [{ type: ObjectId, ref: 'Tags' }],
	userId: { type: ObjectId, reff: 'users', required: true },
})

const LinkSchema = new Schema<Link>({
	link: { type: String, required: true, },
	sharable: { type: Boolean, require: true },
	userId: { type: ObjectId, ref: 'users', required: true },
})

export const UserModel = mongoose.model<User>('users', UserSchema)
export const ContenModel = mongoose.model<Content>('content', ContentSchema)
export const LinkModel = mongoose.model<Link>('links', LinkSchema)
export const TagModel = mongoose.model<Tag>('Tags', TagSchema)
