"use server";

import { draftMode } from "next/headers";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function disableDraftMode() {
  "use server";
  await Promise.allSettled([
    (await draftMode()).disable(),
    // Simulate a delay to show the loading state
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]);
}

export async function submitEmail(formData: FormData) {
  "use server";
  
  const email = formData.get('email') as string;
  
  if (!email) {
    throw new Error('Email is required');
  }

  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    throw new Error('Email service is not configured. Please contact support.');
  }

  // Get next Wednesday's date
  const today = new Date();
  const daysUntilWednesday = (3 - today.getDay() + 7) % 7;
  const nextWednesday = new Date(today);
  nextWednesday.setDate(today.getDate() + (daysUntilWednesday === 0 ? 7 : daysUntilWednesday));
  
  const sessionDate = nextWednesday.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  try {
    console.log(`Attempting to send email to: ${email}`);
    
    const result = await resend.emails.send({
      from: 'AI Founder Hour <noreply@mail.fullpilot.com>',
      to: [email],
      subject: 'You\'re signed up for AI Founder Hour!',
      text: `Hey! You're signed up for the session on ${sessionDate} from 1-2 PM Pacific Time.

We'll send you the Zoom link closer to the session date.

Thanks for joining AI Founder Hour!

- The AI Founder Hour Team`
    });

    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', error.message);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
}
