import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { app } from '../../firebaseConfig'; 

// Initialize Firestore
const db = getFirestore(app);

// Define the action type constants for the leaderboard
export const FETCH_LEADERBOARD_REQUEST = 'FETCH_LEADERBOARD_REQUEST';
export const FETCH_LEADERBOARD_SUCCESS = 'FETCH_LEADERBOARD_SUCCESS';
export const FETCH_LEADERBOARD_FAILURE = 'FETCH_LEADERBOARD_FAILURE';
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD';

// Action creators
export const fetchLeaderboardRequest = () => ({ type: FETCH_LEADERBOARD_REQUEST });
export const fetchLeaderboardSuccess = (leaderboardData) => ({ type: FETCH_LEADERBOARD_SUCCESS, payload: leaderboardData });
export const fetchLeaderboardFailure = (error) => ({ type: FETCH_LEADERBOARD_FAILURE, payload: error });
export const updateLeaderboard = (newEntry) => ({ type: UPDATE_LEADERBOARD, payload: newEntry });

// Async action creator for fetching leaderboard data
export const fetchLeaderboard = () => async (dispatch) => {
    dispatch(fetchLeaderboardRequest());
    try {
        const leaderboardRef = collection(db, 'leaderboard');
        const snapshot = await getDocs(leaderboardRef);
        const leaderboardData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        dispatch(fetchLeaderboardSuccess(leaderboardData));
    } catch (error) {
        dispatch(fetchLeaderboardFailure(error.message));
    }
};

// Async action creator for updating the leaderboard
export const addLeaderboardEntry = (entry) => async (dispatch) => {
    try {
        const leaderboardRef = collection(db, 'leaderboard');
        const docRef = await addDoc(leaderboardRef, entry);
        dispatch(updateLeaderboard({ id: docRef.id, ...entry }));
    } catch (error) {
        console.error('Error adding document: ', error);
    }
};
