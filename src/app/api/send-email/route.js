// app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse JSON body from the request
    const { firstName, lastName, email, phoneNumber, selectedDate } = await request.json();

    // Create a transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Destination email (could be different)
      subject: 'New Form Submission',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nDate: ${selectedDate}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    // Log and respond with error message
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
  }
}
console.log('Email User:', process.env.EMAIL_USER);
