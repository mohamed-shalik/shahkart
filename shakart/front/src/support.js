import React from "react";

const Support = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">SHAHCART</h1>
          {/* Navigation */}
          <div className="flex space-x-20">
            <a href="/home" className="text-white hover:text-gray-300">HOME</a>
            <a href="/about" className="text-white hover:text-gray-300">ABOUT</a>
            <a href="/support" className="text-white hover:text-gray-300">SUPPORT</a>
          </div>
        </div>  
      </header>


    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Support</h1>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">Email: <a href="mailto:support@shahcart.com">support@shahcart.com</a></p>
          <p className="mb-2">Phone: +1 (800) 123-4567</p><br></br>

          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2>
          <p className="mb-6">Find answers to common questions in our FAQ section.</p>

          <h2 className="text-xl font-bold mb-4">Customer Feedback</h2>
          <p className="mb-6">We value your feedback! Share your suggestions and testimonials with us.</p>
        </div>
        
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-4">Technical Support</h2>
          <p className="mb-2">For technical assistance, contact our support team.</p>
          <p className="mb-6">We're here to help with any website or app-related issues.</p>

          <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-2">Follow us on social media for updates and promotions.</p>
          <ul className="flex space-x-4">
            <li><a href="https://www.facebook.com/shahcart" className="hover:text-gray-300">Facebook</a></li>
            <li><a href="https://twitter.com/shahcart" className="hover:text-gray-300">Twitter</a></li>
            <li><a href="https://www.instagram.com/shahcart/" className="hover:text-gray-300">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/shahcart" className="hover:text-gray-300">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Support;
