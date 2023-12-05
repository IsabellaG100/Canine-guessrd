import {getDogBreed} from "./dogBreedSource.js"

export default {
    text: "Nu funkar det",
    
    setText(simpleText){
        this.text = getDogBreed();
    }
}