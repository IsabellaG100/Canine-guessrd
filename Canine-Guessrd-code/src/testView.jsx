function TestView(props){
    function showTextACB(){
        props.showDogbreedDesc("nu ändra ja texten")
    }
    function getAlldogBreedsACB(){
        props.getAllDogbreeds
    }
    
    return(
        <div>
            <span>{props.text}</span>
        </div>
    );

}
export default TestView;