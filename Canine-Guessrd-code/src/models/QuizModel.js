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
    choosenDogs: null,
    choosenDogBreeds: null, // these are the options the user can choose between
    choosenDogOrigin: null, // these are the options the user can choose between
    guessedDogs: [],
    correctAnswerBreed: false,
    correctAnswerOrigin: false,

    startGame(){
        this.score = 0;
        this.guessedDogs = [];
        this.setRandomDogIndexArray()
        this.getChoosenDogs()
        this.setChoosenDogBreeds()
        this.setChoosenDogOrigin()
        this.showGame = true;
        this.showResult = false;
    },
    
    setGussedDogs(obj){
        this.correctAnswerBreed = false
        this.correctAnswerOrigin = false

        this.guessedDogs = [...this.guessedDogs, {breedName: obj[0], origin: obj[1]}] 
        if (obj[0] === this.choosenDogs[this.guessedDogs.length-1].breedName){
            this.correctAnswerBreed = true
        }
        if (obj[1] === this.choosenDogs[this.guessedDogs.length-1].origin){
            this.correctAnswerOrigin = true
        }

    },

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
                //console.log("You recived the score:",this.score)
        }else{
            this.guessedDogs = [{breedName: "---", origin: "---"}]
        }
    },

    setChoosenDogBreeds(){
        if(this.choosenDogs !== null){
            this.choosenDogBreeds = filterDuplicateValues(this.choosenDogs, 'origin').map(function(dict_obj){
                return ({"value": dict_obj.breedName,
                        "label": dict_obj.breedName}); 
            });
            this.choosenDogBreeds = sortAlpabeticByAttribute(this.choosenDogBreeds, "label") // sorts the options in alphabetical order
        }else{
            //console.log("this.choosen dogs is unfilled")
        }
    },


    setChoosenDogOrigin(){ 
        if(this.choosenDogs !== null){
            this.choosenDogOrigin= filterDuplicateValues(this.choosenDogs, 'origin').map(function(dict_obj){
                return({"value" : dict_obj.origin,
                        "label": dict_obj.origin})
            })
            this.choosenDogOrigin = sortAlpabeticByAttribute(this.choosenDogOrigin, "label") // sorts the options in alphabetical order
        }else{
            //console.log("this.choosen dogs is unfilled")
        }
    },

    getChoosenDogs(){
            this.choosenDogs = this.RandomDogIndexArray.map(index => this.dogBreedPromiseState.data[index])
            //console.log("this.choosenDogs",this.choosenDogs)
            return this.choosenDogs
    },
   
    setRandomDogIndexArray(){
        this.RandomDogIndexArray = generateRandomArrayOfIndex()
    },

    /*
    Calls the API if it data haven't been retrieved yet.The data (JSON array)
    will be stored in this.dogBreedPromiseState.data
    */
    getDataFromAPI() {
        if (this.dogBreedPromiseState?.data === undefined){
            resolvePromise(getDogBreed(), this.dogBreedPromiseState)
        }    
      },
}