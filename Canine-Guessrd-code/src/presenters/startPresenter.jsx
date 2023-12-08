import StartView from "../views/startView"

export default function Start(props){

    function generateGameACB(){
        props.model.getDataFromAPI()
        console.log("promisestate at start", props.model.dogBreedPromiseState)
        props.model.generateRandomArrayOfIndex()
        console.log(props.model.RandomArrayDogIndex)
        
    }

    return <StartView getDogs = {generateGameACB}/>
}