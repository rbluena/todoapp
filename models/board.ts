import mongoose from 'mongoose';

const { Schema } = mongoose;

const boardSchema = new Schema(
	{
		name: {
			/* Title of the board */

			type: String,
			required: [true, 'Please provide a name of  the board'],
		},
		description: {
			/*  */

			type: String,
		},
		columns: [{ name: String }],
	},
	{ timestamps: true }
);

export default mongoose.models.Board || mongoose.model('Board', boardSchema);
