import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../models/actions/authActions';

// useAuth is a custom hook that provides authentication functionality.
// It uses useSelector to access the auth state from the Redux store.
// useDispatch provides the ability to dispatch actions to the store.
export const useAuth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    // handleLogin wraps the loginUser action dispatcher.
    // It can be called from components to initiate the login process.
    const handleLogin = (email, password) => {
        dispatch(loginUser(email, password));
    };

    // The hook returns the auth state and the handleLogin function
    // so components can display auth status and trigger login.
    return {
        auth,
        handleLogin,
    };
};
