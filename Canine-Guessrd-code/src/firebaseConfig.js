// Import the function to initialize the app from Firebase SDK.
import { initializeApp } from 'firebase/app';

// Firebase configuration for the Canine Guessrd project.
// These settings are specific to this Firebase project and are used to connect to Firebase services.
const firebaseConfig = {
    apiKey: "AIzaSyBAVWt76yzIYiMnAdUQfCkAKVHN9iPabXo",
    authDomain: "canine-guessrd.firebaseapp.com",
    databaseURL: "https://canine-guessrd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "canine-guessrd",
    storageBucket: "canine-guessrd.appspot.com",
    messagingSenderId: "355426310273",
    appId: "1:355426310273:web:27037e505cb66743931580",
    measurementId: "G-MJ16HXH459"
  };


// Initialize the Firebase app instance with the provided configuration settings.
// This 'app' instance is what we'll use to interact with Firebase services.
const app = initializeApp(firebaseConfig);

// Export the 'app' instance so that it can be imported and used in other parts of our application.
export { app };