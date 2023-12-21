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
            'setLeaderboardData', 'getLeaderboardData', 'isAuthenticated', 'checkAndUpdateHighscore'
        ];
        methodsToBind.forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    // Initializes a listener for Firebase authentication state changes. 
    initAuthStateSync() {
        onAuthStateChanged(this.auth, (user) => {
            //console.log("(In initAuthStateSync) Auth state changed, user:", user);
            this.setAuthUser(user);
        });
    }

    // Method to set the authenticated user. This is used after successful authentication
    setAuthUser(user) {
        this.authUser = user;
    }

    // Method to check if a user is authenticated
    isAuthenticated() {
        //console.log("(In isAuthenticated): ", this.authUser);
        return this.authUser != null;
    }

    // Async method to register a new user with email, password, and username
    async register(email, password, username) {
        // Validate input
        if (!email || !password || !username) {
            throw new Error("Please fill in all fields.");
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            throw new Error("Invalid email format.");
        }
        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters.");
        }
        
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
            // Throw the error to be handled by the presenter/view
            throw new Error(this.mapFirebaseErrorToMessage(error) || error.message);
        }
    }
    

    // Async method to login a user with email and password
    async login(email, password) {
        // Validate input
        if (!email || !password) {
            throw new Error("Please fill in both email and password.");
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            throw new Error("Invalid email format.");
        }
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            this.setAuthUser(userCredential.user);
            return this.authUser;
        } catch (error) {
            throw new Error(this.mapFirebaseErrorToMessage(error));
        }
    }

    // Async method to login a user using Google OAuth
    async loginWithGoogle() {
        try {
            const auth = getAuth(app);  // Directly initialize Firebase Auth inside the method
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);  // Perform the sign-in with Google
            this.setAuthUser(result.user);  // Update the authenticated user
            //console.log("(In firebaseModel) User logged in with Google:", this.authUser);
    
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
            throw new Error(this.mapFirebaseErrorToMessage(error));
        }
    }

    // Async method to logout the current user
    async logout() {
        //console.log('(firebaseModel) In logout');
        try {
            await signOut(this.auth); // Firebase sign-out
            this.setAuthUser(null); // Reset the authenticated user to null
        } catch (error) {
            throw new Error(this.mapFirebaseErrorToMessage(error));
        }
    }

    // Async method to set or update the leaderboard data for a specific user
    async setLeaderboardData(userId, username, highscore) {
        try {
            await update(ref(this.database, `leaderboard/${userId}`), {
                username,
                highscore
            });
        } catch (error) {
            throw new Error(this.mapFirebaseErrorToMessage(error));
        }
    }

    async checkAndUpdateHighscore(userId, username, score) {
        try {
            const userRef = ref(this.database, `users/${userId}`);
            const userSnapshot = await get(userRef);

            if (userSnapshot.exists()) {
                const userData = userSnapshot.val();
                if (score > userData.highscore) {
                    // Update the highscore
                    await set(ref(this.database, `users/${userId}`), {
                        ...userData,
                        highscore: score
                    });
                    // Update the leaderboard as well
                    await this.setLeaderboardData(userId, username, score);
                }
            }
        } catch (error) {
            throw new Error(this.mapFirebaseErrorToMessage(error));
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

    // Method to fetch user data from the database
    getUserData(userId, callback) {
        const userRef = ref(this.database, `users/${userId}`);
        get(userRef).then((snapshot) => {
            if (snapshot.exists()) {
                callback(snapshot.val());
            } else {
                callback(null); // Handle case where user data is not found
            }
        }).catch((error) => {
            console.error('Error fetching user data:', error);
            callback(null);
        });
    }

    // Method that takes a Firebase error code and returns a more understandable error message
    mapFirebaseErrorToMessage(error) {
        // Check if error.code is available, otherwise use error.message
        const errorCode = error.code || error.message;

        switch (errorCode) {
            case 'auth/invalid-credential':
                return 'Invalid email or password.';
            case 'auth/invalid-email':
                return 'Invalid email format.';
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                return 'Invalid email or password.';
            case 'auth/weak-password':
                return 'Password is too weak.';
            case 'auth/email-already-in-use':
                return 'Email is already in use.';
            case 'auth/username-already-in-use':
                return 'Username is already taken.';
            case 'Username already taken':
                return 'Username is already taken.';
            // Add more cases as needed
            default:
                return 'An error occurred. Please try again.';
        }
    }
}

// Creating and exporting an instance of the FirebaseModel class
const firebaseModel = new FirebaseModel();
export default firebaseModel;
