import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
});

export default mongoose.models.User || mongoose.model('User', userSchema);
