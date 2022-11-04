import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema({
	title: {
		/* Title of this todo */

		type: String,
		required: [true, 'Please provide a title of todo'],
	},
	description: {
		/* Description of the todo item */

		type: String,
	},
	completed: {
		/* Checking whether to is marked as completed or not */

		type: Boolean,
	},
});

export default mongoose.models.Todo || mongoose.model('Todo', todoSchema);
