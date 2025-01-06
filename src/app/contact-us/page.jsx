'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (e.g., send to an API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 p-4">
      <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
      <p className="mb-6">We'd love to hear from you! Whether you have a question, feedback, or need support, feel free to get in touch with us. Our team is here to assist you.</p>

      {submissionStatus && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-200 rounded">
          {submissionStatus}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded w-full dark:bg-medium border-2 dark:border-gray-500/50">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded dark:text-black"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded dark:text-black"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full mt-2 p-2 border border-gray-300 rounded dark:text-black"
            placeholder="Write your message here"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full p-2 bg-blue-500 text-white font-semibold rounded ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p className="mb-4">If you prefer, you can reach us directly through the following methods:</p>
        <ul className="list-inside list-disc mb-6">
          <li>Email: <a href="mailto:ganesham029@gmail.com" className="text-blue-500">support@ringtonesglitch.com</a></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
