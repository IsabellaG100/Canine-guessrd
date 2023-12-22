import {getDogBreed} from "../dogBreedSource.js"
import resolvePromise from "../resolvePromise.js";
import {sortAlpabeticByAttribute, filterDuplicateValues, generateRandomArrayOfIndex } from "../utilities.js";

export default {

    leaderboard: {},
    showGame: false,
    showResult: false,
    gameStarted: false,
    HighScore: null,
    score: 0,
    dogBreedPromiseState: {},
    RandomDogIndexArray:[],
    choosenDogs: [],
    choosenDogBreeds: null, // these are the options the user can choose between
    choosenDogOrigin: null, // these are the options the user can choose between
    guessedDogs: [],
    correctAnswerBreed: "",
    correctAnswerOrigin: "",

    /*
    Resets the game state, initializing or resetting various variables such as the score,
    guessed dogs, random dog indices, chosen dogs, and flags controlling the display of the game and result.
    This function is called at the beginning of a new game.
    */
    startGame(){
        this.score = 0;
        this.guessedDogs = [];
        this.setRandomDogIndexArray()
        this.getChoosenDogs()
        this.setChoosenDogBreeds()
        this.setChoosenDogOrigin()
        this.showGame = true;
        this.showResult = false;
        this.correctAnswerBreed = "";
        this.correctAnswerOrigin = "";
    },
    
    /* 
    Updates information about guessed dogs based on the provided object (breed name and origin).
    Checks if the guesses are correct and updates the corresponding variables, 
    such as correctAnswerBreed and correctAnswerOrigin.
    */
    setGussedDogs(obj){
        this.correctAnswerBreed = "Wrong"
        this.correctAnswerOrigin = "Wrong"

        this.guessedDogs = [...this.guessedDogs, {breedName: obj[0], origin: obj[1]}] 
        if (obj[0] === this.choosenDogs[this.guessedDogs.length-1].breedName){
            this.correctAnswerBreed = "Correct!"
        }
        if (obj[1] === this.choosenDogs[this.guessedDogs.length-1].origin){
            this.correctAnswerOrigin = "Correct!"
        }

    },

    /*
    Calculates the user's score based on the guessed dogs. 
    Compares the user's guesses with the correct answers and increments the score accordingly. 
    It also sets a flag (showResult) to indicate that the result can be displayed.
    */
    calculateScore(){
        if(this.guessedDogs.length !== 0){ // have the user guessed?
               const comparing_array = [...this.choosenDogs].slice(0,this.guessedDogs.length) // split the choosen dogs variable where the last dog in game was 
               if(!this.showResult){
               comparing_array.forEach((value, index)=>{
                    if(value.origin === this.guessedDogs[index].origin){
                        this.score += 1; 
                    }
                    if(value.breedName === this.guessedDogs[index].breedName){
                        this.score +=1; 
                    }
                })
                this.showResult = true
            }
        }else{
            this.guessedDogs = [{breedName: "---", origin: "---"}]
        }
    },

    /*
     Generates a list of unique dog breeds from the chosen dogs and formats them into an array of objects suitable for options in a dropdown. 
     The list is then sorted alphabetically.
    */
    setChoosenDogBreeds(){
        if(this.choosenDogs !== null){
            this.choosenDogBreeds = filterDuplicateValues(this.choosenDogs, 'origin').map(function(dict_obj){
                return ({"value": dict_obj.breedName,
                        "label": dict_obj.breedName}); 
            });
            this.choosenDogBreeds = sortAlpabeticByAttribute(this.choosenDogBreeds, "label") // sorts the options in alphabetical order
        }
    },

    /*
     Generates a list of unique dog origins from the chosen dogs and formats them into an array of objects suitable for options in a dropdown. 
     The list is then sorted alphabetically.
    */
    setChoosenDogOrigin(){ 
        if(this.choosenDogs !== null){
            this.choosenDogOrigin= filterDuplicateValues(this.choosenDogs, 'origin').map(function(dict_obj){
                return({"value" : dict_obj.origin,
                        "label": dict_obj.origin})
            })
            this.choosenDogOrigin = sortAlpabeticByAttribute(this.choosenDogOrigin, "label") // sorts the options in alphabetical order
        }
    },

    /*
    Retrieves a subset of dogs from the API response based on a previously generated array of random indices (RandomDogIndexArray). 
    These dogs are then assigned to the choosenDogs variable.
    */
    getChoosenDogs(){
            this.choosenDogs = this.RandomDogIndexArray.map(index => this.dogBreedPromiseState.data[index])
            return this.choosenDogs
    },

   /*
    Generates a random array of indices (RandomDogIndexArray) to be used for selecting dogs from the API response.
    This array is then used by getChoosenDogs().
   */
    setRandomDogIndexArray(){
        this.RandomDogIndexArray = generateRandomArrayOfIndex()
    },

    /*
    Checks if data from the API has been retrieved.
    If not, it calls the getDogBreed() function from an external source and 
    resolves the promise, storing the resulting data in this.dogBreedPromiseState.data.
    */
    getDataFromAPI() {
        if (this.dogBreedPromiseState?.data === undefined){
            resolvePromise(getDogBreed(), this.dogBreedPromiseState)
        }    
      },
}