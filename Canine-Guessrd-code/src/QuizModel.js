import {getDogBreed} from "./dogBreedSource.js"
import resolvePromise from "./resolvePromise.js";

export default {
    dogBreed: {},
    dogBreedPromiseState: [],
    text: "pending",
    

    getAllData() {
        resolvePromise(getDogBreed(), this.dogBreedPromiseState)
      },

    setText(ex_string){
        if (ex_string===undefined){
            console.log("its undefined", ex_string)
            console.log("promise state is:", this.dogBreedPromiseState.data.breedName)
            this.text = this.dogBreedPromiseState.data.breedName
        }
        else{
            console.log("it worked")
            console.log("promise state is:", this.dogBreedPromiseState.data)
            this.text = ex_string;}

    }

}