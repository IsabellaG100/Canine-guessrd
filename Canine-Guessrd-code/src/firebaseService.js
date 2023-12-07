// firebaseService.js
// This service file handles all Firebase interactions in the CanineGuessrd app.
// It includes functions for Firebase authentication and operations related to the Realtime Database, particularly for the leaderboard.

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getDatabase, ref, set, onValue, update } from 'firebase/database';
import { app } from './firebaseConfig'; // Import the existing Firebase app instance

// Initialize Firebase authentication and database services using the existing app instance
const auth = getAuth(app);
const database = getDatabase(app);

// Function to register new users
export const register = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

// Function to login users
export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

// Function to login with Google OAuth
export const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        throw error;
    }
};

// Function to logout users
export const logout = async () => {
    try {
        console.log('Firebase logout called. Before await signOut(auth);');
        await signOut(auth);
        console.log('Firebase logout called. After await signOut(auth);');
    } catch (error) {
        throw error;
    }
};

// Function to set leaderboard data
export const setLeaderboardData = async (userId, data) => {
    try {
        await set(ref(database, 'leaderboard/' + userId), data);
    } catch (error) {
        throw error;
    }
};

// Function to update leaderboard data
export const updateLeaderboardData = async (userId, data) => {
    try {
        await update(ref(database, 'leaderboard/' + userId), data);
    } catch (error) {
        throw error;
    }
};

// Function to get leaderboard data
export const getLeaderboardData = (callback) => {
    const leaderboardRef = ref(database, 'leaderboard/');
    onValue(leaderboardRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    }, {
        onlyOnce: true
    });
};

// Export the auth object for use in other parts of the app
export { auth };
