import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Web3 from 'web3';
import { database, ref, get, set } from './firebase';


function Initial() {
  

    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 


    const  connectToWallet = async () => {
        try {
            if (window.ethereum) {
                setLoading(true);

                await window.ethereum.request({ method: 'eth_requestAccounts' });

                const web3Instance = new Web3(window.ethereum);
                const accounts = await web3Instance.eth.getAccounts();
                setWeb3(web3Instance);  
                setAccount(accounts[0]);

                // Note: Do not check the database here
            } else {
                console.error('Please install MetaMask or another wallet provider.');
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        } finally {
            setLoading(true);
        }
    };

    useEffect(() => {
        if (account) {
            const checkDatabase = async () => {
                try {
                    // Check if the wallet address is in the database
                    const walletAddressRef = ref(database, 'Users/' + account);
                    const snapshot = await get(walletAddressRef);
                    const isAddressPresent = snapshot.exists();

                    // Show alert messages here
                    if (isAddressPresent) {
                        alert('You are already registered.');
                        navigate('/home');
                    } else {
                        // Store the wallet address in Firebase
                        await set(walletAddressRef, true);
                        alert('Wallet address stored successfully.');
                        navigate('/home');
                    }
                } catch (error) {
                    console.error('Error checking database:', error);
                }
            };

            checkDatabase();

            // Log the connected wallet address to the console
            console.log('Connected to wallet. Address:', account);
        }
    }, [account]);

  return (
    
    <div className="relative min-h-screen flex justify-center items-center">
      {/* Video Background */}
      <div className="bg-gradient-to-b from-gray-400 to-gray-200 absolute inset-0 opacity-90 z-20 flex justify-center items-center">
        {/* Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="font-bold text-2xl text-center mb-4">WELCOME</h1>
          <p className="text-center mb-6">Connect to the wallet to let you in...</p>
          <div className="flex flex-col gap-5">
            <button onClick={connectToWallet} className="text-lg font-bold rounded-xl py-2 px-6 bg-blue-500 text-white w-full border border-black-100 hover:text-black hover:bg-white">Connect to Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initial;
