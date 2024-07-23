import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Order Successful!</h2>
        <p className="text-lg mb-4">Thank you for your order.</p>
        <p className="text-lg mb-4">Your order has been successfully placed.</p>
        <p className="text-lg">Want to shop more? then click the home button to explore.</p>

        <div className="pt-5">
        <Link to="/home"><button className='className=" w-32 h-10 bg-blue-500 text-white font-bold rounded-xl hover:text-black hover:bg-white'>Home</button></Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;