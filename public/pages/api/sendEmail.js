// Use this public key in your client-side code
const PUBLIC_KEY = 'B3an_5DJdoY7b257T'; // Replace with your actual public key

import emailjs from 'emailjs-com';

// Function to send email
const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_h6z2zx8',       // Replace with your actual EmailJS service ID
      'template_syajxla',      // Replace with your actual EmailJS template ID
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone,
        to_name: 'Buhle Ngqongwa',  // Replace with your name or recipient name
        message: formData.message,
        service: formData.service,
      },
      PUBLIC_KEY                // Use the public key here
    );
    console.log('Email sent successfully:', result);
    return { success: true, result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Example usage in your component
const handleSubmit = async (e) => {
  e.preventDefault();
  const result = await sendEmail(formData);
  if (result.success) {
    alert('Message sent successfully!');
  } else {
    alert('Error sending message.');
  }
};
