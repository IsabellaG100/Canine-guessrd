import GameView from "../views/gameView"
import { observer } from "mobx-react-lite";

export default observer( function Game(props){

    function gameFunction(dogPromiseState){
        
        console.log("promisestate in game:", dogPromiseState)
        console.log("data in game:", dogPromiseState.data)


        if (dogPromiseState?.data){

            if (dogPromiseState.data){

                return <GameView dogArray = {props.model.dogBreedPromiseState.data}/>
            
            } else if (dogPromiseState.error){
                return (dogPromiseState.error)

            } else {
                return <img src="https://brfenergi.se/iprog/loading.gif" alt="Loading" />
            }

        } else {
            return ("no data")
        }
    }

    return gameFunction(props.model.dogBreedPromiseState)
}
)