import {observer} from "mobx-react"
import Test from "../src/testPresenter.jsx" 

export default observer(
    function ReactRoot(props){
        return(
            <div>
                <div><Test model ={props.model}/></div>
            </div>
        );
    }
)