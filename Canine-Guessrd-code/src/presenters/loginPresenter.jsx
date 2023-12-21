// loginPresenter.jsx
import React, {useState} from 'react';
import LoginView from '../views/LoginView';
import { useNavigate } from 'react-router-dom';

function LoginPresenter(props) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (email, password) => {
        try {
            // Use the login function passed as a prop
            await props.model.firebase.login(email, password);
            // Navigate to the start page after successful login
            
            navigate('/start');
        } catch (error) {
            alert('Login Failed: ' + error.message);
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            // Use the Google login function passed as a prop
            await props.model.firebase.loginWithGoogle();
            //console.log("(In presenter) Auth User after Google Login:", props.model.firebase.authUser);
            // Navigate to the start page after successful login
            //console.log("(inpresenter: navigating to /start)");
            navigate('/start');
        } catch (error) {
            alert('Google Login Failed: ' + error.message);
        }
    };

    const handleNavigateRegister = () => {
        navigate('/register'); // Navigate to the registration view
    };

    return (
        <LoginView 
            onLogin={handleLogin} 
            onLoginWithGoogle={handleLoginWithGoogle}
            onNavigateRegister={handleNavigateRegister} 
            email = {email}
            password = {password}
            setEmail = {setEmail}
            setPassword = {setPassword}
        />
    );
}

export default LoginPresenter;
