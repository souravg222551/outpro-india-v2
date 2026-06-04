import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  try {
    // 1. Parse the incoming data from the frontend
    const body = await req.json();
    const { name, email, message } = body;

    // 2. Basic validation to make sure no fields are empty
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' }, 
        { status: 400 }
      );
    }

    // 3. Connect to the database safely
    await dbConnect();

    // 4. Save the new lead to MongoDB using our Schema
    const newContact = await Contact.create({
      name,
      email,
      message
    });

    // 5. Send a success message back to the frontend
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' }, 
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Server error. Please try again later.' }, 
      { status: 500 }
    );
  }
}