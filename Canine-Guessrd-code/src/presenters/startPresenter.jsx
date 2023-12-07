import StartView from "../views/startView"

export default function Start(props){

    function generateGameACB(){
        props.model.getDataFromAPI()
        props.model.generateRandomArrayOfIndex()
        console.log(props.model.RandomArrayDogIndex)
        
    }

    return <StartView getDogs = {generateGameACB}/>
}