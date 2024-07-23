import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Web3 from 'web3';

function Inital() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccounts(accounts);
          if (accounts.length > 0) {
            // If accounts are present, navigate to the next page
            navigate('/home');
          }
        } catch (error) {
          console.error('Error connecting to Metamask:', error);
        }
      } else {
        console.error('Metamask not detected');
      }
    }
    loadWeb3();
  }, [navigate]); // Include navigate in the dependency array

  const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        // Request Metamask to enable accounts
        await window.ethereum.enable();
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
        if (accounts.length > 0) {
          // If accounts are present, navigate to the next page
          navigate('/home');
        }
      } else {
        console.error('Metamask not detected');
      }
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (window.ethereum && typeof window.ethereum.disconnect === 'function') {
        window.ethereum.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-400 to-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="font-bold text-2xl text-center mb-4">Sorry</h1>
        <p className="text-center mb-6">Wallet is disconnected</p>
        <p className="text-center mb-6">your access is denied....</p>
        <div className="flex flex-col gap-5">
          <button onClick={connectMetamask} className="text-lg font-bold rounded-xl py-2 px-6 bg-blue-500 text-white w-full border border-black-100 hover:text-black hover:bg-white">Connect to Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default Inital;