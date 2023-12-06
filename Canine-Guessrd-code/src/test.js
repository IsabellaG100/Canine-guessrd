const test_array = [
    {
        breedName:"Akbash",
        origin: "Turkey", 
        imgThumb: "https://s3.us-west-004.backblazeb2.com/encurate/static/dogbreed/Akbash.jpg",
        breedDescription: "The Akbash, Turkish: Akbaş, is a traditional Turkish breed or type of flock guardian dog from western Anatolia.", 
    }, 
    {
        breedName:"Golden Retriver",
        origin: null, 
        imgThumb: null,
        breedDescription: "The Akbash, Turkish: Akbaş, is a traditional Turkish breed or type of flock guardian dog from western Anatolia.", 
     
    },
    {
        breedName:"Aktia Chow",
        origin: "Northern America", 
        imgThumb: null,
        breedDescription:"The Akita Chow is a mixed breed dog–a cross between the Akita and Chow Chow dog breeds."
     
    },
    {
        breedName:null,
        origin: "Northern America", 
        imgThumb: "https://s3.us-west-004.backblazeb2.com/encurate/static/dogbreed/Alaskan_Klee_Kai.jpg",
        breedDescription: "The Alaskan Klee Kai is a spitz-type breed of dog, developed in the late 20th century as a companion-sized dog resembling the larger Alaskan Malamute and Siberian Husky."
      
    }
]

function isAllDataThereCB(obj){
    return (obj.breedName !== null && obj.imgThumb !== null);
}

function removeNameCB(obj){
    const newObj = {...obj}
    delete newObj.breedName
    return newObj

}
//const result_array = test_array.filter(isAllDataThereCB)
const result_array = test_array.map(removeNameCB)

//console.log(result_array)

const number_array = Array.from({length:70}, ()=> {
    return Math.floor(Math.random()*400)+1
});

const indicesArray = [1, 3, 0,]; // Example array of indices
const objectsArray = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 28 },
  { name: 'Eva', age: 35 },
];

// Use map to create a new array of objects based on indicesArray
const newArray = indicesArray.map(index => objectsArray[index]);

console.log(newArray);