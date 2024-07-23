import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


  const Home = () => {
    const [showOrderButton, setShowOrderButton] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to handle MetaMask account change
    const handleAccountChange = (accounts) => {
      if (accounts.length === 0) {
        // If no accounts are available, navigate back to the initial page
        navigate('/inital');
      }
    };  
  
    window.ethereum.on('accountsChanged', handleAccountChange);

    return () => {
      // Remove listener when component unmounts
      window.ethereum.removeListener('accountsChanged', handleAccountChange);
    };
  }, [navigate]);
  
  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setShowOrderButton(prevState => !prevState);
    } else {
      setSelectedImage(image);
      setShowOrderButton(true);
    }
  }

  const handleOrderClick = () => {
    // Navigate to the order page
    navigate("/order");
  }
  
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">SHAHCART</h1>
          {/* Search */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
            />
            <button className="ml-2 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none">
              Search
            </button>
          </div>
          {/* Navigation */}
          <div className="flex space-x-20">
            <a href="/home" className="text-white hover:text-gray-300">HOME</a>
            <a href="/about" className="text-white hover:text-gray-300">ABOUT</a>
            <a href="/support" className="text-white hover:text-gray-300">SUPPORT</a>
          </div>
        </div>  
      </header>

      <div className="flex justify-center">
            <div className="w-full h-100">
                <Slider dots={false}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={3000}
                    arrows={false}>
                    <div>
                        <img src="img1.jpg" alt="1" className="slide-image" />
                    </div>
                    <div>
                        <img src="img2.jpg" alt="2" className="slide-image" />
                    </div>
                    <div>
                        <img src="img3.jpg" alt="3" className="slide-image" />
                    </div>
                </Slider>
            </div>
        </div>
        <br></br>

      {/* Main Content */}
      <div className="container mx-auto py-1 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Featured Products */}

          <div className="lg:col-span-full bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Offer Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Product Cards */}
              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p1.jpg" alt="p1" onClick={() => handleImageClick("p1.jpg")} />
              {showOrderButton && selectedImage === "p1.jpg" && (
               <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
              <h3 className="text-lg font-semibold mb-2 pt-2">FASTRACK Youth</h3>
                <p className="text-gray-600">ETH 0.2</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p4.jpg" alt="p4" onClick={() => handleImageClick("p4.jpg")} />
              {showOrderButton && selectedImage === "p4.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">Nike-blue eye</h3>
                <p className="text-gray-600">ETH 0.3</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p5.jpg" alt="p5" onClick={() => handleImageClick("p5.jpg")} />
              {showOrderButton && selectedImage === "p5.jpg" && (
               <Link to="/order">  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">Sony mx1551</h3>
                <p className="text-gray-600">ETH 0.7</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p6.jpg" alt="p6" onClick={() => handleImageClick("p6.jpg")} />
              {showOrderButton && selectedImage === "p6.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">Rayban blacky</h3>
                <p className="text-gray-600">ETH 2</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-full bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Watches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Product Cards */}
              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p2.jpg" alt="p2" onClick={() => handleImageClick("p2.jpg")} />
              {showOrderButton && selectedImage === "p2.jpg" && (
               <Link to="/order">  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">Rolex Gladiator</h3>
                <p className="text-gray-600">ETH 0.25</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p3.jpg" alt="p3" onClick={() => handleImageClick("p3.jpg")} />
              {showOrderButton && selectedImage === "p3.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">SEIKO Daimond</h3>
                <p className="text-gray-600">ETH 0.5</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p11.jpg" alt="p11" onClick={() => handleImageClick("p11.jpg")} />
              {showOrderButton && selectedImage === "p11.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">Rolex 6518</h3>
                <p className="text-gray-600">ETH 5.12</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p7.jpg" alt="p7" onClick={() => handleImageClick("p7.jpg")} />
              {showOrderButton && selectedImage === "p7.jpg" && (
               <Link to="/order">  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">Patek Philippe Gondolo</h3>
                <p className="text-gray-600">ETH 0.50</p>
              </div>
            </div>
          </div>



          <div className="lg:col-span-full bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">shoes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Product Cards */}
              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p9.jpg" alt="p9" onClick={() => handleImageClick("p9.jpg")} />
              {showOrderButton && selectedImage === "p9.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">PUMA Dancer</h3>
                <p className="text-gray-600">ETH 3</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p8.jpg" alt="p8" onClick={() => handleImageClick("p8.jpg")} />
              {showOrderButton && selectedImage === "p8.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">NIKE Romeo</h3>
                <p className="text-gray-600">ETH 0.42</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p10.jpg" alt="p10" onClick={() => handleImageClick("p10.jpg")} />
              {showOrderButton && selectedImage === "p10.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">GUCCI Classy</h3>
                <p className="text-gray-600">ETH 0.2</p>
              </div>

              <div className="bg-gray-200 p-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src="p12.jpg" alt="p12" onClick={() => handleImageClick("p12.jpg")} />
              {showOrderButton && selectedImage === "p12.jpg" && (
                <Link to="/order"> <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Order</button></Link>
              )}
                <h3 className="text-lg font-semibold mb-2 pt-2">Nike Sneaker</h3>
                <p className="text-gray-600">ETH 6</p>
              </div>
            </div>
          </div>
         {/* Sidebar
           <div className="hidden lg:block bg-white p-6 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Category 1</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Category 2</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Category 3</a></li>
            </ul>
          </div> */}
        </div>
      </div>

      <footer className=" text-gray-800 pt-9">
      <p className="text-sm text-center">&copy; 2024 ShahCart. All rights reserved.</p>
      <div className="flex justify-center items-center pt-6">
     <hr className="w-40 h-px bg-gray-800 border-0 "></hr>
     <hr className="w-40 h-px bg-gray-800 border-0"></hr>
     </div>
      <div className="flex justify-center items-center pt-5 pb-7 text-gray-800">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          <p>|</p>
          <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
          <p>|</p>
          <li><a href="/support" className="hover:text-gray-300">Contact Us</a></li>
        </ul>
      </div>
    </footer>





    </div>

    

  );
};

export default Home;
