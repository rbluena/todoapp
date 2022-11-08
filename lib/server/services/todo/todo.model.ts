import { Schema, model, models } from 'mongoose';
import { TodoDocument } from './todo.interface';

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
		status: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		attachments: [{ name: String, path: String }],
	},
	{ timestamps: true }
);

export default models.Todo<TodoDocument> || model<TodoDocument>('Todo', todoSchema);
