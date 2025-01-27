import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google Sign-in
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Export auth instance and sign-in function
export { auth };
export const signInWithGoogle = () => {
  console.log('Initiating Google Sign-in...');
  return signInWithRedirect(auth, googleProvider)
    .catch(error => {
      console.error('Google Sign-in Error:', error);
      throw error;
    });
};