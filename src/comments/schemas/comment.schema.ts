import { Schema, Document } from 'mongoose';

export const CommentSchema = new Schema({
  userId: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface Comment extends Document {
  userId: string;
  content: string;
  createdAt: Date;
}
