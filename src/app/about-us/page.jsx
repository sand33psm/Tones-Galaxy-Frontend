import Navbar from "@/components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen text-gray-800 dark:bg-medium ">
        {/* Hero Section */}
        <div className="">
          <div className="max-w-4xl mx-auto px-4 py-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Us</h1>
            {/* <p className="text-lg text-gray-600 mt-4 dark:text-white">
              Empowering millions with high-quality, free ringtones.
            </p> */}
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              Welcome to RingtonesGlitch, your go-to platform for discovering, 
              downloading, and sharing ringtones. We’re a passionate team 
              committed to revolutionizing the way you customize your mobile 
              experience. Whether it’s a catchy tune or your favorite 
              notification sound, we’ve got you covered.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What We Offer</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              At RingtonesGlitch, we provide a seamless and user-friendly platform 
              where users can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Explore a vast collection of ringtones for every mood and style.</li>
              <li>Download ringtones effortlessly for free.</li>
              <li>Upload and share your own creations with the community.</li>
              <li>Create an account to manage your uploads and downloads.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              Our mission is to make ringtone discovery and customization 
              accessible to everyone. We strive to provide a platform that is 
              reliable, modern, and free, while supporting aspiring creators 
              to showcase their talents to a global audience.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              Unlike other platforms, we focus on delivering an
              clutter-free experience, ensuring that our users enjoy smooth and 
              hassle-free navigation. With cutting-edge technology and a 
              growing community, RingtonesGlitch stands out as the ultimate 
              destination for all your ringtone needs.
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

export default AboutUs;
