import {observer} from "mobx-react"
import TestView from "./testView";
export default observer(
    function Test(props){
        return(
            <TestView text={props.model.text}/>
        );

    }
) 