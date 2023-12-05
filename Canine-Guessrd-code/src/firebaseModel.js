// firebaseModel.js
import { getDatabase } from 'firebase/database';
import { app } from './firebaseConfig'; // Adjust the relative path as necessary.

// Function to get the Firebase Realtime Database reference.
const getDbReference = () => getDatabase(app);

export { getDbReference };
