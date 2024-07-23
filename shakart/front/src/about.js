// About.js

import React from "react";

const About = () => {
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
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <h1 className="text-2xl font-bold mb-4">Our Story</h1>
      <p>At ShahCart, we are passionate about providing the best shopping experience for our customers. Our journey began in 2024, when our founders, <b>SHALIK</b> and <b>SHAFAR</b>, envisioned creating an online marketplace that offers a wide range of products combined with excellent customer service.</p><br></br>
      <h1 className="text-2xl font-bold mb-4 ">Our Mission</h1>
      <p>Our mission at ShahCart is to make shopping convenient, enjoyable, and hassle-free for everyone. We strive to offer a diverse selection of high-quality products at competitive prices, ensuring that our customers find exactly what they need.</p><br></br>
      <h1 className="text-2xl font-bold mb-4">What Sets Us Apart</h1>
      <p><b>Wide Selection:</b> We curate a comprehensive collection of products across various categories, ranging from electronics and fashion to home essentials and more.</p>
      <p><b>Quality Assurance:</b> We partner with reputable suppliers and brands to ensure that every product meets our stringent quality standards.</p>
      <p><b>Customer Satisfaction:</b> Your satisfaction is our top priority. Our dedicated customer support team is always ready to assist you with any inquiries or concerns you may have.</p><br></br>
      <h1 className="text-2xl font-bold mb-4">Our Commitment to Sustainability</h1>
      <p>At ShahCart, we are committed to sustainability and environmental responsibility. We actively seek out eco-friendly products and packaging solutions to minimize our carbon footprint and contribute to a greener future.</p><br></br>
      <h1 className="text-2xl font-bold mb-4">Get in Touch</h1>
      <p>We'd love to hear from you! Whether you have feedback, questions, or suggestions, please don't hesitate to reach out to us. You can contact us via email at <b>mdshalikshaheen3055@gmail.com</b> or connect with us on social media.</p><br></br>
      <p>Thank you for choosing ShahCart for your shopping needs. We look forward to serving you!</p>
    </div>
    </div>
  );
};

export default About;
