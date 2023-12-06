import {getDogBreed} from "./dogBreedSource.js"
import resolvePromise from "./resolvePromise.js";

function removeNoRequiredDataCB(obj){
    return (obj.imgThumb !== null && obj.imgThumb !== "https://s3.us-west-004.backblazeb2.com/encurate/static/dogbreed/dog-default.jpg" 
            && obj.breedName !== null && obj.origin !== null && obj.origin !== "N/A");//, "N/A");
}

export default {

    leaderboard: {},
    score: 0,
    dogBreedPromiseState: [],
    useableDogData:[],
    text: "pending",
    RandomArrayDogIndex:[],
    choosenDogs:null,
    choosenDogBreeds: null,
    choosenDogOrigin: null,
    guessedDogBreed: "",
    gussedDogOrigin: "",    
   
    /*
    returns this.choosenDogbreeds which is an array with the names (string) of the choosen dogbreeds for that game turn
    */
    getChoosenDogBreeds(){
        if(this.choosenDogs !== null){
            return this.choosenDogBreeds = this.choosenDogs.map(function(dict_obj){
                return dict_obj.breedName; 
            })
        }
    },

    /*
    returns this.choosenDogOrigin which is an array with the origin (string) of the choosen dogbreeds for that game turn
    */
    getChoosenDogOrigin(){
        if(this.choosenDogs !== null){
            return this.choosenDogOrigin = this.choosenDogs.map(function(dict_obj){
                return dict_obj.origin; 
            })
        }
    },

     /*
    returns, Depending of the array with random ints (index) an array with dictionary objects of the dogs that are choosen 
    They are put in the variable choosenDogs if it is not already filled, otherviwse the function returns the choosenDogs variable
    choosenDogs is an array with dictionary objects of the dogs (dogbreed, origin, img) that is going to be used in the game turn
    */
    getChoosenDogs(){
        if(this.choosenDogs === null && this.RandomArrayDogIndex!== null){
            this.choosenDogs = this.RandomArrayDogIndex.map(index => this.useableDogData[index])
            return this.choosenDogs
        }
        
        if(this.choosenDogs !== null){
            return this.choosenDogs
        }   
    },
   
    /*
    A function that generate an array of 100 random ints that
    will choose 100 (check the number after length:) random dogbreeds from the data from the API
    */ 
    generateRandomArrayOfIndex(){
        this.RandomArrayDogIndex = Array.from({length:10}, ()=> {
            return Math.floor(Math.random()*400)
        });
    
    },


    getArrayofRandomDogIndex(){
        return this.RandomArrayDogIndex;
    },

    /*
    Calls the API if it data haven't been retrieved yet. The data (JSON array)
    will be stored in this.dogBreedPromiseState.data
    */
    getAllData() {
        if (this.dogBreedPromiseState.data === undefined){
            resolvePromise(getDogBreed(), this.dogBreedPromiseState)
        }else{
            this.useableDogData = this.dogBreedPromiseState.data.filter(removeNoRequiredDataCB)
            console.log(this.generateRandomArrayOfIndex())
            console.log(this.getArrayofRandomDogIndex())
            console.log(this.getChoosenDogs())
            console.log(this.getChoosenDogOrigin())
            
        }   
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