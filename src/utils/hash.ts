import bcrypt from 'bcrypt'


export async function hashString(password: string) {
	const value = await bcrypt.hash(password, 5)
	return value;
}

export async function verifyHash(password: string, hash: string) {
	const result = await bcrypt.compare(password, hash)
	return result;
}
