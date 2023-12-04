import { getDogBreed } from "./dogBreedSource";


export default {

    correctDogBreed: "Golden Retriver",
    correctCountryOrigin: "",
    choosenCountryOrigin: "", 
    choosenDogBreed: "",
    currentDogPromiseState: {},
    allDogBreeds: {},


    setChoosenDogBreed(dogbreed){
        this.choosenDogBreed = dogbreed;
    },

    setChoosenOrigin(origin){
        this.choosenCountryOrigin = origin;
    },

    getFirstDogBreedsDescription(){
        this.allDogBreeds = getDogBreed()
        return this.allDogBreeds[0].breedDescription
    }
    
    


}