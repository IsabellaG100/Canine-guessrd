function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function filterDuplicateValues(array, attribute){
    const uniqueValues = [];
    return array.filter((obj) => {
        if (!uniqueValues.includes(obj[attribute])) {
                uniqueValues.push(obj[attribute]);
                return true;
        }
        return false;
    });
}
/*
    A function that generate an array of 100 random ints that
    will choose 100 (check the number after length:) random dogbreeds from the data from the API
    */ 
    function generateRandomArrayOfIndex(){
        return Array.from({length:100}, ()=> {
            return Math.floor(Math.random()*317)
        });
    }

export {shuffleArray, filterDuplicateValues, generateRandomArrayOfIndex}