import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Order = () => {
  const [data, setData] = useState({
    name: "",
    street: "",
    city: "",
    proname:"",
    phoneno: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
};

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
    const url = "http://localhost:3080/api/order";
    const {data:res} = await axios.post(url,data);
    navigate("/payment");
    }catch(error){
        
        if(error.response && error.response.status>=400 && error.response.status<=500){
            setError(error.response.data.message);
        }
    }
  };
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

  return (
    <div className='flex justify-center py-7 px-10 bg-cover bg-no-repeat h-screen'>
      <div className='w-[95%] lg:w-[35%] h-[100%] px-2 py-1 flex flex-col gap-7 rounded-3xl shadow-2xl shadow-red z-10 opacity-100' >
        <form onSubmit={handleSubmit}>
          <div className='Header flex flex-col gap-2 pt-8'>
            <p className='text-black text-2xl text-center font-bold py-2'>Order here!</p>
            <p className='text-black text-1xl text-center font-bold'>Just want some details to send an order!</p>
          </div>
          <div className='Input flex flex-col gap-5 pt-6'>
            <p className='text-center'><input type="text" placeholder="name" name="name" onChange={handleChange} value={data.name} required className='text-black rounded-xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
            <p className='text-center'><input type="text" placeholder="street" name="street" onChange={handleChange} value={data.street} required className='text-black rounded-xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
            <p className='text-center'><input type="text" placeholder="city" name="city" onChange={handleChange} value={data.city} required className='text-black rounded-xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
            <p className='text-center'><input type="text" placeholder="enter product name" name="proname" onChange={handleChange} value={data.proname} required className='text-black rounded-xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
            <p className='text-center'><input type="number" placeholder="phone no" name="phoneno" onChange={handleChange} value={data.phoneno} required className='text-black rounded-xl bg-[#cce6ff] border border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black'/></p>
            <div className=' flex flex-row gap-8 justify-center'>
              <p className="text-center"><Link to="/home"><button className='py-2 px-2 w-32 bg-blue-500 text-white font-bold rounded-xl hover:text-black hover:bg-white'>Home</button></Link></p>
              <p className="text-center"><button type="submit" className='py-2 px-2 w-32 bg-blue-500 text-white font-bold rounded-xl hover:text-black hover:bg-white'>proceed</button></p>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
