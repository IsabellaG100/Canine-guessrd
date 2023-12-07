import {observer} from "mobx-react"
import TestView from "./testView";
export default observer(
    function Test(props){
        return(
            <TestView changetext={showDogbreedDescHandlerACB} text={props.model.text} getAllDogbreeds={getAllDogbreedsHandlerACB} />
        );

        function showDogbreedDescHandlerACB(){
            return props.model.setText(props.model.dogBreedPromiseState.data[3].breedName)
        }
        function getAllDogbreedsHandlerACB(){
            return props.model.getAllData()
        }

    }
) 