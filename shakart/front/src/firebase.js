import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get,set } from 'firebase/database';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3LpsNmDnTDj1N00Q4Yby4nrYEMXrxmKA",
    authDomain: "ecommerce-94c68.firebaseapp.com",
    databaseURL: "https://ecommerce-94c68-default-rtdb.firebaseio.com",
    projectId: "ecommerce-94c68",
    storageBucket: "ecommerce-94c68.appspot.com",
    messagingSenderId: "977898468886",
    appId: "1:977898468886:web:099cf00541ee45bc6e2737"
  };

// Initialize Firebase app with error handling
let firebaseApp;
try {
    firebaseApp = initializeApp(firebaseConfig);
} catch (error) {
    console.error('Error initializing Firebase:', error);
    // Handle initialization error (e.g., show an error message, fallback mechanism)
}

// Export Firebase database methods directly
const database = getDatabase(firebaseApp);

// Export Firebase authentication methods
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { firebaseApp, database, ref, get, set ,auth, googleProvider };