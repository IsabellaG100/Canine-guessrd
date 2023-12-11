import StartView from "../views/startView"
import { useNavigate } from 'react-router-dom';

export default function Start(props){
    const navigate = useNavigate();

    function generateGameACB(){
        props.model.quiz.getDataFromAPI()
        console.log("promisestate at start", props.model.quiz.dogBreedPromiseState)
        props.model.quiz.generateRandomArrayOfIndex()
        console.log(props.model.quiz.RandomArrayDogIndex)
        
    }

    function handleLogout() {
        props.model.firebase.logout() // Using logout function from props
            .then(() => {
                navigate('/login'); // Redirect to login view after successful logout
            })
            .catch((error) => {
                console.error('Logout failed:', error);
            });
    }

    return <StartView getDogs = {generateGameACB} logout={handleLogout}/>
}