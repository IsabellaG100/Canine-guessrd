import {getDogBreed} from "./dogBreedSource.js"
import resolvePromise from "./resolvePromise.js";

export default {
    dogBreed: [],
    dogBreedPromiseState: {},
    text: resolvePromise(getDogBreed(), dogBreedPromiseState),
    

    getallDogBreeds(){
        this.dogBreed = resolvePromise(getDogBreed(), this.dogBreedPromiseState);
    },

    setText(ex_string){
        this.text = ex_string
    }
}