import {getDogBreed} from "../dogBreedSource.js"
import resolvePromise from "../resolvePromise.js";
import { shuffleArray, filterDuplicateValues, generateRandomArrayOfIndex } from "../utilities.js";



export default {

    leaderboard: {},
    showGame: false,
    gameStarted: false,
    score: 0,
    dogBreedPromiseState: {},
    useableDogData:[],
    RandomDogIndexArray:[],
    choosenDogs: null,
    choosenDogBreeds: null,
    choosenDogOrigin: null,
    guessedDogs: [],
    guessedDogOrigin: [],
    arrayIndex: [101,77,84,6,341],    
   
    /*
    Vi måste reset allt om spelare vill göra igen
    */
    startGame(){
        this.score = 0;
        this.guessedDogBreeds = []
        this.guessedDogOrigin = []
        this.setRandomDogIndexArray()
        this.getChoosenDogs()
        this.setChoosenDogBreeds()
        this.setChoosenDogOrigin()
        console.log("the first choosen dogname inside startGame",this.choosenDogs[0])
        console.log("Inside and done with startGame")
        this.showGame = true;

    },

    
    setGussedDogs(obj){
        this.guessedDogs = [...this.guessedDogs, {breedName: obj[0],
                                                  origin: obj[1]}]
        
        console.log("this.choosenDogs", this.choosenDogs)

    },
    /*
    Adds every guessed dog to an array with dog objects with only two attributes, id and Origin
    */
    setGuseedDogOrigin(obj){
        this.guessedDogOrigin = [...this.guessedDogOrigin, obj ]

    },


    calculateScore(){
        if(this.guessedDogs !== null){ // have the user guessed?
               const comparing_array = this.choosenDogs//.slice(0,this.guessedDogs.length) // split the choosen dogs variable where the last dog in game was 
               console.log("After spreading choosen dogs", comparing_array) 
               /*comparing_array.forEach((value, index)=>{
                    if(value.origin === this.guessedDogs[index].origin){
                        this.score += 1; 
                    }
                    if(value.breedName === this.guessedDogs[index].breedName){
                        this.score +=1; 
                    }
                })
            
                console.log(this.score)*/
        }else{
            throw new Error ("either origin or breed has not been guessed")}
    },

    /*
     sets this.choosenDogbreeds which is an array of dog objects with only 2 attributes, 
    value: dog id (int)
    label: dog breed (string)
    */
    
    setChoosenDogBreeds(){
        if(this.choosenDogs !== null){
            this.choosenDogBreeds = filterDuplicateValues(this.choosenDogs, 'origin').map(function(dict_obj){
                return ({"value": dict_obj.breedName,
                        "label": dict_obj.breedName}); 
            });
            shuffleArray(this.choosenDogBreeds)
        }else{
            console.log("this.choosen dogs is unfilled")
        }
    },

    /*
    sets this.choosenDogOrigin which is an array of dog objects with only 2 attributes, 
    value: dog id (int)
    label: dog Origin (string)    */
    setChoosenDogOrigin(){

        function createObjWithOriginIdCB(dict_obj){
            return  ({"value": dict_obj.origin, 
                      "label": dict_obj.origin});
        }    
        
        if(this.choosenDogs !== null){
            this.choosenDogOrigin= filterDuplicateValues(this.choosenDogs, 'origin').map(createObjWithOriginIdCB)
            shuffleArray(this.choosenDogOrigin)
        }else{
            console.log("this.choosen dogs is unfilled")
        }
    },

     /*
    returns, Depending of the array with random ints (index) an array with dictionary objects of the dogs that are choosen 
    They are put in the variable choosenDogs if it is not already filled, otherviwse the function returns the choosenDogs variable
    choosenDogs is an array with dictionary objects of the dogs (dogbreed, origin, img) that is going to be used in the game turn
    */
    getChoosenDogs(){
   
            this.choosenDogs = this.RandomDogIndexArray.map(index => this.dogBreedPromiseState.data[index])
            console.log("this.choosenDogs",this.choosenDogs)
            return this.choosenDogs
    },
   
    /*
    A function that generate an array of 100 random ints that
    will choose 100 (check the number after length:) random dogbreeds from the data from the API
     
    generateRandomArrayOfIndex(){
        this.RandomArrayDogIndex = Array.from({length:100}, ()=> {
            return Math.floor(Math.random()*317)
        });
    },

    */
    setRandomDogIndexArray(){
        this.RandomDogIndexArray = generateRandomArrayOfIndex()
    },

    /*
    Calls the API if it data haven't been retrieved yet. The data (JSON array)
    will be stored in this.dogBreedPromiseState.data
    */
    getDataFromAPI() {
        if (this.dogBreedPromiseState?.data === undefined){
            resolvePromise(getDogBreed(), this.dogBreedPromiseState)
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