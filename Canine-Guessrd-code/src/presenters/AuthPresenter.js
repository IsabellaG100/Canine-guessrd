// AuthPresenter.js
// This presenter handles the logic related to authentication in the CanineGuessrd app.

import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser, logoutUser } from './actions/authActions';

const useAuthPresenter = () => {
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);

    // Function to handle user login
    const handleLogin = (email, password) => {
        dispatch(loginUser(email, password));
    };

    // Function to handle user registration
    const handleRegister = (email, password) => {
        dispatch(registerUser(email, password));
    };

    // Function to handle user logout
    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return {
        ...authState,
        handleLogin,
        handleRegister,
        handleLogout
    };
};

export default useAuthPresenter;
