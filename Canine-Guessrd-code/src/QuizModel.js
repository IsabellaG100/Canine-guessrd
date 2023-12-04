import { getDogBreed } from "./dogBreedSource";


export default {

    correctDogBreed: "Golden Retriver",
    correctCountryOrigin: "",
    choosenCountryOrigin: "", 
    choosenDogBreed: "",
    currentDogPromiseState: {},
    allDogBreeds: {},



    getFirstDogBreedsDescription(){
        this.allDogBreeds = getDogBreed()
        return this.allDogBreeds[0].breedDescription
    },
    
    


}