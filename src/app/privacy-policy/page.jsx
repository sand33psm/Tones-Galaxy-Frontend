import Navbar from "@/components/Navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen text-gray-800 dark:bg-medium">
        {/* Hero Section */}
        <div className="text-center py-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Introduction</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              Welcome to RingtonesGlitch! Your privacy is critically important to us. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our website.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              We may collect personal information such as your name, email address, and usage data to enhance your
              experience on our platform. Additionally, cookies may be used to provide a tailored browsing experience.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              Your data is used to provide, improve, and maintain our services, as well as to ensure a safe and secure
              user experience. We do not share your information with third parties except as outlined in this policy.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              You have the right to access, update, or delete your personal information. If you wish to exercise these
              rights, please contact us at - 
              <a href="mailto:support@ringtonesglitch.com" className="text-blue-600 font-medium underline">
                support@ringtonesglitch.com
              </a>
              .
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              If you have any questions or concerns about this Privacy Policy, feel free to reach out to us at
              <a href="mailto:support@ringtonesglitch.com" className="text-blue-600 font-medium underline">
                support@ringtonesglitch.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-800 text-gray-200 py-6">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm">© 2025 RingtonesGlitch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
