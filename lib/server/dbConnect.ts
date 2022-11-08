import mongoose from 'mongoose';

const isDevelopment = process.env.NODE_ENV === 'development';

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local'
	);
}

let cached: any = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
	if (isDevelopment) {
		if (cached.conn) {
			return cached.conn;
		}

		if (!cached.promise) {
			const opts = {
				bufferCommands: false,
			};

			cached.promise = await mongoose.connect(MONGODB_URI, opts);
		}

		try {
			cached.conn = cached.promise;
			mongoose.set('debug', true);
		} catch (error) {
			cached.promise = null;
			throw error;
		}
	} else {
		const opts = {
			bufferCommands: false,
		};

		return mongoose.connect(MONGODB_URI, opts);
	}

	return cached.conn;
}

export default dbConnect;
