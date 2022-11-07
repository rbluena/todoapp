import { Document } from 'mongoose';

export interface TodoDocument extends Document {
	title: string;
	description?: string;
	board?: string;
	attachments: [];
}
