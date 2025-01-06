import Navbar from "@/components/Navbar/Navbar";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen text-gray-800 dark:bg-medium">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200 shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-4 text-center dark:bg-medium">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
            <p className="text-lg text-gray-600 mt-4 dark:text-white">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              Welcome to RingtonesGlitch. By accessing or using our platform, 
              you agree to comply with and be bound by the following terms. If 
              you do not agree to these terms, you may not use our services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              By using our platform, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Provide accurate information during registration or uploads.</li>
              <li>Refrain from uploading illegal, harmful, or copyrighted content without permission.</li>
              <li>Respect the rights of other users and refrain from engaging in any abusive behavior.</li>
              <li>Use the platform in compliance with applicable laws and regulations.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              All content provided on RingtonesGlitch, including but not limited to 
              text, images, and code, is protected by copyright and intellectual 
              property laws. You may not reproduce, distribute, or modify any 
              content without prior authorization.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. User-Generated Content</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              By uploading content to RingtonesGlitch, you grant us a non-exclusive, 
              royalty-free license to display, distribute, and promote your content 
              on our platform. You represent and warrant that you own or have the 
              necessary rights to the content you upload.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">5. Termination of Service</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              We reserve the right to suspend or terminate your account or access 
              to the platform at our discretion, without notice, for any behavior 
              that violates these terms or is deemed harmful to the platform or its users.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              RingtonesGlitch is not responsible for any damages resulting from the 
              use or inability to use our platform, including but not limited to 
              loss of data, revenue, or profits.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">7. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              We reserve the right to update or modify these terms at any time. 
              Users are encouraged to review this page periodically for changes. 
              Continued use of the platform signifies acceptance of the updated terms.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-800 text-gray-200 py-6">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm">
              © 2025 RingtonesGlitch. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
