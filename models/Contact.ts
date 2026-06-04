import mongoose, { Schema, Document } from 'mongoose';

// Define the TypeScript interface for our Contact data
export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

// Define the Mongoose Schema
const ContactSchema: Schema = new Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'] 
  },
  message: { 
    type: String, 
    required: [true, 'Message is required'] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Export the model (checking if it already exists to prevent Next.js hot-reload errors)
export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);