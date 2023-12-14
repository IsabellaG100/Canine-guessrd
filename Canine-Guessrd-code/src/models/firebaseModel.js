import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, onValue, update, get } from 'firebase/database';
import { app } from '../firebaseConfig'; // Make sure this path is correct for your project setup
import { makeAutoObservable } from 'mobx';

// FirebaseModel class for managing authentication and database interactions
class FirebaseModel {
    authUser = null; // This property will hold the authenticated user object

    constructor() {
        makeAutoObservable(this); // This makes all properties and methods of the class reactive in MobX
        this.auth = getAuth(app); // Initialize Firebase Auth
        this.database = getDatabase(app); // Initialize Firebase Database       
        this.bindMethods(); // Bind methods
        this.initAuthStateSync(); // Initialize auth state synchronization
    }

    bindMethods() {
        // Bind all methods that need 'this' context
        const methodsToBind = [
            'initAuthStateSync', 'loginWithGoogle', 'logout', 'login', 'register', 'setAuthUser',
            'setOrUpdateLeaderboardData', 'getLeaderboardData', 'isAuthenticated'
        ];
        methodsToBind.forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    // Initializes a listener for Firebase authentication state changes. 
    initAuthStateSync() {
        onAuthStateChanged(this.auth, (user) => {
            console.log("(In initAuthStateSync) Auth state changed, user:", user);
            this.setAuthUser(user);
        });
    }

    // Method to set the authenticated user. This is used after successful authentication
    setAuthUser(user) {
        this.authUser = user;
    }

    // Method to check if a user is authenticated
    isAuthenticated() {
        console.log("(In isAuthenticated): ", this.authUser);
        return this.authUser != null;
    }

    // Async method to register a new user with email, password, and username
    async register(email, password, username) {
        try {
            // Check if username already exists
            const usernameRef = ref(this.database, `usernames/${username}`);
            const usernameSnapshot = await get(usernameRef);
            if (usernameSnapshot.exists()) {
                throw new Error("Username already taken");
            }
    
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            this.setAuthUser(userCredential.user);
            
            // Store username in a separate node for easy lookup
            await set(ref(this.database, `usernames/${username}`), true);
    
            // Store additional user data
            await set(ref(this.database, `users/${this.authUser.uid}`), {
                username: username,
                highscore: 0,
                email: email // Store email as well
            });
            return this.authUser;
        } catch (error) {
            console.error('Register Error:', error);
            throw error;
        }
    }
    

    // Async method to login a user with email and password
    async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            this.setAuthUser(userCredential.user);
            return this.authUser;
        } catch (error) {
            console.error('Login Error:', error);
            throw error;
        }
    }

    // Async method to login a user using Google OAuth
    async loginWithGoogle() {
        try {
            const auth = getAuth(app);  // Directly initialize Firebase Auth inside the method
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);  // Perform the sign-in with Google
            this.setAuthUser(result.user);  // Update the authenticated user
            console.log("(In firebaseModel) User logged in with Google:", this.authUser);
    
            const userRef = ref(this.database, `users/${this.authUser.uid}`);
            const userSnapshot = await get(userRef);
    
            if (!userSnapshot.exists()) {
                // User does not exist, create new user data
                await set(userRef, {
                    username: this.authUser.displayName || this.authUser.email,
                    highscore: 0,
                    email: this.authUser.email
                });
            }
    
            return this.authUser;
        } catch (error) {
            console.error('Google Login Error:', error);
            throw error;
        }
    }

    // Async method to logout the current user
    async logout() {
        try {
            await signOut(this.auth); // Firebase sign-out
            this.setAuthUser(null); // Reset the authenticated user to null
        } catch (error) {
            console.error('Logout Error:', error);
            throw error;
        }
    }

    // Async method to set or update the leaderboard data for a specific user
    async setOrUpdateLeaderboardData(userId, username, highscore) {
        try {
            await update(ref(this.database, `leaderboard/${userId}`), {
                username,
                highscore
            });
        } catch (error) {
            console.error('Error updating leaderboard:', error);
            throw error;
        }
    }

    // Method to retrieve the leaderboard data and sort by high score
    getLeaderboardData(callback) {
        const leaderboardRef = ref(this.database, 'leaderboard/');
        onValue(leaderboardRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const leaderboard = Object.values(data).sort((a, b) => b.highscore - a.highscore);
                callback(leaderboard);
            } else {
                callback([]); // Handle case where there is no data
            }
        });
    }
}

// Creating and exporting an instance of the FirebaseModel class
const firebaseModel = new FirebaseModel();
export default firebaseModel;
