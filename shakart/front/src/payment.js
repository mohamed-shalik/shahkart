import React, { useState } from 'react';
import { useNavigate } from 'react-router'; // Import useNavigate hook from react-router
import Web3 from 'web3';

import ErrorMessage from './ErrorMessage';
import TxList from './TxList';

// Initialize admin address
const adminAddress = '0xaa085FA955aE68F10A63EF29f26d33CE356c3dD0';

const Payment = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [error, setError] = useState(null);
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const ether = data.get('ether');

    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        throw new Error('No crypto wallet found. Please install it.');
      }

      // Request access to user's accounts
      await window.ethereum.send('eth_requestAccounts');

      // Initialize Web3
      const web3 = new Web3(window.ethereum);

      // Get user's selected account
      const accounts = await web3.eth.getAccounts();
      const from = accounts[0];

      // Convert ether value to Wei
      const valueInWei = web3.utils.toWei(ether, 'ether');

      // Send transaction
      const tx = await web3.eth.sendTransaction({
        from,
        to: adminAddress, // Use admin address directly
        value: valueInWei,
      });

      // Update transaction list
      setTxs([tx]);

      // Clear error
      setError(null);

      // Navigate to success page
      navigate('/sucess');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='pt-40'>
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Send ETH payment
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                value={adminAddress} // Display admin address
                readOnly
                className="text-black rounded-xl bg-[#cce6ff] border w-full border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black"
              />
            </div>
            <div className="my-3">
              <input
                name="ether"
                type="text"
                className="text-black rounded-xl bg-[#cce6ff] border w-full border-[#00004d] px-5 py-2 bg-opacity-60 placeholder-black"
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="text-lg font-bold rounded-xl py-2 px-6 bg-blue-500 text-white w-full border border-black-100 hover:text-black hover:bg-white"
          >
            Pay now
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
    </div>
  );
};

export default Payment;
