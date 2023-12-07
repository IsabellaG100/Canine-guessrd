import StartView from "../views/startView"

export default function Start(props){
    return <StartView getDogs = {props.model.getDataFromAPI}/>
}