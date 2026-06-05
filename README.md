# Outpro.India - Corporate Digital Presence Platform

## Project Overview
Modern, high-performance corporate website designed for lead generation and brand credibility.

## Tech Stack
* **Frontend**: React.js / Next.js
* **Backend**: Node.js (Next.js API Routes)
* **Database**: MongoDB
* **Deployment**: Vercel

## Technical Documentation
* **Architecture**: A modular Next.js application using Server-Side Rendering (SSR) for performance and Client Components for interactive elements like the Contact Form.
* **Database Schema**: The `Contact` model stores: `name`, `email`, `message`, and `timestamp`.

## User Manual
1. **Managing Content**: Update titles and descriptions directly in the components located in `components/`.
2. **Managing Leads**: Access your MongoDB Atlas dashboard to view form submissions collected via the contact form.
3. **Analytics**: To enable tracking, replace the `G-XXXXXXXXXX` ID in your `layout.tsx` file with your valid Google Analytics 4 Measurement ID.

## Maintenance Plan
* **Updates**: Run `npm install` periodically to ensure dependencies are secure.
* **Backups**: Utilize MongoDB Atlas built-in automated backup features.