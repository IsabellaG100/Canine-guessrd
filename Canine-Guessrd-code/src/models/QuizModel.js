import {getDogBreed} from "../dogBreedSource.js"
import resolvePromise from "../resolvePromise.js";

export default {

    leaderboard: {},
    showGame: false,
    gameStarted: false,
    score: 0,
    dogBreedPromiseState: {},
    useableDogData:[],
    RandomArrayDogIndex:[],
    choosenDogs: null,
    choosenDogBreeds: null,
    choosenDogOrigin: null,
    guessedDogBreeds: [],
    guessedDogOrigin: [],
    arrayIndex: [101,77,84,6,341],    
   
    /*
    Vi måste reset allt om spelare vill göra igen
    */
    startGame(){
        this.generateRandomArrayOfIndex()
        this.getChoosenDogs()
        this.setChoosenDogBreeds()
        this.setChoosenDogOrigin()
        console.log("the first choosen dogname inside startGame",this.choosenDogs[0].breedName)
        console.log("Inside and done with startGame")
        this.showGame = true;

    },

    /*
    Adds every guessed dog to an array with dog objects with only two attributes, id and breedName
    */
    setGuseedDogBreed(obj){
        this.guessedDogBreeds = [...this.guessedDogBreeds, obj ]

    },
    /*
    Adds every guessed dog to an array with dog objects with only two attributes, id and Origin
    */
    setGuseedDogOrigin(obj){
        this.guessedDogOrigin = [...this.guessedDogOrigin, obj ]

    },


    calculateScore(){
        if(this.guessedDogBreeds !== null && this.guessedDogOrigin !== null){ // have the user guessed?
            if(this.guessedDogBreeds.length === this.setGuseedDogOrigin.length){ // have they the same amount of answers on origin and breed?
                const comparing_array = [...this.choosenDogs.slice(0,this.guessedDogBreeds.length)] // split the choosen dogs variable where the last dog in game was 
                comparing_array.forEach((value, index)=>{
                    if(value.origin === this.guessedDogOrigin[index].label){
                        this.score += 1; 
                    }
                    if(value.breedName === this.guessedDogOrigin[index].label){
                        this.score +=1; 
                    }
                })
            }

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
            this.choosenDogBreeds = this.choosenDogs.map(function(dict_obj){
                return ({"value": dict_obj.breedName,
                        "label": dict_obj.breedName}); 
            });
        }else{
            console.log("this.choosen dogs is unfilled")
        }
    },

    /*
    sets this.choosenDogOrigin which is an array of dog objects with only 2 attributes, 
    value: dog id (int)
    label: dog Origin (string)    */
    setChoosenDogOrigin(){

        // Function to filter out duplicates based on a specific attribute
        const filterDuplicates = (array, attribute) => {
        const uniqueValues = [];
        return array.filter((obj) => {
            if (!uniqueValues.includes(obj[attribute])) {
            uniqueValues.push(obj[attribute]);
            return true;
            }
            return false;
        });
        };

        function createObjWithOriginIdCB(dict_obj){
            return  ({"value": dict_obj.origin, 
                      "label": dict_obj.origin});
        }    
        

        if(this.choosenDogs !== null){
            this.choosenDogOrigin= filterDuplicates(this.choosenDogs, 'origin').map(createObjWithOriginIdCB)
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
        
       // if(this.choosenDogs === null && this.RandomArrayDogIndex!== null){
            console.log("this is the random index array use in choosen dogs",this.RandomArrayDogIndex)
            console.log("This should be the first dog name", this.dogBreedPromiseState.data[this.RandomArrayDogIndex[0]].breedName)
            this.choosenDogs = this.RandomArrayDogIndex.map(index => this.dogBreedPromiseState.data[index])
            console.log("return first choosen dog name ", this.choosenDogs[0].breedName)
            return this.choosenDogs
      //  }
        
       /* if(this.choosenDogs !== null){
            console.log("return choosen dogs", this.choosenDogs)
            return this.choosenDogs
        }   */
    },
   
    /*
    A function that generate an array of 100 random ints that
    will choose 100 (check the number after length:) random dogbreeds from the data from the API
    */ 
    generateRandomArrayOfIndex(){
        this.RandomArrayDogIndex = Array.from({length:100}, ()=> {
            return Math.floor(Math.random()*317)
        });
    },


    getArrayofRandomDogIndex(){
        return this.RandomArrayDogIndex;
    },

    /*
    Calls the API if it data haven't been retrieved yet. The data (JSON array)
    will be stored in this.dogBreedPromiseState.data
    */
    getDataFromAPI() {
        if (this.dogBreedPromiseState?.data === undefined){
            resolvePromise(getDogBreed(), this.dogBreedPromiseState)
        }
            /*this.useableDogData = this.dogBreedPromiseState.data.filter(removeNoRequiredDataCB)
            console.log(this.useableDogData)
            console.log(this.generateRandomArrayOfIndex())
            console.log(this.getArrayofRandomDogIndex())
            console.log(this.getChoosenDogs(this.RandomArrayDogIndex))
            console.log(this.getChoosenDogBreeds(this.choosenDogs))*/
            
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