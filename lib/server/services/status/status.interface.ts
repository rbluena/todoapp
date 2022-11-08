import { Document } from 'mongoose';

export interface StatusDocument extends Document {
	name: string;
	description: string;
	userId: string;
	statuses: [];
}
