import { Schema, model, models } from 'mongoose';
import { StatusDocument } from './status.interface';

const boardSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: String,
	userId: String,
	statuses: {
		type: [{ name: String }],
		default: [{ name: 'NONE'}]
	},
});

export default models.Board<StatusDocument> || model<StatusDocument>('Board', boardSchema);
