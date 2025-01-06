// app/dmca/page.jsx

import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

const DmcaPage = () => {

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-4">DMCA Takedown Policy</h1>
      <p className="mb-6">
        At RingtonesGlitch, we take copyright infringement very seriously. If you believe that content on our website
        violates your copyright, you can submit a DMCA takedown notice. Below are the details of how we handle such
        requests.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Submitting a DMCA Takedown Notice</h2>
      <p className="mb-4">
        To file a DMCA takedown notice, please email us at <a href="mailto:ganesham029@gmail.com" className="text-blue-500">support@ringtonesglitch.com</a> with the following information:
      </p>
      <ul className="list-inside list-disc mb-6">
        <li>Your name, address, phone number, and email address.</li>
        <li>A description of the copyrighted work that is allegedly being infringed.</li>
        <li>A description of where the infringing content is located on our site (e.g., a link to the page or specific URL).</li>
        <li>A statement that you have a good faith belief that the content is infringing and that you are the copyright owner or authorized to act on behalf of the copyright owner.</li>
        <li>A statement under penalty of perjury that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
        <li>Your physical or electronic signature.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Counter-Notice Process</h2>
      <p className="mb-4">
        If you believe that your content was removed by mistake or misidentification, you can file a counter-notice. To do so,
        please email us at <a href="mailto:ganesham029@gmail.com" className="text-blue-500">support@ringtonesglitch.com</a> with the following information:
      </p>
      <ul className="list-inside list-disc mb-6">
        <li>Your name, address, phone number, and email address.</li>
        <li>A description of the material that was removed or disabled.</li>
        <li>A statement under penalty of perjury that you have a good faith belief that the content was removed as a result of a mistake or misidentification.</li>
        <li>Your physical or electronic signature.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <p className="mb-4">
        For any other questions regarding DMCA or copyright issues, please contact us at:
      </p>
      <ul className="list-inside list-disc mb-6">
        <li>Email: <a href="mailto:ganesham029@gmail.com" className="text-blue-500">support@ringtonesglitch.com</a></li>
        <li>Address: RingtonesGlitch, 123 Ringtone Street, City, Country</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
      <p className="mb-4">
        Please note that submitting a DMCA takedown notice is a legal process, and we reserve the right to remove content
        in accordance with the DMCA guidelines. If you believe a takedown notice is invalid or abusive, please reach out
        to us, and we will review your claim.
      </p>
    </div>
    </>
  );
};

export default DmcaPage;
