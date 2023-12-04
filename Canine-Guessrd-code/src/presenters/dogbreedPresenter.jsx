import App from '../views/App.jsx'
import { observer } from "mobx-react-lite";

export default observer(
    function DogBreed(props){
        return <DogBreedView text={props.model.getFirstDogBreedsDescription}/>
    }
)