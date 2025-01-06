import Navbar from "@/components/Navbar/Navbar";

const PrivacyPolicy = () => {
    return (
        <>
        <Navbar/>
      <div className="dark:bg-medium bg-gray-50 min-h-screen text-gray-800 dark:text-white">
        {/* Hero Section */}
        <div className="shadow-md">
          <div className="container mx-auto px-6 py-3 text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            {/* <p className="text-lg text-gray-600 mt-4">
              Effective Date: January 06, 2025
            </p> */}
          </div>
        </div>
  
        {/* Content Section */}
        <div className="container mx-auto px-6 py-12">
          {/* Section 1 */}
          <div className="mb-10 p-6 bg-white shadow-md rounded-lg dark:bg-slate-800/90 dark:border-white">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed dark:text-white">
              Welcome to RingtonesGlitch! Your privacy is critically important to
              us. This Privacy Policy explains how we collect, use, and safeguard
              your information when you visit our website.
            </p>
          </div>
  
          {/* Section 2 */}
          <div className="mb-10 p-6 bg-white shadow-md rounded-lg dark:bg-slate-800/90 dark:border-white">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed dark:text-white">
              We collect personal information such as your name, email address,
              and usage data to enhance your experience on our platform.
              Additionally, cookies may be used to provide a tailored browsing
              experience.
            </p>
          </div>
  
          {/* Section 3 */}
          <div className="mb-10 p-6 bg-white shadow-md rounded-lg dark:bg-slate-800/90 dark:border-white">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed dark:text-white">
              Your data is used to provide, improve, and maintain our services, as
              well as to ensure a safe and secure user experience. We do not share
              your information with third parties except as outlined in this
              policy.
            </p>
          </div>
  
          {/* Section 4 */}
          <div className="mb-10 p-6 bg-white shadow-md rounded-lg dark:bg-slate-800/90 dark:border-white">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed dark:text-white">
              You have the right to access, update, or delete your personal
              information. If you wish to exercise these rights, please contact us
              at{' '}
              <a
                href="mailto:ganesham029@gmail.com"
                className="text-blue-600 font-medium underline"
              >
                support@ringtonesglitch.com
              </a>
              .
            </p>
          </div>
  
          {/* Section 5 */}
          <div className="mb-10 p-6 bg-white shadow-md rounded-lg dark:bg-slate-800/90 dark:border-white">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed dark:text-white">
              If you have any questions or concerns about this Privacy Policy,
              feel free to reach out to us at{' '}
              <a
                href="mailto:ganesham029@gmail.com"
                className="text-blue-600 font-medium underline"
              >
                support@ringtonesglitch.com
              </a>
              .
            </p>
          </div>
        </div>
  
        {/* Footer Section */}
        <div className="bg-gray-800 text-gray-200 py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              © 2025 RingtonesGlitch. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default PrivacyPolicy;
  