function TestView(props){
    function getDogBreedDataACB(){
        props.getAllDogbreeds();
    }
    function changeTextACB(){
        props.changetext();
    }

    
    return(
        <div>
            <button onClick={getDogBreedDataACB}>get data</button>
            <span>{props.text}</span>
            <button onClick={changeTextACB}>change text</button>
        </div>
    );

}
export default TestView;