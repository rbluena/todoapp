import mongoose from 'mongoose';

const { Schema } = mongoose;

const todoSchema = new Schema(
	{
		title: {
			/* Title of this todo */

			type: String,
			required: [true, 'Please provide a title of todo'],
		},
		description: {
			/* Description of the todo item */

			type: String,
		},
		board: {
			type: Schema.Types.ObjectId,
		},
		attachments: {
			type: Array,

			default: [],
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Todo || mongoose.model('Todo', todoSchema);
